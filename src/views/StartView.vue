<template>
  <div class="start-view">
    <div class="start-view__backdrop">
      <div
        :class="[
          'start-view__content',
          {
            'start-view__content_login': rootStore.loginStartHover,
            'start-view__content_search': rootStore.searchStartHover,
          },
        ]"
      >
        <Transition name="login">
          <LoginForm v-if="rootStore.loginStartHover" absolutePos />
        </Transition>
        <CardComponent
          :isHover="rootStore.appStartHover"
          :isLogin="rootStore.loginStartHover"
          :isSearch="rootStore.searchStartHover"
          searchPosX="-200%"
          searchPosY="17.01vh"
          backgroundImage="app.png"
          name="Приложение"
          text="Каждая деталь важна: Визуализация 3D с Unreal Engine 5"
        />
        <CardComponent
          :isHover="rootStore.projectStartHover"
          :isLogin="rootStore.loginStartHover"
          :isSearch="rootStore.searchStartHover"
          searchPosX="-100%"
          searchPosY="0"
          backgroundImage="projects-auth.png"
          name="Проекты"
          text="Управляйте пространством: создайте свое приложение создания интерьеров Unreal Engine 5"
        />
        <CardComponent
          :isHover="rootStore.streamingStartHover"
          :isLogin="rootStore.loginStartHover"
          :isSearch="rootStore.searchStartHover"
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
      <SearchComponent v-if="rootStore.searchStartHover" class="test"/>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import CardComponent from "@/components/start/CardComponent.vue";
import SearchComponent from "@/components/common/SearchComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const rootStore = useRootStore();
const loginStartHover = true;
const searchStartHover = true;

rootStore.hiddenHeader = false;
</script>

<style lang="scss" scoped>
.test {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
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
