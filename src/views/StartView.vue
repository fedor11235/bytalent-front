<template>
  <div class="start-view">
    <div class="start-view__backdrop">
      <HeaderComponent />
      <div
        :class="[
          'start-view__content',
          {
            'start-view__content_login': rootStore.isActiveLoginPopup,
            'start-view__content_search':
              rootStore.searchStartHover && !rootStore.popuplogin,
          },
        ]"
      >
        <div v-if="rootStore.popuplogin" class="login-back"></div>
        <Transition name="login">
          <LoginForm v-if="rootStore.isActiveLoginPopup" absolutePos />
        </Transition>
        <CardComponent
          :isHover="rootStore.appStartHover && !rootStore.popuplogin"
          :isLogin="rootStore.isActiveLoginPopup"
          :isSearch="rootStore.searchStartHover && !rootStore.popuplogin"
          searchPosX="-200%"
          searchPosY="17.01vh"
          backgroundImage="app.png"
          name="Приложение"
          text="Каждая деталь важна: Визуализация 3D с Unreal Engine 5"
        />
        <CardComponent
          :isHover="rootStore.projectStartHover && !rootStore.popuplogin"
          :isLogin="rootStore.isActiveLoginPopup"
          :isSearch="rootStore.searchStartHover && !rootStore.popuplogin"
          searchPosX="-100%"
          searchPosY="0"
          backgroundImage="projects-auth.png"
          name="Проекты"
          text="Управляйте пространством: создайте свое приложение создания интерьеров Unreal Engine 5"
        />
        <CardComponent
          :isHover="rootStore.streamingStartHover && !rootStore.popuplogin"
          :isLogin="rootStore.isActiveLoginPopup"
          :isSearch="rootStore.searchStartHover && !rootStore.popuplogin"
          searchPosX="0"
          searchPosY="-17.01vh"
          backgroundImage="streaming-new.png"
          name="Стриминг"
          text="3D миры в реальном времени: Онлайн стриминг с by Talent"
        />
      </div>
    </div>
    <FAQControl />
    <Transition name="test">
      <SearchComponent
        v-if="rootStore.searchStartHover && !rootStore.popuplogin"
        class="test"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import CardComponent from "@/components/start/CardComponent.vue";
import SearchComponent from "@/components/common/SearchComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const rootStore = useRootStore();
rootStore.hiddenHeader = true;
const loginStartHover = true;
const searchStartHover = true;

rootStore.hiddenHeader = true;
</script>

<style lang="scss" scoped>
.test {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.login-back {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: #191919;
  animation: login-back-active 0.6s linear;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  transition: all 0.6s;
  @keyframes login-back-active {
    0% {
      height: 44.1vh;
      width: 26vw;
    }
    100% {
      width: 100vw;
      height: 100vh;
    }
  }
}
.start-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url(@/assets/backgrounds/visualization-first.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__content {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 13vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 2.31vh;
    transition: all 0.6s;
    z-index: 3;
    &_login {
      right: 50%;
      row-gap: 0;
      transform: translate(50%, -50%);
    }
  }
}
</style>

<!-- <template>
  <HoverLayout
    bg="visualization-first.jpeg"
    content="Unite, Create, Excel: Your new life, Empowered by Talent"
    :noHover="check"
  />
</template> -->
