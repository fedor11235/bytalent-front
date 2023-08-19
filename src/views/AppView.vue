<template>
  <!-- <DefaultLayout
    bg="app.png"
    :blackout="true"
    urlBtnHeader="app"
    urlBtnHeaderHover="app"
    titleContent="Приложение просмотров интерьеров"
    textContent="Персональное приложения для доступа в интерьеры Unreal Engine 5"
    urlBtnContent="more"
    urlBtnContentHover="more-hover"
    :curentPagesFooter="0"
    :numberPagesFooter="0"
    textButtonFooter="+ Заказать разработку приложения"
    colorTwoPagesFooter="#c7c7c7"
  /> -->
  <AppComponent />
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AppComponent from "@/components/test/AppComponent.vue";
</script>

<style lang="scss" scoped></style>
