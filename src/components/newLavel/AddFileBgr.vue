<template>
  <Transition name="fade">
    <AddFileBgr v-if="rootStore.popupAddBgr" :projectId="$props.projectId" />
  </Transition>
  <input
    class="file-input"
    type="file"
    @change="fileInsertion(saveFaileBgr, getFilteredFileBg)"
    ref="fileInputBgr"
  />
  <div @click.self="rootStore.popupAddBgr = false" class="add-file-bgr_bgdrop">
    <div class="add-file-bgr">
      <div
        @click="handlerLeftMove"
        class="add-file-bgr__arrow add-file-bgr__arrow-left"
      ></div>
      <div v-if="carouselUpdate" class="add-file-bgr__carousel" ref="sliders">
        <div
          v-for="(background, index) in backgrounds"
          :key="index"
          class="add-file-bgr_grid"
        >
          <div
            v-for="bgr in background"
            :key="bgr.id"
            @click="handlerUploadBgr(bgr.plus)"
            :class="[
              'add-file-bgr_elem',
              {
                'add-file-bgr_elem_last': bgr.plus,
              },
            ]"
          >
            <BgrComponent
              :type="bgr.type"
              :content="bgr.content"
              :poster="bgr.poster"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
      <div
        @click="handlerRightMove"
        class="add-file-bgr__arrow add-file-bgr__arrow-right"
      ></div>
      <div class="add-file-bgr_title">Добавьте свои фото или видео</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, watch, onMounted } from "vue";
import { fileInput, fileInsertion, browseFile } from "@/utils/file";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";
import { getURLForFile, getURLForFilePoster } from "@/utils/str";
import BgrComponent from "@/components/controls/BgrComponent.vue";

const props = defineProps<{
  projectId: number;
}>();

const rootStore = useRootStore();
const projectStore = useProjectStore();

const backgroundsEmpty = [
  { id: "0-emty", content: "", type: "empty", plus: true },
  { id: "1-emty", content: "", type: "empty" },
  { id: "2-emty", content: "", type: "empty" },
  { id: "3-emty", content: "", type: "empty" },
  { id: "4-emty", content: "", type: "empty" },
  { id: "5-emty", content: "", type: "empty" },
  { id: "6-emty", content: "", type: "empty" },
  { id: "7-emty", content: "", type: "empty" },
  { id: "8-emty", content: "", type: "empty" },
];

const widthSlid = 33.75;
let move = 0;

const backgrounds: Ref<any[]> = ref([]);
const carouselUpdate: Ref<boolean> = ref(true);
const sliders: Ref<HTMLDivElement | null> = ref(null);
const fileInputBgr: Ref<HTMLInputElement | null> = ref(null);

function handlerUploadBgr(enabled: boolean | undefined) {
  if (enabled && fileInputBgr.value) {
    fileInput.value = fileInputBgr.value;
    browseFile();
  }
}

function handlerLeftMove() {
  move += widthSlid;
  if (widthSlid <= move) {
    move = (backgrounds.value.length - 1) * (-widthSlid * 3);
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

function handlerRightMove() {
  move -= widthSlid;
  if (backgrounds.value.length * (-widthSlid * 2) >= move) {
    move = 0;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

async function saveFaileBgr(filteredFile: File) {
  projectStore.backgroundsFill.push({
    id: 0,
    content: "",
    poster: "",
    type: "load",
  });
  updateBgrCarusel();
  if (projectStore.backgroundsEmpty.length > 1) {
    projectStore.backgroundsEmpty.pop();
  }
  const backgroundNew = await projectService.postBackgrounds({
    file: filteredFile,
  }, props.projectId);
  projectStore.backgroundsFill.pop();
  projectStore.backgroundsFill.push({
    id: (backgroundNew as any).id,
    content: getURLForFile((backgroundNew as any).name, (backgroundNew as any).format),
    poster: getURLForFilePoster((backgroundNew as any).poster_path),
    type: (backgroundNew as any).type,
  });
  updateBgrCarusel();
}

function getFilteredFileBg(file: File) {
  if (/\.(jpg|jpeg|png|webp|mp4|JPG|PNG|JPEG|WEBP|MP4)$/.test(file.name)) {
    return file;
  }
  rootStore.popupWarning = true;
  rootStore.textWarning = "неверный формат файла";
  return null;
}

function updateBgrCarusel() {
  const pages = Math.trunc(projectStore.backgroundsFill.length / 9);
  const remainder = projectStore.backgroundsFill.length - pages * 9;
  let index = 0;
  for (index; index < pages; index++) {
    backgrounds.value[index] = projectStore.backgroundsFill.slice(
      index * 9,
      (index + 1) * 9
    );
  }
  if (remainder > 0) {
    const endArrayBgr = projectStore.backgroundsFill.slice(
      index * 9,
      index * 9 + remainder
    );
    backgrounds.value[index] = endArrayBgr;
    backgrounds.value[index].push({
      id: "0-emty",
      content: "",
      type: "empty",
      plus: true,
    });
    let endArrayBgrIndex = endArrayBgr.length;
    while (endArrayBgrIndex < 9) {
      backgrounds.value[index].push({
        id: "0-emty",
        content: "",
        type: "empty",
      });
      endArrayBgrIndex += 1;
    }
  } else {
    backgrounds.value[index] = backgroundsEmpty;
  }
}

onMounted(() => {
  updateBgrCarusel();
});

watch(
  () => backgrounds.value,
  () => {
    carouselUpdate.value = false;
    carouselUpdate.value = true;
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.add-file-bgr {
  position: absolute;
  width: 66%;
  left: 50%;
  transform: translateX(-50%);
  height: 80vh;
  bottom: 5vh;
  z-index: 2;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(17.5px);
  box-sizing: border-box;
  padding: 8px;
  padding-bottom: 0;
  overflow: hidden;
  &_bgdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
  &__carousel {
    display: flex;
    column-gap: 1.25%;
    height: calc(100% - 4.5vh);
    width: 100%;
    transition: transform 0.3s;
  }
  &_grid {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(3, 32.5%);
    grid-template-rows: repeat(3, 32.5%);
    box-sizing: border-box;
    gap: 1.25%;
    flex-shrink: 0;
  }
  &_elem {
    border-radius: 20px;
    background-color: #2a2a2a;
    &_last {
      background-image: url(@/assets/icons/plus.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 42% 42%;
      cursor: pointer;
    }
    &__img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      max-width: none;
      border-radius: 10px;
      box-shadow: 0 7px 8px -5px #000;
    }
  }
  &_title {
    color: rgba(255, 255, 255, 0.75);
    font-family: JuraSemiBold;
    font-size: 3.5vh;
    line-height: 125%;
    letter-spacing: -0.76px;
    text-align: center;
  }
  &__arrow {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    &-left {
      left: 12px;
      background-image: url(@/assets/icons/slider-arrow-left.svg);
    }
    &-right {
      right: 12px;
      background-image: url(@/assets/icons/slider-arrow-right.svg);
    }
  }
}
</style>
