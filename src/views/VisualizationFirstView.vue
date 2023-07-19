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
import { provide } from "vue";
import { useRootStore } from "@/store";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const router = useRouter();
const rootStore = useRootStore();

function showUploadProject() {
  rootStore.uploadProject = true;
}

function nextPage() {
  router.push({ name: "visualization-second" });
}

provide("handlerBtnContentClick", showUploadProject);
provide("handlerBtnFooterClick", showUploadProject);
provide("handlerBtnNavigationClick", nextPage);
</script>

<style lang="scss" scoped></style>
