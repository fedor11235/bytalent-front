<template>
  <div class="layout-welcome">
    <div v-if="bgBase">
      <BgrComponent
        :type="bgBase.type"
        :content="bgBase.content"
        :poster="bgBase.poster"
        autoPlay
        class="layout-welcome__img"
      />
    </div>
    <img v-else class="test" :src="require(`@/assets/backgrounds/${bg}`)" />
    <div
      class="layout-welcome__backdrop"
      :style="{
        backgroundColor: bgrDropColor,
      }"
    >
      <!-- backdropFilter: bgrDropBlur, -->
      <EmptyComponent />
      <div class="layout-welcome__content">
        <div class="layout-welcome__content_top">
          <slot name="content-top"></slot>
        </div>
        <div class="layout-welcome__title">{{ title }}</div>
        <div class="layout-welcome__description">
          <LineComponent v-if="isLine" />
          {{ description }}
        </div>
        <img
          @click="btnClick"
          class="layout-welcome__btn"
          :src="require(`@/assets/components/${imgBtn}.svg`)"
          alt="download"
        />
        <div class="layout-welcome__content_bottom">
          <slot name="content-bottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import BgrComponent from "@/components/controls/BgrComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";

defineProps<{
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

// const previewImage = ref()
// const newImage = ref()

// onMounted(() => {
//   var image = new Image();

//   image.onload = function(){
//     newImage.value.css('background-image', 'url(' + image.src + ')');
//     newImage.value.css('opacity', '1');
//     console.log('complete');
//   };

//   image.src = previewImage.value.data('image');
// })
</script>

<style lang="scss" scoped>
.test {
  position: fixed;
  height: 100vh;
  width: 100vw;
}
// .overlay {
//   height: 23px;
//   width: 23px;
// }
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
    // object-fit: cover;
    // height: 100vh;
    // width: 100vw;
  }
  &__backdrop {
    top: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.35);
    // backdrop-filter: blur(12.5px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 74vw;
    margin: auto;
    &_top {
      height: 21vh;
      margin: 5.3vh 0;
    }
    &_bottom {
      position: absolute;
      width: 74vw;
      bottom: 7.2vh;
    }
  }
  &__title {
    color: #f9f9f9;
    font-family: JuraSemiBold;
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
    margin-bottom: 5.5vh;
    overflow-x: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
  &__btn {
    width: 15.625vw;
    height: 5.89vh;
    object-position: left;
    object-fit: contain;
    cursor: pointer;
  }
}
</style>
