<template>
  <div v-show="rootStore.isShowLoad">
    <div v-if="check">
      <ProjectEmptyComponent @finishLoad="rootStore.loadBgrTest = true" />
    </div>
    <ErrorComponent v-else />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import ProjectEmptyComponent from "@/pages/ProjectEmptyComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const router = useRouter();
const route = useRoute();

const check = ref(false);

rootStore.loadApiTest = false;
rootStore.loadBgrTest = false;

watch(
  () => route.params,
  async () => {
    rootStore.loadApiTest = false;
    //Проверки нужно будет вынести в роуты
    check.value = await authService.checkToken();
    const projects = await projectService.getAllNumberProjects();
    if (check.value && projects.projects.length > 0) {
      await router.push({
        name: "project-id",
        params: { idProject: projects.projects[0].id },
      });
    }
    rootStore.loadApiTest = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
