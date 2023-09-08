<template>
  <input
    class="file-input"
    type="file"
    @change="fileInsertion(saveFaileBgr, getFilteredFileBg)"
    ref="fileInputBgr"
    accept="image/*,video/*"
  />
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
        <LoaderComponent
          v-if="!background.load && background.type !== 'empty'"
          size="48px"
        />
        <img
          v-if="background.type == 'img'"
          v-show="background.load"
          class="carousel__img"
          @click="handlerShowPopup($event, index)"
          @load="background.load = true"
          :src="background.content"
          alt="img"
        />
        <video
          v-else-if="background.type == 'video'"
          v-show="background.load"
          volume="0.0"
          :poster="background.poster"
          @click.prevent="handlerShowPopup($event, index, background)"
          @loadeddata="handlerVideoLoad($event, background)"
          @mouseenter="handlerVideoMouseenter"
          @mouseleave="handlerVideoMouseleave"
          class="carousel__img"
        >
          <source :src="background.content" />
        </video>
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
import type { Ref } from "vue";
import { ref } from "vue";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";
import projectService from "@/services/projectService";
import { fileInput, fileInsertion, browseFile } from "@/utils/file";
import LoaderComponent from "@/components/common/LoaderComponent.vue";
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
  if (/\.(jpg|jpeg|png|webp|mp4|JPG|PNG|JPEG|WEBP|MP4)$/.test(file.name)) {
    return file;
  }
  rootStore.popupWarning = true;
  rootStore.titleWarning = "Неподдерживаемый формат файла";
  rootStore.textWarning = "Поддерживаемые форматы:  *3dm, *fbx, *dwg";
  return null;
}

function handlerVideoLoad(event: any, background: any) {
  background.load = true;
}

function handlerVideoMouseenter(event: any) {
  event.target.play();
}

function handlerVideoMouseleave(event: any) {
  event.target.pause();
}

async function handlerShowPopup(event: any, index: number, background?: any) {
  rootStore.projectId = props.projectId;
  rootStore.indexBackgrounds = index;
  rootStore.showPopupBgr = true;
}

function handlerUploadBgr(enabled: boolean | undefined) {
  if (enabled && fileInputBgr.value) {
    fileInput.value = fileInputBgr.value;
    browseFile();
  }
}

async function saveFaileBgr(filteredFile: File) {
  const backgroundNew = await projectService.postBackgrounds({
    file: filteredFile,
  });
  projectStore.backgroundsFill.push({
    id: backgroundNew.id,
    content: getURLForFile(backgroundNew.name, backgroundNew.format),
    poster: getURLForFilePoster(backgroundNew.poster_path),
    type: backgroundNew.type,
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
      display: flex;
      align-items: center;
      justify-content: center;
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
