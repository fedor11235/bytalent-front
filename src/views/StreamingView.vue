<template>
  <div v-show="finishLoad && finishLoadBg">
    <StreamingComponentAuth @finishLoad="finishLoadBg = true"  v-show="check" />
    <StreamingComponent @finishLoad="finishLoadBg = true" v-show="!check" />
  </div>
  <LoadPage v-if="!finishLoad && !finishLoadBg" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import authService from "@/services/authService";
import LoadPage from "@/pages/LoadPage.vue";
import StreamingComponent from "@/pages/StreamingComponent.vue";
import StreamingComponentAuth from "@/pages/StreamingComponentAuth.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);
const finishLoadBg = ref(false);

watch(
  () => route.params,
  async () => {
    check.value = await authService.checkToken();
    finishLoad.value = true;
    rootStore.noHover = check.value;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
