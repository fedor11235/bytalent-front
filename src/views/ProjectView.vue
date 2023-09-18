<template>
  <div v-show="rootStore.isShowLoad">
    <ProjectComponent @finishLoad="rootStore.loadBgrTest = true" />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import ProjectComponent from "@/pages/ProjectComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  idProject?: string;
}>();

const router = useRouter();
const route = useRoute();

const check = ref(false);

rootStore.loadApiTest = false;
rootStore.loadBgrTest = false;

watch(
  () => route.params,
  async () => {
    rootStore.loadApiTest = false;
    //TODO Проверки нужно будет вынести в роуты
    check.value = await authService.checkToken();
    if (check.value) {
      const projects = await projectService.getAllNumberProjects();
      if (projects.projects.length > 0) {
        await router.push({
          name: "project-id",
          params: { idProject: projects.projects[0].id },
        });
      } else {
        await router.push({ name: "project-empty" });
      }
    }
    rootStore.loadApiTest = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
