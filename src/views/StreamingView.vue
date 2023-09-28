<template>
  <div v-show="rootStore.isShowLoad">
    <StreamingComponentAuth
      v-if="check"
      @finishLoad="rootStore.loadBgrTest = true"
      v-show="check"
    />
    <StreamingComponent
      v-else
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
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
