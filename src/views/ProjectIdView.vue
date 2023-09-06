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
      const projectsRes = await projectService.getAllNumberProjects();
      projects.value = projectsRes.projects;
      total.value = projectsRes.total;
      if (projects.value.length > 0) {
        project.value = projects.value.find(
          (item: any) => item.id === Number(props.idProject)
        );
        indexProject.value = projects.value.findIndex(
          (item: any) => item.id === Number(props.idProject)
        );
      }
    }
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
