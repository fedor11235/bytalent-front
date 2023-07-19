<template>
  <div class="header">
    <div
      class="header__logo"
      :style="{
        backgroundImage: `url(${require(`@/assets/header/${logo}.png`)})`,
      }"
    ></div>
    <div
      class="header__line-left"
      :style="{
        backgroundImage: `url(${require(`@/assets/header/${lineLeft}.png`)})`,
      }"
    ></div>
    <ButtonComponent
      v-if="isTitleButton"
      :url="urlButton"
      :urlHover="urlButtonHover"
      @click="handlerBtnHeaderClick"
    />
    <div v-else class="header__button">
      <ButtonComponent
        :url="urlButton"
        :urlHover="urlButtonHover"
        @click="isDropDawn = !isDropDawn"
      />
      <div v-if="isDropDawn" class="header__dropdawn">
        <ButtonComponent
          v-for="button of hiddenButtons"
          :key="button.path"
          :url="button.static"
          :urlHover="button.hover"
          @click="router.push({ name: button.path })"
          class="header__dropdawn_button"
        />
      </div>
    </div>
    <div
      class="header__line-right"
      :style="{
        backgroundImage: `url(${require(`@/assets/header/${lineRight}.png`)})`,
      }"
    ></div>
    <BurgerComponent :type="type" @click="emit('switch')" :theme="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRef, inject } from "vue";
import BurgerComponent from "@/components/BurgerComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useRouter } from "vue-router";

type Buttons = {
  static: string;
  hover: string;
  path: string;
};

const router = useRouter();

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
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  justify-content: space-between;
  &__logo {
    width: 95px;
    height: 50px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__line-left {
    height: 4px;
    width: 8%;
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 90px;
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
  &__line-right {
    height: 4px;
    width: 50%;
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: 1048px;
  }
}
</style>
