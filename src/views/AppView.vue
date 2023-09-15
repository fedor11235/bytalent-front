<template>
  <div v-show="finishLoad && finishLoadBg">
    <AppComponentAuth @finishLoad="finishLoadBg = true" v-if="check" />
    <AppComponent @finishLoad="finishLoadBg = true" v-else />
  </div>
  <LoadPage v-if="!finishLoad && !finishLoadBg" />
  <!-- <mapbox-map :accessToken="myAccessToken" /> -->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import LoadPage from "@/pages/LoadPage.vue";
import AppComponentAuth from "@/pages/AppComponentAuth.vue";
import AppComponent from "@/pages/AppComponent.vue";
import authService from "@/services/authService";
// import { MapboxMap } from "vue-mapbox-ts";
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
    rootStore.noHover = check.value 
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
