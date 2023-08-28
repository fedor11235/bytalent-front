<template>
  <input
    class="file-input"
    type="file"
    @change="fileInsertion(saveFaileBgr, getFilteredFileBg)"
    ref="fileInputBgr"
    accept="image/*"
  />
  <div class="carousel">
    <Transition name="fade">
      <PopupLavel
        v-if="isShowPopup"
        :indexBackgrounds="indexBackgrounds"
        :projectId="projectId"
        @close="isShowPopup = false"
      />
    </Transition>
    <div class="sliders" ref="sliders">
      <div
        v-for="(background, index) in projectStore.backgrounds"
        :key="background.id"
        :class="[
          'sliders__bacdrop',
          {
            sliders__bacdrop_last: background.plus,
          },
        ]"
        @click="handlerUploadBgr(background.plus)"
      >
        <img
          v-if="background.img"
          class="carousel__img"
          @click="handlerShowPopup(index)"
          :src="background.img"
          alt="img"
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
</template>

<script setup lang="ts">
import PopupLavel from "@/components/newLavel/PopupLavel.vue";
import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";
import projectService from "@/services/projectService";
import { fileInput, fileInsertion, browseFile } from "@/utils/file";

defineProps<{
  projectId: number;
}>();

const rootStore = useRootStore();
const projectStore = useProjectStore();

const widthSlid = 33.75;
let move = 0;

const indexBackgrounds = ref(0);
const isShowPopup = ref(false);
const sliders: Ref<HTMLDivElement | null> = ref(null);
const fileInputBgr: Ref<HTMLInputElement | null> = ref(null);

function getFilteredFileBg(file: File) {
  if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
    return file;
  }
  rootStore.popupWarning = true;
  rootStore.textWarning = "неверный формат файла";
  return null;
}

function handlerShowPopup(index: number) {
  indexBackgrounds.value = index;
  isShowPopup.value = true;
}

function handlerUploadBgr(enabled: boolean | undefined) {
  if (enabled && fileInputBgr.value) {
    fileInput.value = fileInputBgr.value;
    browseFile();
  }
}

function saveFaileBgr(filteredFile: File) {
  const fr = new FileReader();
  fr.onload = async () => {
    const fbase64 = fr.result;
    const backgroundNew = await projectService.postBackgrounds({
      file: filteredFile,
    });
    projectStore.backgroundsFill.push({
      id: backgroundNew.id,
      img: String(fbase64),
    });
    if (projectStore.backgroundsEmpty.length > 1) {
      projectStore.backgroundsEmpty.pop();
    }
  };
  fr.readAsDataURL(filteredFile);
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
.carousel {
  position: relative;
  box-sizing: border-box;
  width: 66%;
  height: 21vh;
  max-height: 241px;
  overflow: hidden;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 8px;
  .sliders {
    display: flex;
    column-gap: 1.25%;
    transition: transform 0.3s;
    height: 100%;
    &__bacdrop {
      height: 100%;
      width: 32.5%;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.25);
      flex-shrink: 0;
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
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-width: none;
    border-radius: 10px;
    box-shadow: 0 7px 8px -5px #000;
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
