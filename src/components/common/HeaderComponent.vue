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
        v-for="button of buttons"
        :key="button.name"
        @click="router.push({ name: button.name })"
        :class="btnClass(button.name)"
        >{{ button.title }}</span
      >
      <img
        v-if="theme === 'light'"
        @click="router.push({ name: 'search' })"
        :class="btnClass('search')"
        src="@/assets/icons/search-light.svg"
        height="18"
        width="18"
        alt="search"
      />
      <img
        v-else
        @click="router.push({ name: 'search' })"
        :class="btnClass('search')"
        src="@/assets/icons/search.svg"
        height="18"
        width="18"
        alt="search"
      />
    </div>
    <!-- <div>[[]]</div> -->
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from "vue";
import { useRouter, useRoute } from "vue-router";

const buttons = [
  { name: "visualization-first", title: "Визуализация" },
  { name: "app", title: "Приложение" },
  { name: "streaming", title: "Стриминг" },
  { name: "profile", title: "Профиль" },
];

const lines = ["one", "two", "three", "two", "one"];

const router = useRouter();
const route = useRoute();

const props = defineProps<{
  theme?: "light";
}>();

const theme = toRef(props, "theme");

function logoStyle() {
  if (theme.value === "light")
    return {
      backgroundImage: `url(${require("@/assets/header/logo-light.png")})`,
    };
  else
    return { backgroundImage: `url(${require("@/assets/header/logo.png")})` };
}

function btnClass(name: string) {
  return {
    header__btn: route.name !== name && theme.value !== "light",
    "header__btn-light": route.name !== name && theme.value === "light",
    header__btn_active: route.name === name && theme.value !== "light",
    "header__btn-light_active": route.name === name && theme.value === "light",
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
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  padding-right: 15px;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  height: 60px;
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
    width: 95px;
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
