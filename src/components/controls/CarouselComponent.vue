<template>
  <input
    class="file-input"
    type="file"
    @change="fileInsertion(saveFaileBgr, getFilteredFileBg)"
    ref="fileInputBgr"
    accept="image/*,video/*"
  />
  <div class="test">
    <div class="carousel">
      <div class="sliders">
        <div class="sliders__bacdrop sliders__bacdrop_bgr"></div>
        <div class="sliders__bacdrop sliders__bacdrop_bgr"></div>
        <div class="sliders__bacdrop sliders__bacdrop_bgr"></div>
      </div>
    </div>
    <div class="carousel">
      <div class="sliders" ref="sliders">
        <div
          v-for="(background, index) in projectStore.backgrounds"
          :key="background.id"
          :class="[
            'sliders__bacdrop',
            {
              index: index,
              sliders__bacdrop_last: background.plus,
            },
          ]"
          @click="handlerUploadBgr(background.plus)"
        >
          <!-- v-if="!background.load && background.type !== 'empty'" -->
          <BgrComponent
            :type="background.type"
            :content="background.content"
            :poster="(background as any).poster"
            borderRadius="10px"
            @click.prevent="handlerShowPopup($event, index, background.type)"
            class="carousel__img"
          />
        </div>
      </div>
      <div
        @click="handlerLeftMove"
        class="carousel__arrow carousel__arrow-left"
      ></div>
      <div
        @click="handlerRightMove"
        class="carousel__arrow carousel__arrow-right"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";
import projectService from "@/services/projectService";
import { fileInput, fileInsertion, browseFile } from "@/utils/file";
// import LoaderComponent from "@/components/common/LoaderComponent.vue";
import BgrComponent from "@/components/controls/BgrComponent.vue";
import { getURLForFile, getURLForFilePoster } from "@/utils/str";

const props = defineProps<{
  projectId: number;
}>();

const rootStore = useRootStore();
const projectStore = useProjectStore();

const widthSlid = 33.75;
let move = 0;

const sliders: Ref<HTMLDivElement | null> = ref(null);
const fileInputBgr: Ref<HTMLInputElement | null> = ref(null);

function getFilteredFileBg(file: File) {
  if (/\.(jpg|jpeg|png|mp4|mov|JPG|JPEG|WEBP|MP4|MOV)$/.test(file.name)) {
    return file;
  }
  rootStore.popupWarning = true;
  rootStore.titleWarning = "Неподдерживаемый формат файла";
  rootStore.textWarning =
    "Поддерживаемые форматы:  *jpg, *jpeg, *png, *mp4, *mov";
  return null;
}

async function handlerShowPopup(event: any, index: number, type: string) {
  if (type !== "empty") {
    rootStore.projectId = props.projectId;
    rootStore.indexBackgrounds = index;
    rootStore.showPopupBgr = true;
  }
}

function handlerUploadBgr(enabled: boolean | undefined) {
  if (enabled && fileInputBgr.value) {
    fileInput.value = fileInputBgr.value;
    browseFile();
  }
}

async function saveFaileBgr(filteredFile: File) {
  projectStore.backgroundsFill.push({
    id: 0,
    content: "",
    poster: "",
    type: "load",
  });

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
  if (projectStore.backgroundsEmpty.length > 1) {
    projectStore.backgroundsEmpty.pop();
  }
}

function handlerLeftMove() {
  move += widthSlid;
  if (widthSlid <= move) {
    move = (projectStore.backgrounds.length - 3) * -widthSlid;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

function handlerRightMove() {
  move -= widthSlid;
  if ((projectStore.backgrounds.length - 2) * -widthSlid >= move) {
    move = 0;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 66%;
  height: 21vh;
}
.carousel {
  position: absolute;
  box-sizing: border-box;
  width: 66%;
  height: 21vh;
  max-height: 241px;
  overflow: hidden;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 8px;
  &_cntner {
    position: absolute;
    box-sizing: border-box;
    width: 66%;
    height: 21vh;
    max-height: 241px;
    overflow: hidden;
    border-radius: 24px;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 8px;
  }
  &__backdrop {
    // position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(@/assets/test.svg);
    background-size: 33%;
    background-repeat: space;
    background-position: center;
  }
  .sliders {
    width: 100%;
    display: flex;
    column-gap: 1.25%;
    transition: transform 0.3s;
    height: 100%;
    &__bacdrop {
      height: 100%;
      width: 32.5%;
      border-radius: 20px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &_bgr {
        background-color: rgba(0, 0, 0, 0.25);
      }
      &_last {
        background-image: url(@/assets/icons/plus.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 42% 42%;
        cursor: pointer;
      }
    }
  }
  &__img {
    // height: 100%;
    // width: 100%;
    // object-fit: cover;
    // max-width: none;
    // border-radius: 10px;
    // box-shadow: 0 7px 8px -5px #000;
    cursor: pointer;
  }
  &__arrow {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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
