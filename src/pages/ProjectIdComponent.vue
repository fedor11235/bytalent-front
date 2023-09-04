<template>
  <Transition name="fade">
    <PopupAdd v-if="isPopupAdd" @close="isPopupAdd = false" />
  </Transition>
  <WelcomeLayout
    bg="project-new"
    :bgBase="bgr"
    noHover
    :title="(project as any).name ? (project as any).name: 'Новый уровень'"
    bgrDropColor="rgba(0, 0, 0, 0.55)"
    bgrDropBlur="blur(17.5px)"
    :description="(project as any).info ? (project as any).info: 'Описание уровня'"
    imgBtn="control"
    :btnClick="HandkerClickControl"
    isLine
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
  <FAQControl />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/store";
import { getURLForFile, getURLForFilePoster } from "@/utils/str";

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

const bgr = computed(() => {
  if (props.project.background) {
    const background = props.project.background;
    return {
      type: background.type,
      content: getURLForFile(background.name, background.format),
      poster: getURLForFilePoster(background.poster_path),
    };
  }
  return false;
});

async function switchPreviousProject() {
  if (props.indexProject <= 1) {
    return;
  }
  const previousProjectId = props.projects[props.indexProject - 2].id;
  console.log("previousProjectId", previousProjectId);
  await router.push({
    name: "project-id",
    params: { idProject: previousProjectId },
  });
}

async function switchNextProject() {
  if (props.total === props.indexProject) {
    return;
  }
  // const nextProjectId = props.projects[props.indexProject].id;
  // console.log('nextProjectId', props.projects[props.indexProject].id)
  await router.push({ name: "project-id", params: { idProject: 2 } });
}

function handlerBtnFooterClick() {
  isPopupAdd.value = true;
}

function HandkerClickControl() {
  router.push({ name: "new-lavel", params: { idProject: props.idProject } });
}
</script>

<style lang="scss" scoped></style>
