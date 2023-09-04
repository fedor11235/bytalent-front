<template>
  <div class="loading-wbgl" id="js-loader">
    <div class="loader-wbgl"></div>
  </div>

  <canvas id="c"></canvas>

  <div id="model-info"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRootStore } from "@/store";
import { init } from "@/utils/threejsScene";

const rootStore = useRootStore();

rootStore.hiddenHeader = true;
const modelName = location.search.split("model=")[1];

onMounted(() => {
  const btns: any = document.getElementById("model-info");
  const sceletron: any = document.getElementById("js-loader");
  init(modelName, btns, sceletron);
});
</script>

<style lang="scss">
#model-info {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  position: fixed;
  top: 2vh;
  right: 2vw;
}

.model-info__item {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.model-info__title {
  width: 130px;
}

.model-info__img {
  cursor: pointer;
  border: 5px solid transparent;
}

.model-info__img:hover {
  border: 5px solid #dfa946;
}

.model-info__img_active {
  border: 5px solid #dfa946;
}

.loading-wbgl {
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-wbgl {
  -webkit-perspective: 120px;
  -moz-perspective: 120px;
  -ms-perspective: 120px;
  perspective: 120px;
  width: 100px;
  height: 100px;
}

.loader::before {
  content: "";
  position: absolute;
  left: 25px;
  top: 25px;
  width: 50px;
  height: 50px;
  background-color: #ff0000;
  animation: flip 1s infinite;
}

@keyframes flip {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
</style>
