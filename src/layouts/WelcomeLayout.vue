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
    <div
      class="layout-welcome__backdrop"
      :style="{
        backgroundColor: bgrDropColor,
      }"
    >
      <EmptyComponent />
      <div class="layout-welcome__content">
        <div class="layout-welcome__content_top">
          <slot name="content-top"></slot>
        </div>
        <div class="test">
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
        <div class="layout-welcome__content_bottom">
          <slot name="content-bottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import BgrComponent from "@/components/controls/BgrComponent.vue";
import BtnComponent from "@/components/controls/BtnComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";

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

onMounted(() => {
  if (props.bgBase) {
    emit("finish-load");
    return;
  }
  const bgrImage = new Image();

  bgrImage.onload = function () {
    if (!bgr.value) return;
    bgr.value.style.backgroundImage = "url(" + bgrImage.src + ")";
    emit("finish-load");
  };
  bgrImage.src = "/backgrounds/" + props.bg;
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
