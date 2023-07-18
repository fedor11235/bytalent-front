<template>
  <div class="app">
    <div class="app__backdrop">
      <HeaderComponent
        urlButton="header/app.png"
        urlButtonHover="header/app.png"
        type="burger"
        @switch="homeStore.infoPage = !homeStore.infoPage"
      />
      <ContentComponent />
      <FooterComponent
        :curentPages="1"
        :numberPages="1"
        colorTwoPages="#c7c7c7"
        textButton="+ Заказать разработку приложения"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/app/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import { useHomeStore } from "@/store";

const homeStore = useHomeStore();
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/app/bg.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
  }
}
</style>
