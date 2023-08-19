<template>
  <WelcomeLayout
    bg="app"
    imgBtn="download-darck"
    title="Приложение просмотра интерьеров"
    description="Персональное приложение для доступа в проекты Unreal Engine 5"
    :btnClick="HandkerClickDomnload"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :curentPages="0"
        :numberPages="0"
        textButton="Заказать разработку приложения"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
</template>

<script setup lang="ts">
import { provide } from "vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";

function HandkerClickDomnload() {
  alert("В разработке");
}

function handlerBtnFooterClick() {
  alert("В разработке");
}

provide("handlerBtnFooterClick", handlerBtnFooterClick);
</script>

<style lang="scss" scoped></style>
