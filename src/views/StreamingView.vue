<template>
  <DefaultLayout
    bg="streaming.jpeg"
    theme="light"
    :whiteout="true"
    urlBtnHeader="streaming"
    urlBtnHeaderHover="streaming"
    titleContent="Нет активных уровней"
    textContent="Сперва вам необходимо добавить визуализацию"
    urlBtnContent="connect"
    urlBtnContentHover="connect-hover"
    :curentPagesFooter="0"
    :numberPagesFooter="0"
    colorTwoPagesFooter="#353535"
  />
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<style lang="scss" scoped></style>
