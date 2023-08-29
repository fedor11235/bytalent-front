<template>
  <div @click.self="rootStore.showPopupBgr = false" class="popup-level">
    <div class="popup-level__carousel">
      <div
        @click="rootStore.showPopupBgr = false"
        class="popup-level__close"
      ></div>
      <div class="popup-level__arrow popup-level__arrow-pos-left">
        <div @click="handlerLeftMove" class="popup-level__arrow-left"></div>
      </div>
      <div
        ref="sliders"
        class="popup-level__sliders"
        :style="{ transform: `translateX(${move}%)` }"
      >
        <div
          v-for="background in projectStore.backgroundsFill"
          :key="background.id"
          class="popup-level__slider"
          @click.self="rootStore.showPopupBgr = false"
        >
          <img
            v-if="background.type === 'img'"
            :src="background.content"
            alt="img"
          />
          <video
            v-else-if="background.type == 'video'"
            volume="0.0"
            @loadeddata="handlerVideoLoad"
            @mouseenter="handlerVideoMouseenter"
            @mouseleave="handlerVideoMouseleave"
          >
            <source :src="background.content" />
          </video>
        </div>
      </div>
      <div class="popup-level__sliders"></div>
      <div class="popup-level__arrow popup-level__arrow-pos-right">
        <div @click="handlerRightMove" class="popup-level__arrow-right"></div>
      </div>
    </div>
    <div class="popup-level__control">
      <div
        @click="handlerAddBackground"
        class="popup-level__control__icon popup-level__control__icon_screen"
      ></div>
      <div
        @click="handlerDeleteBackground"
        class="popup-level__control__icon popup-level__control__icon_trash"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import { useProjectStore } from "@/store";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const projectStore = useProjectStore();

const props = defineProps<{
  indexBackgrounds: number;
  projectId: number;
}>();

const indexBackgrounds = ref(props.indexBackgrounds);

const widthSlid = 100;
let move = indexBackgrounds.value * -widthSlid;

const sliders: Ref<HTMLDivElement | null> = ref(null);

function handlerVideoLoad(event: any) {
  event.target.play();
  setTimeout(() => {
    event.target.pause();
  }, 1000);
}

function handlerVideoMouseenter(event: any) {
  event.target.play();
}

function handlerVideoMouseleave(event: any) {
  event.target.pause();
}

function handlerAddBackground() {
  const backgroundId = projectStore.backgroundsFill[indexBackgrounds.value].id;
  const backgroundContent =
    projectStore.backgroundsFill[indexBackgrounds.value].content;
  const backgroundType =
    projectStore.backgroundsFill[indexBackgrounds.value].type;
  projectStore.background = {
    projectId: props.projectId,
    content: backgroundContent,
    type: backgroundType,
  };
  projectService.selectBackground(projectStore.project.id, backgroundId);
}

function handlerDeleteBackground() {
  projectService.deleteBackgrounds(
    projectStore.backgroundsFill[indexBackgrounds.value].id
  );
  projectStore.backgroundsFill.splice(indexBackgrounds.value, 1);
}

function handlerLeftMove() {
  move += widthSlid;
  if (0 < move) {
    move = (projectStore.backgroundsFill.length - 1) * -widthSlid;
    indexBackgrounds.value = projectStore.backgroundsFill.length - 1;
  } else {
    indexBackgrounds.value -= 1;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

function handlerRightMove() {
  move -= widthSlid;
  if (projectStore.backgroundsFill.length * -widthSlid >= move) {
    move = 0;
    indexBackgrounds.value = 0;
  } else {
    indexBackgrounds.value += 1;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}
</script>

<style lang="scss" scoped>
.popup-level {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(19, 19, 19, 0.84);
  z-index: 4;
  &__carousel {
    position: relative;
    overflow: hidden;
    height: 65vh;
    width: 90vw;
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    height: 4vw;
    width: 4vw;
    background-image: url(@/assets/icons/close.svg);
    background-size: 40%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: rgba(62, 62, 62, 0.35);
    z-index: 1;
    cursor: pointer;
  }
  &__sliders {
    height: 100%;
    width: 100%;
    transition: transform 0.3s;
    display: flex;
  }
  &__slider {
    height: 100%;
    min-width: 100%;
    border-radius: 20px;
    display: flex;
    flex-wrap: nowrap;
    // flex-direction: row;
    justify-content: center;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: contain;
  }
  &__arrow {
    position: absolute;
    opacity: 0.6;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
    &-pos-left {
      left: 0;
    }
    &-pos-right {
      right: 0;
    }
    &-left {
      position: relative;
      left: 4px;
      width: 50%;
      height: 50%;
      border-top: 4px solid white;
      border-right: 4px solid white;
      transform: rotate(-135deg);
    }
    &-right {
      position: relative;
      right: 4px;
      width: 50%;
      height: 50%;
      border-top: 4px solid white;
      border-right: 4px solid white;
      transform: rotate(45deg);
    }
  }
  &__control {
    position: absolute;
    bottom: 7vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    column-gap: 2vh;
    &__icon {
      width: 48.58px;
      height: 41.84px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      position: relative;
      opacity: 0.55;
      &::before {
        content: "";
        font-family: JuraMedium;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        color: white;
        text-wrap: nowrap;
        opacity: 0;
        transition: opacity 0.3s;
      }
      &_screen {
        background-image: url(@/assets/icons/window.svg);
        &:hover {
          opacity: 1;
          &::before {
            opacity: 1;
            content: "Сделать фоновым";
          }
        }
      }
      &_trash {
        background-image: url(@/assets/icons/trash.svg);
        &:hover {
          opacity: 1;
          &::before {
            opacity: 1;
            content: "Удалить";
          }
        }
      }
    }
  }
}
</style>
