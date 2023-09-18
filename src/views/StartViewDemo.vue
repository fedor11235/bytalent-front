<template>
  <div class="start-view">
    <LoadStartPage v-if="loader" />
    <div
      @mouseover="handlerMouseoverBtn('app')"
      @mouseleave="handlerMouseleaveBtn"
      @click="handlerClickApp"
      ref="app"
      :class="[
        'test__clipping',
        'test__clipping_app',
        { test__clipping_hover: isHoverName === 'app' },
      ]"
    >
      <div class="test test__app">
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: isHoverName === 'app' },
          ]"
        ></div>
      </div>
    </div>

    <div
      @mouseover="handlerMouseoverBtn('projects')"
      @mouseleave="handlerMouseleaveBtn"
      @click="handlerClickProject"
      ref="projects"
      :class="[
        'test__clipping',
        'test__clipping_projects',
        { test__clipping_hover: isHoverName === 'projects' },
      ]"
    >
      <div class="test test__projects">
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: isHoverName === 'projects' },
          ]"
        ></div>
      </div>
    </div>

    <div
      @mouseover="handlerMouseoverBtn('streaming')"
      @mouseleave="handlerMouseleaveBtn"
      @click="handlerClickStreaming"
      ref="streaming"
      :class="[
        'test__clipping',
        'test__clipping_streaming',
        { test__clipping_hover: isHoverName === 'streaming' },
      ]"
    >
      <div class="test test__streaming">
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: isHoverName === 'streaming' },
          ]"
        ></div>
      </div>
    </div>
    <div ref="btns" class="test__btns">
      <div
        ref="btnApp"
        :class="['test__title', { test__title_hover: isHoverName === 'app' }]"
      >
        Недвижимость
      </div>
      <div
        ref="btnProjects"
        :class="[
          'test__title',
          { test__title_hover: isHoverName === 'projects' },
        ]"
      >
        Проектировщики
      </div>
      <div
        ref="btnStreaming"
        :class="[
          'test__title',
          { test__title_hover: isHoverName === 'streaming' },
        ]"
      >
        Производители
      </div>
    </div>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import LoadStartPage from "@/pages/LoadStartPage.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const router = useRouter();
// rootStore.hiddenHeader = true;
const isHoverName = ref("");
const endAnimate = ref(false);
const loader = ref(true);

const app = ref("");
const projects = ref("");
const streaming = ref("");
const btns = ref("");

const btnApp = ref("");
const btnProjects = ref("");
const btnStreaming = ref("");

async function handlerClickApp() {
  await router.push({ name: "app" });
}
async function handlerClickProject() {
  await router.push({ name: "project-main" });
}
async function handlerClickStreaming() {
  await router.push({ name: "streaming" });
}

function handlerMouseoverBtn(name: string) {
  if (!endAnimate.value) return;
  isHoverName.value = name;
}

function handlerMouseleaveBtn() {
  if (!endAnimate.value) return;
  isHoverName.value = "";
}

onMounted(async () => {
  setTimeout(() => {
    loader.value = false;
    setTimeout(() => {
      app.value.style.translate = "0";
      setTimeout(() => {
        projects.value.style.translate = "0";
        setTimeout(() => {
          streaming.value.style.translate = "0";
          setTimeout(() => {
            btns.value.style.display = "flex";
            setTimeout(() => {
              btnApp.value.style.opacity = "1";
              btnApp.value.style.transform = "translate(0, 0)";
              setTimeout(() => {
                btnProjects.value.style.opacity = "1";
                btnProjects.value.style.transform = "translate(0, 0)";
                setTimeout(() => {
                  btnStreaming.value.style.opacity = "1";
                  btnStreaming.value.style.transform = "translate(0, 0)";
                  endAnimate.value = true;
                }, 600);
              }, 600);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  }, 7000);
});
</script>

<style lang="scss" scoped>
.start-view {
  margin-left: -5%;
  display: grid;
  grid-template-columns: 35% 35% 35%;
  position: fixed;
  height: 100vh;
  width: 105vw;
  overflow: hidden;
  background-color: black;
  z-index: 2;
  .test {
    height: 100%;
    width: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.6s;
    transform: skew(-10deg, 0);
    scale: 1.4;
    &_hover {
      scale: 1.1;
    }
    &__btns {
      display: none;
      position: fixed;
      top: 50%;
      left: 0;
      right: 0;
      translate: 0 -50%;
      justify-content: space-around;
      z-index: 10;
      pointer-events: none;
    }
    &__title {
      color: white;
      font-family: JuraSemiBold;
      font-size: 3.5vh;
      line-height: 125%;
      letter-spacing: -0.76px;
      padding: 10px 40px;
      transition: all 0.6s;
      cursor: pointer;
      opacity: 0;
      transform: translate(-30px, -30px);
      &_hover {
        background-color: rgba(0, 0, 0, 0.75);
        padding: 10px 40px;
      }
    }
    &__backdrop {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      transition: opacity, 0.6s;
      &_hover {
        opacity: 0;
      }
    }
    &__app {
      background-image: url("@/assets/backgrounds/app-start.jpg");
    }
    &__streaming {
      // background-image: url("@/assets/backgrounds/test.jpg");
      background-image: url("@/assets/backgrounds/projects-start.jpg");
    }
    &__projects {
      background-image: url("@/assets/backgrounds/test.jpg");
      // background-image: url("@/assets/backgrounds/streaming-start.jpg");
    }
    &__clipping {
      position: relative;
      height: 100%;
      width: 100%;
      transform: skew(10deg, 0);
      overflow: hidden;
      z-index: 1;
      transition: all 0.6s;
      translate: 0 -100%;
      cursor: pointer;
      &_hover {
        scale: 1.1;
        z-index: 2;
        box-shadow: 0 0 10px white;
      }
    }
  }
}
</style>
