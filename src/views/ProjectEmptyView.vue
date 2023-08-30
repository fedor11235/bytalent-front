<template>
  <div v-if="finishLoad">
    <div v-if="check">
      <ProjectEmptyComponent />
    </div>
    <ErrorComponent v-else />
  </div>
  <LoadPage v-else />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import LoadPage from "@/pages/LoadPage.vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import ProjectEmptyComponent from "@/pages/ProjectEmptyComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

const router = useRouter();
const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);

watch(
  () => route.params,
  async () => {
    finishLoad.value = false;
    //Проверки нужно будет вынести в роуты
    check.value = await authService.checkToken();
    const projects = await projectService.getAllNumberProjects();
    if (check.value && projects.projects.length > 0) {
      await router.push({
        name: "project-id",
        params: { idProject: projects.projects[0].id },
      });
    }
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
