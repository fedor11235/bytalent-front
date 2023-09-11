<template>
  <div class="bgr">
    <LoaderComponent
      v-if="(!load && type !== 'empty') || type === 'load'"
      size="48px"
    />
    <img
      v-if="type === 'img'"
      v-show="load"
      @load="bgrLoadLocal"
      :src="content"
      class="bgr__content"
      alt="img"
    />
    <video
      v-else-if="type === 'video'"
      v-show="load"
      ref="video"
      volume="0.0"
      :poster="poster"
      @loadeddata="bgrLoadLocal"
      @mouseenter="handlerVideoMouseenter"
      @mouseleave="handlerVideoMouseleave"
      class="bgr__content"
    >
      <source :src="content" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoaderComponent from "@/components/common/LoaderComponent.vue";

const props = defineProps<{
  type: string;
  content: string;
  autoPlay?: boolean;
  poster?: string;
  // bgrLoad?: () => void
}>();

const load = ref(false);
const video = ref();

function bgrLoadLocal() {
  load.value = true;
  if (props.autoPlay && video.value) {
    video.value.play();
  }
  // props.bgrLoad();
}

function handlerVideoMouseenter() {
  if (load.value && !props.autoPlay && props.type === "video" && video.value) {
    video.value.play();
  }
}

function handlerVideoMouseleave() {
  if (load.value && !props.autoPlay && props.type === "video" && video.value) {
    video.value.pause();
  }
}
</script>

<style lang="scss" scoped>
.bgr {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-width: none;
    border-radius: 10px;
    box-shadow: 0 7px 8px -5px #000;
  }
}
</style>
