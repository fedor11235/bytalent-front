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
    titleContent="Нет активных моделей"
    textContent="Вы можете заказать проект либо загрузить свой моделей"
    urlBtnContent="order"
    urlBtnContentHover="order-hover"
    :curentPagesFooter="1"
    :numberPagesFooter="pageTwo"
    textButtonFooter="+ Загрузить свой проект"
    colorTwoPagesFooter="#8b8b8b"
  />
</template>

<script setup lang="ts">
import { ref, computed, provide } from "vue";
import { useRootStore } from "@/store";
import { useRouter } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";
import projectService from "@/services/projectService";

const router = useRouter();
const rootStore = useRootStore();

const isAddVisulization = ref(false);
const isOrderVisulization = ref(false);

let numberProjects = ref(0)
projectService.getAllNumberProjects().then(res=>{numberProjects.value = res.projects;})

const pageTwo = computed(() => numberProjects.value > 0? 2: 1)

function showUploadProject() {
  // rootStore.uploadProject = true;
  isAddVisulization.value = true;
}

function showOrderProject() {
  // rootStore.uploadProject = true;
  isOrderVisulization.value = true;
}

function nextPage() {
  if(numberProjects.value > 0) {
    router.push({ name: "visualization-second" });
  }
}

provide("handlerBtnContentClick", showOrderProject);
provide("handlerBtnFooterClick", showUploadProject);
provide("handlerBtnNavigationClick", nextPage);
</script>

<style lang="scss" scoped></style>
