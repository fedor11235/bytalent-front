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
    v-if="total > 0"
    bg="visualization-second.jpeg"
    :blackout="true"
    urlBtnHeader="visualization"
    urlBtnHeaderHover="visualization-hover"
    :titleContent="(projects as any)[0].name ? (projects as any)[0].name: 'Новый уровень'"
    :textContent="(projects as any)[0].info ? (projects as any)[0].info: 'Описание уровня'"
    urlBtnContent="control"
    urlBtnContentHover="control-hover"
    :curentPagesFooter="0"
    :numberPagesFooter="0"
    textButtonFooter="Новый уровень"
    colorTwoPagesFooter="#8b8b8b"
  />
  <DefaultLayout
    v-else
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
import { ref, onMounted,provide } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";
import projectService from "@/services/projectService";

const router = useRouter();

const isAddVisulization = ref(false);
const isOrderVisulization = ref(false);

const projects = ref(0);
const total = ref(0);

function handlerBtnContentClick() {
  if(total.value > 0) {
    router.push({ name: "new-lavel" });
  } else {
    isAddVisulization.value = true;
  }
}

function handlerBtnFooterClick() {
  if(total.value > 0) {
    router.push({ name: "new-lavel" });
  } else {
    isAddVisulization.value = true;
  }
}

provide("handlerBtnContentClick", handlerBtnContentClick);
provide("handlerBtnFooterClick", handlerBtnFooterClick);
onMounted(() => {
  projectService.getAllNumberProjects().then((res) => {
    projects.value = res.projects;
    total.value = res.total;
  });
})
</script>

<style lang="scss" scoped></style>
