<template>
  <WelcomeLayout
    bg="projects-auth.jpg"
    noHover
    title="Нет активных проектов"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    description="Вы можете заказть новый проет либо загрузить свой"
    imgBtn="create-light"
    :btnClick="handlerBtnFooterClick"
    @finishLoad="emit('finish-load')"
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
  <FAQControl />
</template>

<script setup lang="ts">
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import projectService from "@/services/projectService";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/store";

const emit = defineEmits(["finish-load"]);

const rootStore = useRootStore();

rootStore.noHover = true;
rootStore.hiddenHeader = false;

const router = useRouter();

async function HandkerClickCreate() {
  const project = await projectService.createProject({
    name: "Новый проект",
    address: "Адрес проекта",
    type: "Тип проекта",
  });
  await router.push({ name: "project-id", params: { idProject: project.id } });
}

function handlerBtnFooterClick() {
  rootStore.popupAdd = true;
}
</script>

<style lang="scss" scoped></style>
