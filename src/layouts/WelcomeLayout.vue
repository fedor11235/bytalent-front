<template>
  <div ref="bgr" class="layout-welcome">
    <div v-if="bgBase">
      <BgrComponent
        :type="bgBase.type"
        :content="bgBase.content"
        :poster="bgBase.poster"
        autoPlay
        class="layout-welcome__img"
      />
    </div>
    <div>
      <Transition name="fade">
        <div
          v-if="rootStore.contentBackdrop"
          class="layout-welcome__backdrop"
          :style="{
            backgroundColor: bgrDropColor,
          }"
        ></div>
      </Transition>
      <EmptyComponent />
      <div class="layout-welcome__content">
        <Transition name="top-layout">
          <div v-if="rootStore.contentTop" class="layout-welcome__content_top">
            <slot name="content-top"></slot>
          </div>
        </Transition>
        <Transition name="middle-layout">
          <div v-if="rootStore.contentMiddle">
            <div class="layout-welcome__title">{{ title }}</div>
            <div class="layout-welcome__description">
              <LineComponent v-if="isLine" />
              {{ description }}
            </div>
            <BtnComponent
              class="layout-welcome__btn"
              :imgBtn="imgBtn"
              :btnClick="btnClick"
            />
          </div>
        </Transition>
        <Transition name="bottom-layout">
          <div
            v-if="rootStore.contentBottom"
            class="layout-welcome__content_bottom"
          >
            <slot name="content-bottom"></slot>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import BgrComponent from "@/components/controls/BgrComponent.vue";
import BtnComponent from "@/components/controls/BtnComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const emit = defineEmits(["finish-load"]);

const props = defineProps<{
  bg: string;
  imgBtn: string;
  isLine?: boolean;
  bgrDropColor?: string;
  bgrDropBlur?: string;
  bgBase?: any;
  btnClick: () => void;
  title: string;
  description: string;
  theme?: "light";
  noHover?: boolean;
}>();

const bgr = ref();

rootStore.contentTop = false;
rootStore.contentMiddle = false;
rootStore.contentBottom = false;

onMounted(() => {
  if (props.bgBase) {
    emit("finish-load");
    setTimeout(() => {
      rootStore.contentTop = true;
      rootStore.contentMiddle = true;
      rootStore.contentBottom = true;
      rootStore.contentBackdrop = true;
    }, 100);
    return;
  }
  const bgrImage = new Image();

  bgrImage.onload = function () {
    if (!bgr.value) return;
    bgr.value.style.backgroundImage = "url(" + bgrImage.src + ")";
    emit("finish-load");
    setTimeout(() => {
      rootStore.contentTop = true;
      rootStore.contentMiddle = true;
      rootStore.contentBottom = true;
      rootStore.contentBackdrop = true;
    }, 500);
  };
  bgrImage.src = "/backgrounds/" + props.bg;
});

onUnmounted(() => {
  rootStore.contentTop = false;
  rootStore.contentMiddle = false;
  rootStore.contentBottom = false;
  rootStore.contentBackdrop = false;
});
</script>

<style lang="scss" scoped>
.hidden {
  opacity: 0;
}
.layout-welcome {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__img {
    position: fixed;
  }
  &__backdrop {
    top: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.35);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    // backdrop-filter: blur(12.5px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 74vw;
    margin: auto;
    &_top {
      height: 23.518vh;
      margin-top: 7.037vh;
      margin-bottom: 4.166vh;
    }
    &_bottom {
      position: absolute;
      width: 74vw;
      bottom: 3.7vh;
    }
  }
  &__title {
    color: #f9f9f9;
    font-family: JuraRegular;
    font-size: 6.1vh;
    line-height: 125%;
    letter-spacing: -1.32px;
    overflow-x: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
  &__description {
    color: #f9f9f9;
    font-family: JuraRegular;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.4px;
    display: flex;
    align-items: center;
    margin-bottom: 5.185vh;
    overflow-x: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
  &__btn {
    width: 12.5vw;
    height: 5.555vh;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: unset;
  }
}
</style>
