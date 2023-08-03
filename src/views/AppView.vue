<template>
  <DefaultLayout
    bg="app.jpg"
    urlBtnHeader="app"
    urlBtnHeaderHover="app"
    titleContent="Приложение просмотров интерьеров"
    textContent="Персональное приложения для доступа в интерьеры Unreal Engine 5"
    urlBtnContent="more"
    urlBtnContentHover="more-hover"
    :curentPagesFooter="1"
    :numberPagesFooter="1"
    textButtonFooter="+ Заказать разработку приложения"
    colorTwoPagesFooter="#c7c7c7"
  />
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<style lang="scss" scoped></style>
