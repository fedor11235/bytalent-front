<template>
  <div class="header">
    <div
      class="header__logo"
      :style="{
        backgroundImage: `url(${require(`@/assets/header/${logo}.png`)})`,
      }"
    ></div>
    <div class="header__controls">
      <span
        @click="router.push({ name: 'visualization-first' })"
        :class="[
          'header__btn',
          {
            header__btn_active:
              route.name === 'visualization-first' ||
              route.name === 'visualization-second',
          },
        ]"
        >Визуализация</span
      >
      <span
        @click="router.push({ name: 'app' })"
        :class="['header__btn', { header__btn_active: route.name === 'app' }]"
        >Приложение</span
      >
      <span
        @click="router.push({ name: 'streaming' })"
        :class="[
          'header__btn',
          { header__btn_active: route.name === 'streaming' },
        ]"
        >Стриминг</span
      >
      <span
        @click="router.push({ name: 'settings' })"
        :class="[
          'header__btn',
          { header__btn_active: route.name === 'settings' },
        ]"
        >Профиль</span
      >
      <img
        class="header__search"
        src="@/assets/icons/search.svg"
        height="18"
        width="18"
        alt="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRef, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

type Buttons = {
  static: string;
  hover: string;
  path: string;
};

const router = useRouter();
const route = useRoute();
console.log(route.name);

const emit = defineEmits(["switch"]);

const props = defineProps<{
  theme?: "light";
  urlButton: string;
  urlButtonHover: string;
  type: "burger" | "cross";
  isTitleButton?: boolean;
}>();

const handlerBtnHeaderClick = inject("handlerBtnHeaderClick") as (
  ...args: any[]
) => void;

const buttons = [
  {
    static: "header/visualization.png",
    hover: "header/visualization-hover.png",
    path: "visualization-first",
  },
  {
    static: "header/streaming.png",
    hover: "header/streaming.png",
    path: "streaming",
  },
  { static: "header/app.png", hover: "header/app.png", path: "app" },
];

const hiddenButtons: Array<Buttons> = [];

for (const button of buttons) {
  if (button.static != props.urlButton) {
    hiddenButtons.push(button);
  }
}

const theme = toRef(props, "theme");

const isDropDawn = ref(false);

const logo = computed(() => {
  if (theme.value === "light") return "logo-light";
  else return "logo";
});

const lineLeft = computed(() => {
  if (theme.value === "light") return "line-left-light";
  else return "line-left";
});

const lineRight = computed(() => {
  if (theme.value === "light") return "line-right-light";
  else return "line-right";
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  &__logo {
    width: 95px;
    height: 50px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__button {
    position: relative;
  }
  &__dropdawn {
    position: absolute;
    scale: 0.9;
    &_button {
      margin-top: 8px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
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
    column-gap: 6px;
  }
  &__btn {
    padding: 6px 12px;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid white;
    }
    &_active {
      border-bottom: 1px solid white;
    }
  }
  &__search {
    padding: 0 8px;
    &:hover {
      border-bottom: 1px solid white;
    }
    &_active {
      border-bottom: 1px solid white;
    }
    cursor: pointer;
  }
}
</style>
