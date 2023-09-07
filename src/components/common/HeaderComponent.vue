<template>
  <div class="header" @click.self="handlerClosePopup">
    <div class="header__border header__border-top">
      <div
        v-for="(line, index) of lines"
        :key="`${line}-${index}`"
        :class="[
          'header__border_line',
          `header__border_line-${line}`,
          { 'header__border_line-light': theme === 'light' },
        ]"
      ></div>
    </div>
    <div class="header__border header__border-bottom">
      <div
        v-for="(line, index) of lines"
        :key="`${line}-${index}`"
        :class="[
          'header__border_line',
          `header__border_line-${line}`,
          { 'header__border_line-light': theme === 'light' },
        ]"
      ></div>
    </div>
    <div class="header__logo" :style="logoStyle()"></div>
    <div :class="controllClass()">
      <span
        v-for="button of buttons"
        :key="button.name"
        @click="handlerSwitchPage(button.name)"
        :class="btnClass(button.name)"
        @mouseover="handlerMouseOverBtn(button.name)"
        @mouseout="handlerMouseOutBtn(button.name)"
        @mouseenter="handlerMouseOverBtn(button.name)"
        @mouseleave="handlerMouseOutBtn(button.name)"
        >{{ button.title }}</span
      >
      <span
        v-if="noHover"
        @click="handlerSwitchPage('profile')"
        :class="btnClass('profile')"
        @mouseover="handlerMouseOverBtn('profile')"
        @mouseout="handlerMouseOutBtn('profile')"
        @mouseenter="handlerMouseOverBtn('profile')"
        @mouseleave="handlerMouseOutBtn('profile')"
        >Профиль</span
      >
      <div
        v-if="!noHover"
        @click="handlerLogin"
        @mouseover="handlerMouseOverBtn('login')"
        @mouseout="handlerMouseOutBtn('login')"
        @mouseenter="handlerMouseOverBtn('login')"
        @mouseleave="handlerMouseOutBtn('login')"
        :class="{
          header__btn: theme !== 'light',
          'header__btn-light': theme === 'light',
        }"
      >
        Войти
      </div>
      <img
        v-if="theme === 'light'"
        @click="handlerSwitchPage('search')"
        @mouseover="handlerMouseOverBtn('search')"
        @mouseout="handlerMouseOutBtn('search')"
        :class="btnClass('search')"
        src="@/assets/icons/search-light.svg"
        height="18"
        width="18"
        alt="search"
      />
      <img
        v-else
        @click="handlerSwitchPage('search')"
        @mouseover="handlerMouseOverBtn('search')"
        @mouseout="handlerMouseOutBtn('search')"
        :class="btnClass('search')"
        src="@/assets/icons/search.svg"
        height="18"
        width="18"
        alt="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRootStore } from "@/store";

type PageName =
  | "project"
  | "app"
  | "streaming"
  | "login"
  | "search"
  | "profile";
const allPages: PageName[] = ["project", "app", "streaming", "login", "search"];

const rootStore = useRootStore();

const buttons = [
  { name: "app" as PageName, title: "Приложение" },
  { name: "project" as PageName, title: "Проекты" },
  { name: "streaming" as PageName, title: "Стриминг" },
];

const lines = ["one", "two", "three", "two", "one"];

const router = useRouter();
const route = useRoute();

const props = defineProps<{
  theme?: "light";
  noHover?: boolean;
}>();

const theme = toRef(props, "theme");

function handlerLogin() {
  rootStore.popuplogin = !rootStore.popuplogin;
  closeHover();
  // router.push({ name: "login" }).then(() => {
  //   closeHover();
  // });
}

function handlerMouseOverBtn(name: PageName) {
  if (!props.noHover && route.name !== "start") {
    rootStore[`${name}Hover`] = true;
  }
  if (route.name === "start") {
    rootStore[`${name}StartHover`] = true;
  }
}

function handlerMouseOutBtn(name: PageName) {
  rootStore[`${name}Hover`] = false;
  rootStore[`${name}StartHover`] = false;
}

async function handlerSwitchPage(name: PageName) {
  if (route.name === "start" && name === "search") {
    rootStore.popupSearch = !rootStore.popupSearch;
  } else if (name === "profile") {
    rootStore.popupProfile = !rootStore.popupProfile;
  } else if (name === "project") {
    closeHover();
    await router.push({ name: "project-main" });
  } else {
    closeHover();
    await router.push({ name: name });
  }
}

function handlerClosePopup() {
  rootStore.popupProfile = false;
}

function closeHover() {
  for (const page of allPages) {
    rootStore[`${page}Hover`] = false;
    rootStore[`${page}StartHover`] = false;
  }
  rootStore.projectHover = false;
  rootStore.popupProfile = false;
}

function logoStyle() {
  if (theme.value === "light")
    return {
      backgroundImage: `url(${require("@/assets/header/logo-light.png")})`,
    };
  else
    return { backgroundImage: `url(${require("@/assets/header/logo.png")})` };
}

function btnClass(name: string) {
  if (name === "project") {
    return {
      header__btn:
        (route.name !== "project-main" ||
          route.name !== "project-id" ||
          route.name !== "project-empty") &&
        theme.value !== "light",
      "header__btn-light":
        (route.name !== "project-main" ||
          route.name !== "project-id" ||
          route.name !== "project-empty") &&
        theme.value === "light",
      header__btn_active:
        (route.name === "project-main" ||
          route.name === "project-id" ||
          route.name === "project-empty") &&
        theme.value !== "light" &&
        !rootStore.popupProfile,
      "header__btn-light_active":
        (route.name === "project-main" ||
          route.name === "project-id" ||
          route.name === "project-empty") &&
        theme.value === "light" &&
        !rootStore.popupProfile,
    };
  } else if (name === "profile") {
    return {
      "header__btn-profile": true,
      header__btn: !rootStore.popupProfile && theme.value !== "light",
      "header__btn-light": !rootStore.popupProfile && theme.value === "light",
      header__btn_active: rootStore.popupProfile && theme.value !== "light",
      "header__btn-light_active":
        rootStore.popupProfile && theme.value === "light",
    };
  }
  return {
    header__btn:
      (route.name !== name || rootStore.popupProfile) &&
      theme.value !== "light",
    "header__btn-light":
      (route.name !== name || rootStore.popupProfile) &&
      theme.value === "light",
    header__btn_active:
      route.name === name && theme.value !== "light" && !rootStore.popupProfile,
    "header__btn-light_active":
      route.name === name && theme.value === "light" && !rootStore.popupProfile,
  };
}

function controllClass() {
  return [
    "header__controls",
    { "header__controls-light": theme.value === "light" },
  ];
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 3.7vh 2%;
  padding-right: 15px;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  height: 7.4vh;
  max-height: 80px;
  z-index: 3;
  &__burger {
    position: relative;
    z-index: 2;
  }
  &__mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60vw;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 32px;
    row-gap: 16px;
    &_btn {
      font-family: JuraMedium;
      font-size: 1.85vh;
      color: white;
      opacity: 0.75;
      cursor: pointer;
      &:hover {
        scale: 1.075;
        opacity: 1;
      }
    }
  }
  &__border {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    display: flex;
    column-gap: 12px;
    &-top {
      top: 0;
    }
    &-bottom {
      bottom: -1px;
    }
    &_line {
      background-color: white;
      &-light {
        background-color: black;
      }
      &-one {
        width: 2%;
        opacity: 0.1;
      }
      &-two {
        width: 4%;
        opacity: 0.15;
      }
      &-three {
        width: 100%;
        opacity: 0.35;
      }
    }
  }
  &__logo {
    width: 150px;
    height: 100%;
    padding: 0 30px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 70%;
    &-light {
      border-color: rgba(0, 0, 0, 0.33);
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    color: #fff;
    font-family: JuraMedium;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.4px;
    column-gap: 16px;
    justify-content: flex-end;
    &-light {
      color: #191919;
    }
    img {
      box-sizing: content-box;
    }
  }
  &__btn {
    padding: 6px 12px;
    border: 1px solid transparent;
    cursor: pointer;
    &-light {
      padding: 6px 12px;
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 12px 0px rgba(227, 227, 227, 0.7);
      }
      &_active {
        scale: 1.2;
        padding: 6px 12px;
        border-bottom: 1px solid #191919;
        pointer-events: none;
      }
    }
    &:hover {
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 12px 0px rgba(227, 227, 227, 0.7);
    }
    &_active {
      padding: 6px 12px;
      scale: 1.2;
      border-bottom: 1px solid white;
      pointer-events: none;
    }
    &-profile {
      cursor: pointer;
      pointer-events: all;
    }
  }
  &__search {
    padding: 8px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    &-light {
      padding: 8px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #191919;
      }
      &_active {
        scale: 1.2;
        border-bottom: 1px solid #191919;
      }
    }
    &:hover {
      border-bottom: 1px solid white;
    }
    &_active {
      scale: 1.2;
      border-bottom: 1px solid white;
    }
  }
}
</style>
