<template>
  <div v-if="finishLoad">
    <div v-if="check">
      <ProjectComponentAuth
        v-if="project"
        :total="total"
        :project="project"
        :projects="projects"
        :idProject="idProject"
        :indexProject="indexProject + 1"
      />
      <ErrorComponent v-else />
    </div>
    <ProjectComponent v-else />
  </div>
  <LoadComponent v-else />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { Ref } from "vue";
import { ref, watch } from "vue";
import LoadComponent from "@/components/test/LoadComponent.vue";
import ErrorComponent from "@/components/test/ErrorComponent.vue";
import ProjectComponentAuth from "@/components/test/ProjectComponentAuth.vue";
import ProjectComponent from "@/components/test/ProjectComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";

const props = defineProps<{
  idProject?: string;
}>();

const router = useRouter();
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
    check.value = await authService.checkToken();
    if (check.value) {
      await projectService.getAllNumberProjects().then(async (res) => {
        if (res) {
          projects.value = res.projects;
          total.value = res.total;
          if (props.idProject && projects.value.length > 0) {
            project.value = projects.value.find(
              (item: any) => item.id === Number(props.idProject)
            );
            indexProject.value = projects.value.findIndex(
              (item: any) => item.id === Number(props.idProject)
            );
            console.log("indexProject.value", indexProject.value);
            finishLoad.value = true;
          } else {
            await router.push({
              name: "project-id",
              params: { idProject: (projects.value[0] as any).id },
            });
          }
        }
      });
    } else {
      finishLoad.value = true;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
