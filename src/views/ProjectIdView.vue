<template>
  <div v-if="finishLoad">
    <ProjectIdComponent
      v-if="check && project"
      :total="total"
      :project="project"
      :projects="projects"
      :idProject="idProject"
      :indexProject="indexProject + 1"
    />
    <ErrorComponent v-else />
  </div>
  <LoadPage v-else />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import { ref, watch, toRef } from "vue";
import LoadPage from "@/pages/LoadPage.vue";
import ProjectIdComponent from "@/pages/ProjectIdComponent.vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

const props = defineProps<{
  idProject?: string;
}>();

const idProject = toRef(props.idProject);
const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);

const projects = ref([]);
const project: Ref<null | any> = ref(null);
const total = ref(0);
const indexProject = ref(0);

watch(
  () => route.params,
  async () => {
    finishLoad.value = false;
    //TODO Проверки нужно будет вынести в роуты
    check.value = await authService.checkToken();
    if (check.value) {
      const projects = await projectService.getAllNumberProjects();
      projects.value = projects.projects;
      total.value = projects.total;
      if (projects.value.length > 0) {
        console.log(projects.value);
        project.value = projects.value.find((item: any) => {
          console.log(item.id);
          return item.id === Number(idProject.value);
        });
        indexProject.value = projects.value.findIndex((item: any) => {
          item.id === Number(idProject.value);
        });
      }
    }
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
