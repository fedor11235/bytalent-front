<template>
  <div v-if="finishLoad">
    <ProjectComponentAuth :total="total" :projects="projects" v-if="check" />
    <ProjectComponent v-else />
  </div>
  <LoadComponent v-else />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import LoadComponent from "@/components/test/LoadComponent.vue";
import ProjectComponentAuth from "@/components/test/ProjectComponentAuth.vue";
import ProjectComponent from "@/components/test/ProjectComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";

const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);

const projects = ref([]);
const total = ref(0);

watch(
  () => route.params,
  async () => {
    check.value = await authService.checkToken();
    if (check.value) {
      await projectService.getAllNumberProjects().then((res) => {
        if (res) {
          projects.value = res.projects;
          total.value = res.total;
        }
      });
    }
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
