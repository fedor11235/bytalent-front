<template>
  <div class="header">
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
        @click="handlerSwitchPage('start')"
        :class="{
          header__btn: theme !== 'light',
          'header__btn-light': theme === 'light',
        }"
        >На главную</span
      >
      <span
        v-if="!removeBtnPst"
        @click="handlerSwitchPage('project')"
        :class="
          btnClass(
            'new-lavel',
            rootStore.popupSettings || rootStore.popupProfile
          )
        "
        >Проект</span
      >
      <!-- <span
        @click="handlerSwitchPage('settings')"
        :class="btnClassPopup(rootStore.popupSettings)"
        >Настройки</span
      > -->
      <span
        @click="handlerSwitchPage('profile')"
        :class="btnClassPopup(rootStore.popupProfile)"
        >Профиль</span
      >
      <img
        v-if="theme === 'light'"
        @click="handlerSwitchPage('search')"
        :class="
          btnClass('search', rootStore.popupSettings || rootStore.popupProfile)
        "
        src="@/assets/icons/search-light.svg"
        height="18"
        width="18"
        alt="search"
      />
      <img
        v-else
        @click="handlerSwitchPage('search')"
        :class="
          btnClass('search', rootStore.popupSettings || rootStore.popupProfile)
        "
        src="@/assets/icons/search.svg"
        height="18"
        width="18"
        alt="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRootStore } from "@/store";

const props = defineProps({
  removeBtnPst: { type: Boolean, required: false, default: false },
  theme: { type: String, required: false, default: "" },
});

const rootStore = useRootStore();

const lines = ["one", "two", "three", "two", "one"];

const router = useRouter();
const route = useRoute();

const theme = toRef(props, "theme");
const width = ref(window.innerWidth);
const isOpenMenu = ref(false);

watch(
  () => isOpenMenu.value,
  (newVal) => {
    if (newVal) {
      isOpenMenu.value = false;
    }
  }
);

window.addEventListener("resize", updateWidth);

function updateWidth() {
  width.value = window.innerWidth;
}

function handlerSwitchPage(name: any) {
  if (name === "start") {
    rootStore.popupProfile = false;
    rootStore.popupSettings = false;
    router.push({ name: "app" });
  }
  if (name === "project") {
    rootStore.popupProfile = false;
    rootStore.popupSettings = false;
    router.push({ name: "project" });
  } else if (name === "settings") {
    rootStore.popupProfile = false;
    rootStore.popupSettings = !rootStore.popupSettings;
  } else if (name === "profile") {
    rootStore.popupProfile = !rootStore.popupProfile;
    rootStore.popupSettings = false;
  }
}

function logoStyle() {
  if (theme.value === "light")
    return {
      backgroundImage: `url(${require("@/assets/header/logo-light.png")})`,
    };
  else
    return { backgroundImage: `url(${require("@/assets/header/logo.png")})` };
}

function btnClassPopup(isPopupActive: boolean) {
  return {
    header__btn: !isPopupActive && theme.value !== "light",
    "header__btn-light": !isPopupActive && theme.value === "light",
    header__btn_active: isPopupActive && theme.value !== "light",
    "header__btn-light_active": isPopupActive && theme.value === "light",
  };
}

function btnClass(name: string, isPopupActive: boolean) {
  return {
    header__btn: isPopupActive && theme.value !== "light",
    "header__btn-light": isPopupActive && theme.value === "light",
    header__btn_active:
      route.name === name && theme.value !== "light" && !isPopupActive,
    "header__btn-light_active":
      route.name === name && theme.value === "light" && !isPopupActive,
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
  position: relative;
  display: flex;
  margin: 3.7vh 2%;
  padding-right: 15px;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  height: 7.4vh;
  max-height: 80px;
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
    width: 130px;
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
        cursor: pointer;
        // pointer-events: none;
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
      cursor: pointer;
      // pointer-events: none;
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
