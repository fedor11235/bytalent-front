<template>
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
      <HeaderComponent :theme="theme" noHover />
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
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/common/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";

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
  noHover?: boolean;
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
</style>
