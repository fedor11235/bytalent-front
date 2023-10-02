<template>
  <div v-show="rootStore.isShowLoad">
    <AppComponentAuth @finishLoad="handlerFinishLoad" v-if="check" />
    <AppComponent @finishLoad="handlerFinishLoad" v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppComponentAuth from "@/pages/AppComponentAuth.vue";
import AppComponent from "@/pages/AppComponent.vue";
import authService from "@/services/authService";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

const route = useRoute();

const check = ref(false);

rootStore.loadApiTest = false;
rootStore.loadBgrTest = false;

function handlerFinishLoad() {
  rootStore.loadBgrTest = true;
}
watch(
  () => route.params,
  async () => {
    check.value = await authService.checkToken();
    rootStore.loadApiTest = true;
    rootStore.noHover = check.value;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
