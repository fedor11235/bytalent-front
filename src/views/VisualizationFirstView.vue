<template>
  <Transition name="fade">
    <PopupAdd v-if="isAddVisulization" @close="isAddVisulization = false" />
  </Transition>
  <Transition name="fade">
    <PopupOrder
      v-if="isOrderVisulization"
      @close="isOrderVisulization = false"
    />
  </Transition>
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
    textButtonFooter="+ Загрузить свой проект"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useRootStore } from "@/store";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";

const router = useRouter();
const rootStore = useRootStore();

const isAddVisulization = ref(false);
const isOrderVisulization = ref(false);

function showUploadProject() {
  // rootStore.uploadProject = true;
  isAddVisulization.value = true;
}

function showOrderProject() {
  // rootStore.uploadProject = true;
  isOrderVisulization.value = true;
}

function nextPage() {
  router.push({ name: "visualization-second" });
}

provide("handlerBtnContentClick", showOrderProject);
provide("handlerBtnFooterClick", showUploadProject);
provide("handlerBtnNavigationClick", nextPage);
</script>

<style lang="scss" scoped></style>
