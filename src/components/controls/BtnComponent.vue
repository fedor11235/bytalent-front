<template>
  <div>
    <div v-show="btnLoadFinish" class="ioi">
      <div
        v-show="btnState === 'default'"
        @mouseover="handlerOverBtn"
        @mouseleave="handlerLeaveOverBtn"
        @mousedown="handlerMousedown"
        @click="btnClick"
        class="btnn"
        ref="btn"
        :style="{
          backgroundImage: `url(${`/btns/${imgBtn}.svg`})`,
        }"
      ></div>
      <div
        v-show="btnState === 'hover'"
        @mouseover="handlerOverBtn"
        @mouseleave="handlerLeaveOverBtn"
        @mousedown="handlerMousedown"
        @click="btnClick"
        class="btnn"
        ref="btn"
        :style="{
          backgroundImage: `url(${`/btns/${imgBtn}-hover.svg`})`,
        }"
      ></div>
      <div
        v-show="btnState === 'pressed'"
        @mouseover="handlerOverBtn"
        @mouseleave="handlerLeaveOverBtn"
        @mousedown="handlerMousedown"
        @click="btnClick"
        class="btnn"
        ref="btn"
        :style="{
          backgroundImage: `url(${`/btns/${imgBtn}-pressed.svg`})`,
        }"
      ></div>
    </div>
    <div v-show="!btnLoadFinish" class="btnn btnn_empty">
      <div class="btnn_empty_left"></div>
      <div class="btnn_empty_right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  imgBtn: string;
  btnClick: () => void;
}>();

let btnDefaultLoadFinish = ref(false);
let btnHoverLoadFinish = ref(false);
let btnPressedLoadFinish = ref(false);

const btn = ref();
const btnState = ref("default");

const btnLoadFinish = computed(() => {
  return (
    btnDefaultLoadFinish.value &&
    btnHoverLoadFinish.value &&
    btnPressedLoadFinish.value
  );
});

function handlerOverBtn() {
  btnState.value = "hover";
}
function handlerLeaveOverBtn() {
  btnState.value = "default";
}
function handlerMousedown() {
  btnState.value = "pressed";
}

onMounted(() => {
  const btnImageDefault = new Image();
  const btnImageHover = new Image();
  const btnImagePressed = new Image();

  btnImageDefault.onload = function () {
    btnDefaultLoadFinish.value = true;
  };

  btnImageDefault.src = "/btns/" + props.imgBtn + ".svg";

  btnImageHover.onload = function () {
    btnHoverLoadFinish.value = true;
  };

  btnImageHover.src = "/btns/" + props.imgBtn + "-hover.svg";

  btnImagePressed.onload = function () {
    btnPressedLoadFinish.value = true;
  };

  btnImagePressed.src = "/btns/" + props.imgBtn + "-pressed.svg";
});
</script>

<style lang="scss" scoped>
.ioi {
  height: 100%;
  width: 100%;
}
.btnn {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &_empty {
    display: flex;
    justify-content: space-around;
    // column-gap: 0.2vw;
    border-radius: 0px 14px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.37vh 0.2vw;
    &_left {
      width: 75%;
      border-radius: 0px 0px 0px 10px;
      background-color: rgba(255, 255, 255, 0.1);
    }
    &_right {
      width: 25%;
      border-radius: 0px 10px 0px 0px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
