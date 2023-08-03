<template>
  <div
    class="layout"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}`)})`,
    }"
  >
    <div
      :class="[
        'layout__backdrop',
        { layout__blackout: blackout, layout__whiteout: whiteout },
      ]"
    >
      <HeaderComponent
        :theme="theme"
        :urlButton="`header/${urlBtnHeader}.png`"
        :urlButtonHover="`header/${urlBtnHeaderHover}.png`"
        type="burger"
        @switch="rootStore.infoPage = !rootStore.infoPage"
      />
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
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/common/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  bg: string;
  theme?: "light";
  blackout: boolean;
  whiteout: boolean;
  urlBtnHeader: string;
  urlBtnHeaderHover: string;
  curentPagesFooter: number;
  numberPagesFooter: number;
  textButtonFooter: string;
  colorTwoPagesFooter: string;
  titleContent: string;
  textContent: string;
  urlBtnContent: string;
  urlBtnContentHover: string;
}>();
</script>

<style lang="scss" scoped>
.layout {
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
