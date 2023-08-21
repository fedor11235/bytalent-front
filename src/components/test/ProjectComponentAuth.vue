<template>
  <Transition name="fade">
    <PopupAdd v-if="isPopupAdd" @close="isPopupAdd = false" />
  </Transition>
  <DefaultLayout
    v-if="total > 0"
    noHover
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
  <WelcomeLayout
    v-else
    bg="projects-auth"
    noHover
    title="Нет активных проектов"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    description="Вы можете заказть новый проет либо загрузить свой"
    imgBtn="create-light"
    :btnClick="HandkerClickUpload"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :handlerBtnFooterClick="handlerBtnFooterClick"
        :curentPages="0"
        :numberPages="0"
        textButton="+ Загрузить свой проект"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import projectService from "@/services/projectService";
import PopupAdd from "@/components/visualization/PopupAdd.vue";

const projects = ref(0);
const total = ref(0);

const isPopupAdd = ref(false);

function HandkerClickUpload() {
  alert("В разработке");
}

function handlerBtnFooterClick() {
  isPopupAdd.value = true;
}

onMounted(() => {
  projectService.getAllNumberProjects().then((res) => {
    if (res) {
      projects.value = res.projects;
      total.value = res.total;
    }
  });
});
</script>

<style lang="scss" scoped></style>
