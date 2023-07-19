<template>
  <Transition name="fade">
    <PopupConnect v-if="streamingStore.popupConnect" />
  </Transition>
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
import { provide } from "vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/store";
import { useStreamingStore } from "@/store";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopupConnect from "@/components/streaming/PopupConnect.vue";

const router = useRouter();
const rootStore = useRootStore();
const streamingStore = useStreamingStore();

function showUploadProject() {
  rootStore.uploadProject = true;
}

function openNewLvl() {
  streamingStore.popupConnect = true;
}

provide("handlerBtnContentClick", openNewLvl);
provide("handlerBtnFooterClick", showUploadProject);
</script>

<style lang="scss" scoped></style>
