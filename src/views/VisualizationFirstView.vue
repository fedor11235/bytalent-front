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
    bg="visualization.jpg"
    :blackout="true"
    urlBtnHeader="visualization"
    urlBtnHeaderHover="visualization-hover"
    titleContent="Нет активных моделей"
    textContent="Вы можете заказать проект либо загрузить свой"
    urlBtnContent="order"
    urlBtnContentHover="order-hover"
    :curentPagesFooter="0"
    :numberPagesFooter="0"
    textButtonFooter="+ Загрузить свой проект"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";
import projectService from "@/services/projectService";

const router = useRouter();

const isAddVisulization = ref(false);
const isOrderVisulization = ref(false);

let numberProjects = ref(0);
projectService.getAllNumberProjects().then((res) => {
  numberProjects.value = res.projects;
});

function showUploadProject() {
  isAddVisulization.value = true;
}

function showOrderProject() {
  isOrderVisulization.value = true;
}

provide("handlerBtnContentClick", showOrderProject);
provide("handlerBtnFooterClick", showUploadProject);
</script>

<style lang="scss" scoped></style>
