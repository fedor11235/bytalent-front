<template>
  <div class="header">
    <div
      class="header__logo"
      :style="{ backgroundImage: `url(${require(`@/assets/${logo}.png`)})` }"
    ></div>
    <div
      class="header__line-left"
      :style="{
        backgroundImage: `url(${require(`@/assets/${lineLeft}.png`)})`,
      }"
    ></div>
    <ButtonComponent :url="urlButton" :urlHover="urlButtonHover" />
    <div
      class="header__line-right"
      :style="{
        backgroundImage: `url(${require(`@/assets/${lineRight}.png`)})`,
      }"
    ></div>
    <BurgerComponent :type="type" @click="emit('switch')" :theme="theme" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from "vue";
import BurgerComponent from "@/components/BurgerComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const emit = defineEmits(["switch"]);

const props = defineProps<{
  theme?: "light";
  urlButton: string;
  urlButtonHover: string;
  type: "burger" | "cross";
}>();

const theme = toRef(props, "theme");

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
  &__line-right {
    height: 4px;
    width: 50%;
    background-image: url("@/assets/line-right.png");
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: 1048px;
  }
}
</style>
