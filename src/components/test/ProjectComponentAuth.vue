<template>
  <Transition name="fade">
    <PopupAdd v-if="isPopupAdd" @close="isPopupAdd = false" />
  </Transition>
  <WelcomeLayout
    v-if="total > 0"
    bg="project-new"
    noHover
    :title="(projects as any).name ? (projects as any).name: 'Новый уровень'"
    bgrDropColor="rgba(0, 0, 0, 0.55)"
    bgrDropBlur="blur(17.5px)"
    :description="(projects as any).info ? (projects as any).info: 'Описание уровня'"
    imgBtn="control"
    :btnClick="HandkerClickControl"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :handlerBtnFooterClick="handlerBtnFooterClick"
        :handlerBtnNavigationLeftClick="switchPreviousProject"
        :handlerBtnNavigationRightClick="switchNextProject"
        :curentPages="Number(indexProject)"
        :numberPages="total"
        textButton="+ Новый уровень"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
  <WelcomeLayout
    v-else
    bg="projects-auth"
    noHover
    title="Нет активных проектов"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    description="Вы можете заказть новый проет либо загрузить свой"
    imgBtn="create-light"
    :btnClick="HandkerClickCreate"
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
import { ref } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import projectService from "@/services/projectService";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  idProject: string | undefined;
  indexProject: number;
  projects: any[];
  total: number;
}>();

const router = useRouter();

const isPopupAdd = ref(false);

async function HandkerClickCreate() {
  await projectService.createProject({
    name: "Новый проект",
    address: "Адрес проекта",
    type: "Тип проекта",
  });
  location.reload();
}

function switchPreviousProject() {
  if (props.total === 1) {
    console.log("это первый проект!");
  }
  console.log("click arrow left!");
}

function switchNextProject() {
  if (props.total === props.indexProject) {
    console.log("это последний проект!");
  }
  console.log("click arrow right!");
}

function handlerBtnFooterClick() {
  isPopupAdd.value = true;
}

function HandkerClickControl() {
  router.push({ name: "new-lavel" });
}
</script>

<style lang="scss" scoped></style>
