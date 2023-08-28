<template>
  <Transition name="fade">
    <PopupAdd v-if="isPopupAdd" @close="isPopupAdd = false" />
  </Transition>
  <WelcomeLayout
    v-if="total > 0"
    bg="project-new"
    :bgBase="project.background"
    noHover
    :title="(project as any).name ? (project as any).name: 'Новый уровень'"
    bgrDropColor="rgba(0, 0, 0, 0.55)"
    bgrDropBlur="blur(17.5px)"
    :description="(project as any).info ? (project as any).info: 'Описание уровня'"
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
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.noHover = true;

const props = defineProps<{
  idProject: string | undefined;
  indexProject: number;
  project: any;
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
  await router.push({ name: "project" });
}

function switchPreviousProject() {
  if (props.indexProject <= 1) {
    return;
  }
  const previousProjectId = props.projects[props.indexProject - 2].id;
  router.push({ name: "project-id", params: { idProject: previousProjectId } });
}

function switchNextProject() {
  if (props.total === props.indexProject) {
    return;
  }
  const nextProjectId = props.projects[props.indexProject].id;
  router.push({ name: "project-id", params: { idProject: nextProjectId } });
}

function handlerBtnFooterClick() {
  isPopupAdd.value = true;
}

function HandkerClickControl() {
  router.push({ name: "new-lavel", params: { idProject: props.idProject } });
}
</script>

<style lang="scss" scoped></style>
