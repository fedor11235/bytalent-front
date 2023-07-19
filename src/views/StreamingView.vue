<template>
  <div class="streaming">
    <Transition name="fade">
      <div
        v-if="streamingStore.popupConnect"
        @click.self="streamingStore.popupConnect = false"
        class="connect"
      >
        Сперва добавьте визуализацию!
        <div
          @click="streamingStore.popupConnect = false"
          class="connect__button"
        ></div>
      </div>
    </Transition>
    <div class="streaming__backdrop">
      <HeaderComponent
        urlButton="header/streaming.png"
        urlButtonHover="header/streaming.png"
        type="burger"
        theme="light"
      />
      <ContentComponent />
      <FooterComponent theme="light" :curentPages="0" :numberPages="0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/streaming/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import { useStreamingStore } from "@/store";

const streamingStore = useStreamingStore();
</script>

<style lang="scss" scoped>
.streaming {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/backgrounds/streaming.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .connect {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.95);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10vh;
    font-family: Jura, sans-serif;
    font-size: 4vh;
    color: #333;
    &__button {
      background-image: url(@/assets/streaming/botton_ok.png);
      width: 206px;
      height: 45px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }
  }
  &__backdrop {
    height: 100vh;
    width: 100vw;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    background-color: rgba(255, 255, 255, 0.51);
  }
}
</style>
