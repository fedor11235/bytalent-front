<template>
  <DefaultLayout
    bg="visualization-second.jpeg"
    :blackout="true"
    urlBtnHeader="visualization"
    urlBtnHeaderHover="visualization-hover"
    titleContent="Новый уровень"
    textContent="Описание уровня"
    urlBtnContent="control"
    urlBtnContentHover="control-hover"
    :curentPagesFooter="0"
    :numberPagesFooter="0"
    textButtonFooter="Новый уровень"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import { provide } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const router = useRouter();

function openNewLvl() {
  router.push({ name: "new-lavel" });
}

function nextPage() {
  router.push({ name: "visualization-first" });
}

provide("handlerBtnContentClick", openNewLvl);
provide("handlerBtnFooterClick", openNewLvl);
provide("handlerBtnNavigationClick", nextPage);
</script>

<style lang="scss" scoped></style>
