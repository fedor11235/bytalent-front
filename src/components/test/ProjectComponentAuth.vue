<template>
  <WelcomeLayout
    bg="projects-auth"
    title="Нет активных проектов"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    description="Вы можете заказть новый проет либо загрузить свой"
    imgBtn="create-light"
    :btnClick="HandkerClickUpload"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :curentPages="0"
        :numberPages="0"
        textButton="+ Загрузить свой проект"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
</template>

<script setup lang="ts">
import { provide } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

function HandkerClickUpload() {
  alert("В разработке");
}

function handlerBtnFooterClick() {
  alert("В разработке");
}

provide("handlerBtnFooterClick", handlerBtnFooterClick);
</script>

<style lang="scss" scoped></style>
