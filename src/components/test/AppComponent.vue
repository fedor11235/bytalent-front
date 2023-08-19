<template>
  <div class="app">
    <div class="app__backdrop">
      <HeaderComponent :theme="theme" />
      <div class="app__content">
        <div class="app__carusel">
          <div
            v-for="slider in sliders"
            :key="slider"
            :style="{
              backgroundImage: `url(${require(`@/assets/backgrounds/${slider}.png`)})`,
            }"
            class="app__carusel_slider"
          ></div>
        </div>
        <div class="app__title">Приложение «by Talent»</div>
        <div class="app__description">
          <LineComponent />
          Персональное приложение для доступа в проекты Unreal Engine 5
        </div>
        <img
          @click="HandkerClickDomnload"
          class="app__download"
          src="@/assets/components/download.svg"
          alt="download"
        />
        <div class="app__requirements">
          Минимальные характеристики ЭВМ на Windows:<br />
          ОС: Windows 7 (SP1+) и Windows 10<br />
          ЦПУ: Архитектура x86, x64 с поддержкой набора инструкций SSE2;<br />
          1 ядроГПУ: память 256 мб, поддержка DX11 или выше<br />
          ОЗУ: 2 Гб DDR3 или DDR4<br />
          Язык – C++<br />
          Объем программы – 202 мб<br />
          Год создания программы — 2022
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";

const sliders = ["architecture", "interiors", "art"];

function HandkerClickDomnload() {
  alert("В разработке");
}
</script>

<style lang="scss" scoped>
.app {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/backgrounds/app-noauth.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(12.5px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 74vw;
    margin: auto;
  }
  &__carusel {
    display: flex;
    column-gap: 1.25%;
    height: 21vh;
    margin: 5.3vh 0;
    padding: 0.74vh 0;
    &_slider {
      width: 32.5%;
      height: 100%;
      background-position: center;
      background-size: cover;
      cursor: pointer;
    }
  }
  &__title {
    color: #f9f9f9;
    font-family: JuraSemiBold;
    font-size: 6.1vh;
    line-height: 125%;
    letter-spacing: -1.32px;
  }
  &__description {
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.4px;
    display: flex;
    align-items: center;
    margin-bottom: 5.5vh;
  }
  &__download {
    width: 15.625vw;
    cursor: pointer;
  }
  &__requirements {
    margin-top: 3.3vh;
    border-radius: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background-color: rgba(0, 0, 0, 0.55);
    height: 100%;
    padding: 0.74vh 1.6vw;
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 1.85vh;
    line-height: 140%;
    letter-spacing: -0.4px;
  }
}
</style>
