<template>
  <Transition name="fade">
    <PopupFAQ v-if="isFAQ" @close="isFAQ = false" />
  </Transition>
  <div
    class="layout-default"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}`)})`,
    }"
  >
    <div
      :class="[
        'layout-default__backdrop',
        {
          'layout-default__blackout': blackout,
          'layout-default__whiteout': whiteout,
        },
      ]"
    >
      <HeaderComponent :theme="theme" />
      <ContentComponent
        :theme="theme"
        :title="titleContent"
        :text="textContent"
        :urlBtn="urlBtnContent"
        :urlBtnHover="urlBtnContentHover"
      />
      <FooterComponent
        :theme="theme"
        :curentPages="curentPagesFooter"
        :numberPages="numberPagesFooter"
        :textButton="textButtonFooter"
        :colorTwoPages="colorTwoPagesFooter"
      />
    </div>
  </div>
  <div @click="isFAQ = true" class="question">?</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/common/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const isFAQ = ref(false);

defineProps<{
  bg: string;
  theme?: "light";
  blackout?: boolean;
  whiteout?: boolean;
  curentPagesFooter: number;
  numberPagesFooter: number;
  textButtonFooter?: string;
  colorTwoPagesFooter: string;
  titleContent: string;
  textContent: string;
  urlBtnContent: string;
  urlBtnContentHover: string;
}>();
</script>

<style lang="scss" scoped>
.layout-default {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
  }
  &__blackout {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__whiteout {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.51);
    backdrop-filter: blur(7px);
  }
}
.question {
  position: fixed;
  bottom: 62px;
  right: 62px;
  border-radius: 50%;
  background: rgba(62, 62, 62, 0.35);
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  z-index: 4;
  cursor: pointer;
  &:hover {
    box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
      4px 6px 12px 0px rgba(232, 232, 232, 0.25),
      2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  }
}
</style>
