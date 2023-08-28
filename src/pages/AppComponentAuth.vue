<template>
  <WelcomeLayout
    bg="app"
    imgBtn="download-darck"
    title="Приложение просмотра интерьеров"
    description="Персональное приложение для доступа в проекты Unreal Engine 5"
    noHover
    :btnClick="HandkerClickDomnload"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :handlerBtnFooterClick="handlerBtnFooterClick"
        :curentPages="0"
        :numberPages="0"
        textButton="Заказать разработку приложения"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
  <FAQControl />
</template>

<script setup lang="ts">
import FooterComponent from "@/components/common/FooterComponent.vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.noHover = true;

function HandkerClickDomnload() {
  let a = document.createElement("a");
  a.href = "https://apptest.hb.ru-msk.vkcs.cloud/Talent.zip";
  a.download = "Talent.zip";
  a.click();
}

function handlerBtnFooterClick() {
  alert("В разработке");
}
</script>

<style lang="scss" scoped></style>
