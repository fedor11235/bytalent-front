<template>
  <div v-show="rootStore.loadApiTest">
    <ProjectIdComponent
      v-if="check && project"
      v-show="check && project && rootStore.loadBgrTest"
      :total="total"
      :project="project"
      :projects="projects"
      :idProject="idProject"
      :indexProject="indexProject + 1"
      @finishLoad="rootStore.loadBgrTest = true"
    />
    <ErrorComponent v-show="!check && !project" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import { ref, watch, toRef } from "vue";
import ProjectIdComponent from "@/pages/ProjectIdComponent.vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.loadApiTest = false;
rootStore.loadBgrTest = false;

const props = defineProps<{
  idProject?: string;
}>();

const route = useRoute();

const check = ref(false);
const finishLoadBg = ref(false);

const projects = ref([]);
const project: Ref<null | any> = ref(null);
const total = ref(0);
const indexProject = ref(0);

watch(
  () => route.params,
  async () => {
    rootStore.loadApiTest = false;
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
    rootStore.loadApiTest = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
