<template>
  <div v-if="finishLoad">
    <div v-if="check">
      <ProjectComponentAuth
        v-if="project || idProject === '0'"
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
  <LoadPage v-else />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { Ref } from "vue";
import { ref, watch } from "vue";
import LoadPage from "@/pages/LoadPage.vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import ProjectComponentAuth from "@/pages/ProjectComponentAuth.vue";
import ProjectComponent from "@/pages/ProjectComponent.vue";
import authService from "@/services/authService";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

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
    finishLoad.value = false;
    check.value = await authService.checkToken();
    if (check.value && props.idProject !== "0") {
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
            finishLoad.value = true;
          } else {
            if (projects.value.length === 0) {
              await router.push({
                name: "project-id",
                params: { idProject: 0 },
              });
            } else {
              await router.push({
                name: "project-id",
                params: { idProject: (projects.value[0] as any).id },
              });
            }
          }
        }
      });
    } else if (check.value && props.idProject === "0") {
      finishLoad.value = true;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
