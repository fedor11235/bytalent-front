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
    :curentPagesFooter="2"
    :numberPagesFooter="2"
    textButtonFooter="Новый уровень"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<style lang="scss" scoped></style>
