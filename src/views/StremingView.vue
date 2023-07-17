<template>
  <div class="streaming">
    <Transition name="fade">
      <PopupOrder v-if="homeStore.popupOrder" />
    </Transition>
    <Transition name="fade">
      <div v-if="homeStore.uploadProject" @click.self="homeStore.uploadProject = false" class="order">
        <div @click="homeStore.popupOrder = true" class="order__visualization">Заказать визуализацию объекта недвижимости</div>
        <div @click="homeStore.popupOrder = true" class="order__project">Загрузить готовый дизайн-проект </div>
      </div>
    </Transition>
    <div class="streaming__backdrop">
      <HeaderComponent
        urlButton="header/streaming.png"
        urlButtonHover="header/streaming.png"
        type="burger"
        @switch="homeStore.infoPage = !homeStore.infoPage"
      />
      <ContentComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import HeaderComponent from "@/components/home/HeaderComponent.vue";
import ContentComponent from "@/components/home/ContentComponent.vue";
import FooterComponent from "@/components/home/FooterComponent.vue";
import PopupOrder from "@/components/home/PopupOrder.vue";
import { useHomeStore } from  "@/store"

const homeStore = useHomeStore()
const blackout = ref(false)

watch(
  () => homeStore.secondPage,
  () => {
    blackout.value = true
    setTimeout(() => blackout.value = false, 300)
  }
)
</script>

<style lang="scss" scoped>
.streaming {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/streaming/bg.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .order {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgba(0, 0, 0, .78);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10vh;
  }
  &__backdrop {
    height: 100vh;
    width: 100vw;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    background-color: rgba(255, 255, 255, .51);
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
  transition: opacity .2s ease;
}
.trans-enter-from,
.trans-leave-to {
  opacity: 0;
}
</style>
