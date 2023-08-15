<template>
  <div class="carousel">
    <div
      @click="handlerLeftMove"
      class="carousel__arrow carousel__arrow-left"
    ></div>
    <div class="sliders" ref="sliders">
      <div
        v-for="(background, index) in projectStore.backgrounds"
        :key="background.id"
        :class="[
          'sliders__bacdrop',
          {
            sliders__bacdrop_last:
              index === projectStore.backgrounds.length - 1,
          },
        ]"
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
      @click="handlerRightMove"
      class="carousel__arrow carousel__arrow-right"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import { useProjectStore } from "@/store";

const projectStore = useProjectStore();

const widthSlid = 33.75;
let move = 0;

const backgrounds = [{}, {}, {}];
const indexBackgrounds = ref(0);
const isShowPopup = ref(false);
const sliders: Ref<HTMLDivElement | null> = ref(null);

function handlerShowPopup(index: number) {
  indexBackgrounds.value = index;
  isShowPopup.value = true;
}

function handlerLeftMove() {
  if (projectStore.backgrounds.length === 3) return;
  move += widthSlid;
  if ((projectStore.backgrounds.length - 1) * widthSlid <= move) {
    move = (projectStore.backgrounds.length - 1) * -widthSlid;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

function handlerRightMove() {
  if (projectStore.backgrounds.length === 3) return;
  move -= widthSlid;
  if (projectStore.backgrounds.length * -widthSlid >= move) {
    move = (projectStore.backgrounds.length - 2) * widthSlid;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

onMounted(() => {
  // projectService.getBackgrounds().then((res) => {
  //     projectStore.backgrounds.push(...res.backgrounds);
  // });
});
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 66%;
  height: 27vh;
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
      z-index: 1;
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
