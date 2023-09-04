<template>
  <div class="reviewer">
    <div class="loading-wbgl" id="js-loader">
      <div class="loader-wbgl"></div>
    </div>

    <canvas id="c"></canvas>

    <div id="model-info"></div>
  </div>
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
// .reviewer {
//   overflow: hidden;
// }
#model-info {
  display: flex;
  flex-direction: row;
  row-gap: 6px;
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  right: 2vw;
  column-gap: 5vw;
  padding-bottom: 8px;
  overflow: auto;
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .7);
    backdrop-filter: blur(5px);
    // border: 1px solid white;
  }
  // overflow-x: scroll;
}

// #model-info::-webkit-scrollbar {
//   height: 5px;
//   width: 10px;
// }

.model-info__item {
  display: flex;
  align-items: center;
  row-gap: 15px;
  flex-direction: column;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  backdrop-filter: blur(5px);
}

.model-info__title {
  font-family: JuraMedium, sans-serif;
  color: wheat;
}

.model-info__imgs {
  display: flex;
  column-gap: 12px;
}

.model-info__img {
  cursor: pointer;
  border: 1px solid white;
  border-radius: 50%;
  transition: scale .2s ease;
}

.model-info__img:hover {
  border: 3px solid wheat;
}

.model-info__img:active {
  scale: .9;
}

.model-info__img_active {
  border: 3px solid wheat;
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

.loader-wbgl::before {
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
