<template>
  <div class="footer">
    <div class="footer__navigation">
      <div
        class="footer__navigation_img"
        :style="{
          backgroundImage: `url(${require(`@/assets/footer/${leftArrowImg}`)})`,
        }"
        @mouseover="leftArrowHover = true"
        @mouseleave="leftArrowHover = false"
        @click="homeStore.secondPage = !homeStore.secondPage"
        alt="left arrow"
      ></div>
      <div class="footer__page-one" :style="{ color: textPageOne }">
        {{ homeStore.secondPage ? "02" : "01" }}
      </div>
      <div class="footer__page-up">
        <img
          class="footer__page-slash"
          src="@/assets/footer/slash.svg"
          alt="slash"
        />
        <div class="footer__page-two" :style="{ color: textPageTwo }">02</div>
      </div>
      <div
        class="footer__navigation_img"
        :style="{
          backgroundImage: `url(${require(`@/assets/footer/${rightArrowImg}`)})`,
        }"
        @mouseover="rightArrowHover = true"
        @mouseleave="rightArrowHover = false"
        @click="homeStore.secondPage = !homeStore.secondPage"
        alt="left arrow"
      ></div>
    </div>
    <div class="footer__download">
      <div>|</div>
      <div
        v-if="homeStore.secondPage"
        @click="router.push({ name: 'new-lavel' })"
        class="footer__download_button"
        :style="{ color: textColor, textShadow: `1px 1px 6px ${textColor}` }"
      >
        Новый уровень
      </div>
      <div
        v-else
        @click="homeStore.uploadProject = true"
        class="footer__download_button"
        :style="{ color: textColor, textShadow: `1px 1px 6px ${textColor}` }"
      >
        + Загрузить готовый проект
      </div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRef } from "vue";
import { useHomeStore } from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();
const homeStore = useHomeStore();

const props = defineProps<{
  theme?: "light";
}>();

const theme = toRef(props, "theme");

const leftArrowHover = ref(false);
const rightArrowHover = ref(false);

const textColor = computed(() => {
  if (theme.value === "light") {
    return "black";
  } else {
    return "white";
  }
});

const textPageOne = computed(() => {
  if (theme.value === "light") {
    return "#161616";
  } else {
    return "#d4d4d4";
  }
});

const textPageTwo = computed(() => {
  if (theme.value === "light") {
    return "#353535";
  } else {
    return "#8b8b8b";
  }
});

const leftArrowImg = computed(() => {
  if (leftArrowHover.value) {
    if (theme.value === "light") {
      return "left-arrow-light-active.png";
    }
    return "left-arrow-active.svg";
  } else {
    if (theme.value === "light") {
      return "left-arrow-light.png";
    }
    return "left-arrow.svg";
  }
});

const rightArrowImg = computed(() => {
  if (rightArrowHover.value) {
    if (theme.value === "light") {
      return "right-arrow-light-active.png";
    }
    return "right-arrow-active.svg";
  } else {
    if (theme.value === "light") {
      return "right-arrow-light.png";
    }
    return "right-arrow.svg";
  }
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  position: fixed;
  width: 70%;
  height: 11%;
  left: 15%;
  bottom: 6vh;
  justify-content: space-between;
  &__navigation {
    display: flex;
    align-items: center;
    width: 35%;
    height: 7vh;
    justify-content: space-between;
    &_img {
      width: 20%;
      height: 100%;
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: 80%;
      cursor: pointer;
    }
  }
  &__download {
    display: flex;
    justify-content: space-between;
    width: 55%;
    div {
      text-align: center;
      cursor: pointer;
      margin-top: -1%;
      font-family: "Jost 100 hairline", sans-serif;
      font-size: 24px;
    }
    &_button:hover {
      scale: 1.01;
    }
  }
  &__page-one {
    letter-spacing: -8px;
    font-family: Jura, sans-serif;
    font-size: 8.5vh;
    font-style: normal;
    line-height: 44%;
  }
  &__page-up {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3vh;
  }
  &__page-slash {
    margin-bottom: 1vh;
  }
  &__page-two {
    letter-spacing: -4px;
    font-family: Jura, sans-serif;
    font-size: 5vh;
    line-height: 42px;
  }
}
</style>
