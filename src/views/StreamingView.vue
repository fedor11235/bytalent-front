<template>
  <div v-show="rootStore.isShowLoad">
    <StreamingComponentAuth
      @finishLoad="rootStore.loadBgrTest = true"
      v-show="check"
    />
    <StreamingComponent
      @finishLoad="rootStore.loadBgrTest = true"
      v-show="!check"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import authService from "@/services/authService";
import StreamingComponent from "@/pages/StreamingComponent.vue";
import StreamingComponentAuth from "@/pages/StreamingComponentAuth.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const route = useRoute();

const check = ref(false);

rootStore.loadApiTest = false;
rootStore.loadBgrTest = false;

watch(
  () => route.params,
  async () => {
    check.value = await authService.checkToken();
    rootStore.loadApiTest = true;
    rootStore.noHover = check.value;

    rootStore.loadBgrTest = true
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
