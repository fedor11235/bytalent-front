<template>
  <div ref="startView" class="start-view">
    <LoadStartPage v-if="loader" />
    <div
      @mouseover="handlerMouseoverBtn('app')"
      @mouseleave="handlerMouseleaveBtn"
      @click="handlerClickApp"
      ref="app"
      :class="[
        'test__clipping',
        'test__clipping_app',
        { test__clipping_hover: rootStore.appStartHover && !animate },
      ]"
    >
    
      <div
        ref="appBgr"
        class="test test__app"
        style="background-image: url(/backgrounds/app-start.jpg)"
      >
        <div ref="btnApp" :class="['btn', 'btn_app', {'btn_hover': rootStore.appStartHover && !animate}]">
            Приложение
          </div>
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: rootStore.appStartHover && !animate },
          ]"
        >
        </div>
      </div>
    </div>

    <div
      @mouseover="handlerMouseoverBtn('project')"
      @mouseleave="handlerMouseleaveBtn"
      @click="handlerClickProject"
      ref="projects"
      :class="[
        'test__clipping',
        'test__clipping_projects',
        { test__clipping_hover: rootStore.projectStartHover && !animate },
      ]"
    >
      <Transition name="move-bottom">
        <div :class="['login-cntr', {'login-cntr_full': rootStore.popupStartLogin}]" v-show="rootStore.loginHover || rootStore.popupStartLogin">
          <div ref="formLogin" class="login-cntr_form">
            <LoginForm absolutePos />
          </div>
        </div>
      </Transition>

      <div
        ref="projectsBgr"
        class="test test__projects"
        style="background-image: url(/backgrounds/projects-start.jpg)"
      >
          <div ref="btnProjects" :class="['btn', 'btn_projects', {'btn_hover': rootStore.projectStartHover && !animate}]">
            Проекты
          </div>
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: rootStore.projectStartHover && !animate },
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
        { test__clipping_hover: rootStore.streamingStartHover && !animate },
      ]"
    >
      <div
        ref="streamingBgr"
        class="test test__streaming"
        style="background-image: url(/backgrounds/streaming-start.jpg)"
      >
        <div ref="btnStreaming" :class="['btn', 'btn_streaming', {'btn_hover': rootStore.streamingStartHover && !animate}]">
          Стриминг
        </div>
        <div
          :class="[
            'test__backdrop',
            { test__backdrop_hover: rootStore.streamingStartHover && !animate },
          ]"
        ></div>
      </div>
    </div>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import LoadStartPage from "@/pages/LoadStartPage.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import { useRootStore } from "@/store";

const pages = ["app", "project", "streaming"];

const rootStore = useRootStore();
const router = useRouter();

rootStore.loadApiTest = true;
rootStore.loadBgrTest = true;

const endAnimate = ref(false);
const loader = ref(true);

const startView = ref();

const app = ref();
const projects = ref();
const streaming = ref();

const btnApp = ref();
const btnProjects = ref();
const btnStreaming = ref();

const projectsBgr = ref();
const appBgr = ref();
const streamingBgr = ref();

const formLogin = ref();

const animate = ref(false);

async function handlerClickApp() {
  if (!endAnimate.value) return;
  await router.push({ name: "app" });
}
async function handlerClickProject() {
  if (!endAnimate.value) return;
  await router.push({ name: "project-main" });
}
async function handlerClickStreaming() {
  if (!endAnimate.value) return;
  await router.push({ name: "streaming" });
}

function handlerMouseoverBtn(name: string) {
  if (!endAnimate.value) return;
  rootStore[`${name}StartHover`] = true;
}

function handlerMouseleaveBtn() {
  if (!endAnimate.value) return;
  for (const name of pages) {
    rootStore[`${name}StartHover`] = false;
  }
}

// onMounted(() => {
//   setTimeout(() => {
//     loader.value = false;
//     setTimeout(() => {
//       app.value.style.opacity = "1";
//       setTimeout(() => {
//         projects.value.style.opacity = "1";
//         setTimeout(() => {
//           streaming.value.style.opacity = "1";
//           setTimeout(() => {
//             // btns.value.style.display = "flex";
//             setTimeout(() => {
//               btnApp.value.style.opacity = "1";
//               btnApp.value.style.transform = "translate(0, 0)";
//               setTimeout(() => {
//                 btnProjects.value.style.opacity = "1";
//                 btnProjects.value.style.transform = "translate(0, 0)";
//                 setTimeout(() => {
//                   btnStreaming.value.style.opacity = "1";
//                   btnStreaming.value.style.transform = "translate(0, 0)";
//                   endAnimate.value = true;
//                 }, 0);
//               }, 0);
//             }, 0);
//           }, 0);
//         }, 0);
//       }, 0);
//     }, 0);
//   }, 0);
// });

onMounted(async () => {
  setTimeout(() => {
    loader.value = false;
    setTimeout(() => {
      app.value.style.opacity = "1";
      setTimeout(() => {
        projects.value.style.opacity = "1";
        setTimeout(() => {
          streaming.value.style.opacity = "1";
          setTimeout(() => {
            // btns.value.style.display = "flex";
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

watch(
  () => rootStore.appStart,
  () => {
    animate.value=true
    app.value.style.width="110vw"
    btnApp.value.style.opacity = "0";
    setTimeout(() => {

      projects.value.style.translate="10vw 0"
      streaming.value.style.translate="10vw 0"
      startView.value.style.marginLeft="0"

      app.value.style.transform="none"
      appBgr.value.style.scale="1"
      appBgr.value.style.transform="none"
      app.value.style.width="100vw"
      setTimeout(() => {
        router.push({ name: "app" });
      }, 600);
    }, 600);
  }
);

watch(
  () => rootStore.projectStart,
  () => {
    animate.value=true
    projects.value.style.width="110vw"
    app.value.style.marginLeft="-38vw"
    btnProjects.value.style.opacity = "0";
    setTimeout(() => {

      startView.value.style.marginLeft="0"
      app.value.style.translate="10vw 0"
      streaming.value.style.translate="10vw 0"

      projects.value.style.transform="none"
      projectsBgr.value.style.scale="1"
      projectsBgr.value.style.transform="none"
      projects.value.style.width="100vw"
      setTimeout(() => {
        router.push({ name: "project-main" })
      }, 600);
    }, 600);
  }
);

watch(
  () => rootStore.streamingStart,
  () => {
    animate.value=true
    streaming.value.style.width="110vw"
    app.value.style.marginLeft="-76vw"
    btnStreaming.value.style.opacity = "0";
    setTimeout(() => {
      startView.value.style.marginLeft="0"
      streaming.value.style.transform="none"
      streamingBgr.value.style.scale="1"
      streamingBgr.value.style.transform="none"
      streaming.value.style.width="100vw"
      setTimeout(() => {
        router.push({ name: "streaming" });
      }, 600);
    }, 600);
  }
);

watch(
  () => rootStore.popupStartLogin,
  (newVal) => {
    if(newVal) {
      animate.value=true
      projects.value.style.width="120vw"
      app.value.style.marginLeft="-38vw"
    } else {
      animate.value=false
      projects.value.style.width = ''
      app.value.style.marginLeft = ''
    }
  }
);
</script>

<style lang="scss" scoped>
.btn {
  color: white;
  font-family: JuraSemiBold;
  font-size: 3.5vh;
  line-height: 125%;
  letter-spacing: -0.76px;
  padding: 10px 40px;
  transition: all 0.6s;
  scale: .6;
  cursor: pointer;
  opacity: 0;
  transform: translate(-30px, -30px);
  translate: -50%;
  &_hover {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 10px 40px;
  }
  &_app {
    position: absolute;
    left: 50%;
    top: 50vh;
    translate: -30% -50%;
  }
  &_projects {
    position: absolute;
    left: 50%;
    top: 50vh;
    translate: -50% -50%;
  }
  &_streaming {
    position: absolute;
    left: 50%;
    top: 50vh;
    translate: -50% -50%;
  }
}
.btn-pr {
  translate: -8vw 0;
}
.login-cntr {
  position: absolute;
  height: 100%;
  width: 200%;
  translate: -25%;
  background-color: rgba(42, 42, 42, 0.75);
  z-index: 11;
  transition: all .6s;
  &_full {
    background-color: rgba(42, 42, 42, 1);
  }
  &_form {
    transition: all .6s;
    transform: skew(-10deg, 0);
    height: 100%;
  }
}
.test-btn {
  position: fixed;
  top: 60px;
  left: 60px;
  z-index: 3;
}
.start-view {
  margin-left: -8%;
  position: fixed;
  height: 100vh;
  width: 115vw;
  overflow: hidden;
  background-color: black;
  z-index: 2;
  text-wrap: nowrap;
  transition: all .6s;
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
    // &__app {
    //   background-image: url(https://localhost:8080/backgrounds/app-start.jpg);
    // }
    // &__streaming {
    //   background-image: url(https://localhost:8080/backgrounds/streaming-start.jpg);
    // }
    // &__projects {
    //   background-image: url(https://localhost:8080/backgrounds/projects-start.jpg);
    // }
    &__clipping {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 38vw;
      transform: skew(10deg, 0);
      overflow: hidden;
      z-index: 1;
      transition: all 0.6s;
      opacity: 0;
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
