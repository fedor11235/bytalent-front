<template>
  <div
    class="home"
    :style="{
      backgroundImage: `url(${require(`@/assets/${
        homeStore.secondPage ? 'bg-second' : 'bg-first'
      }.jpeg`)})`,
    }"
  >
    <Transition name="trans">
      <div class="blackout" v-if="blackout" />
    </Transition>
    <Transition name="fade">
      <PopupOrder v-if="homeStore.popupOrder" />
    </Transition>
    <div class="home__backdrop">
      <HeaderComponent
        urlButton="header/visualization.png"
        urlButtonHover="header/visualization-hover.png"
        type="burger"
        @switch="homeStore.infoPage = !homeStore.infoPage"
      />
      <ContentComponent />
      <FooterComponent :numberPages="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/home/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import PopupOrder from "@/components/home/PopupOrder.vue";
import { useHomeStore } from "@/store";

const homeStore = useHomeStore();
const blackout = ref(false);

watch(
  () => homeStore.secondPage,
  () => {
    blackout.value = true;
    setTimeout(() => (blackout.value = false), 300);
  }
);
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/bg-first.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .blackout {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: black;
    z-index: 1;
  }
  &__backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.58);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.trans-enter-active,
.trans-leave-active {
  transition: opacity 0.2s ease;
}
.trans-enter-from,
.trans-leave-to {
  opacity: 0;
}
</style>
