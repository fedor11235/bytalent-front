<template>
  <DefaultLayout
    bg="visualization-first.jpeg"
    :blackout="true"
    urlBtnHeader="visualization"
    urlBtnHeaderHover="visualization-hover"
    titleContent="Нет активных уровней"
    textContent="Вы можете заказать проект либо загрузить свой уровень"
    urlBtnContent="order"
    urlBtnContentHover="order-hover"
    :curentPagesFooter="1"
    :numberPagesFooter="2"
    textButtonFooter="+ Загрузить готовый проект"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useRootStore } from "@/store";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const rootStore = useRootStore();

function handlerBtnContentClick() {
  rootStore.uploadProject = true
}

provide('handlerBtnContentClick', handlerBtnContentClick)
</script>

<style lang="scss" scoped></style>
