<template>
  <WelcomeLayout
    bg="app-start.jpg"
    title="Приложение «by Talent»"
    bgrDropColor="rgba(0, 0, 0, 0.75)"
    description="Персональное приложение для доступа в проекты Unreal Engine 5"
    isLine
    imgBtn="save"
    :btnClick="HandkerClickDomnload"
    @finishLoad="emit('finish-load')"
  >
    <template v-slot:content-top>
      <div class="carusel">
        <div
          v-for="(value, index) in sliders"
          :key="index"
          class="carusel__slider"
        >
          <img
            :src="`/backgrounds/${index}.jpg`"
            alt="info"
            class="carusel__slider_img"
          />
          <div class="carusel__slider_title">{{ value }}</div>
        </div>
      </div>
    </template>
    <template v-slot:content-bottom>
      <div class="requirements">
        Минимальные характеристики ЭВМ на Windows:<br />
        ОС: Windows 7 (SP1+) и Windows 10<br />
        ЦПУ: Архитектура x86, x64 с поддержкой набора инструкций SSE2;<br />
        1 ядроГПУ: память 256 мб, поддержка DX11 или выше<br />
        ОЗУ: 2 Гб DDR3 или DDR4<br />
        Язык – C++<br />
        Объем программы – 202 мб<br />
        Год создания программы — 2022
      </div>
    </template>
  </WelcomeLayout>
  <FAQControl />
</template>

<script setup lang="ts">
import FAQControl from "@/components/controls/FAQControl.vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import { useRootStore } from "@/store";

const emit = defineEmits(["finish-load"]);

const rootStore = useRootStore();
rootStore.hiddenHeader = false;

const sliders = {
  architecture: "Архитектура",
  interiors: "Интерьеры",
  art: "Искусство",
};

function HandkerClickDomnload() {
  let a = document.createElement("a");
  a.href = "https://apptest.hb.ru-msk.vkcs.cloud/Talent.zip";
  a.download = "Talent.zip";
  a.click();
}
</script>

<style lang="scss" scoped>
.carusel {
  position: relative;
  // left: -1vw;
  display: flex;
  column-gap: 1.25%;
  padding: 0.74vh 0;
  box-sizing: border-box;
  height: 100%;
  &__slider {
    position: relative;
    width: 32.5%;
    height: 100%;
    background-position: bottom;
    background-size: 110%;
    background-repeat: no-repeat;
    cursor: pointer;
    // transform: skew(10deg);
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 3px #f9f9f9;
    }
    &_title {
      position: absolute;
      left: 1.6vw;
      right: 1.6vw;
      bottom: 0.74vh;
      height: 3.3vh;
      background-color: rgba(0, 0, 0, 0.55);
      // transform: skew(-10deg);

      color: #f9f9f9;
      text-align: center;
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 140%;
      letter-spacing: -0.4px;
    }
    &_img {
      // transform: skew(-10deg);
      // scale: 1.1;
      height: 100%;
      width: 100%;
    }
  }
}
.requirements {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  width: 70%;
  padding: 0.74vh 1.6vw;
  color: #f9f9f9;
  font-family: JuraMedium;
  font-size: 1.85vh;
  line-height: 140%;
  letter-spacing: -0.4px;
}
</style>
