<template>
  <div v-if="finishLoad">
    <ProjectComponent />
  </div>
  <LoadPage v-else />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import LoadPage from "@/pages/LoadPage.vue";
import ProjectComponent from "@/pages/ProjectComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

defineProps<{
  idProject?: string;
}>();

const router = useRouter();
const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);

watch(
  () => route.params,
  async () => {
    finishLoad.value = false;
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
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
