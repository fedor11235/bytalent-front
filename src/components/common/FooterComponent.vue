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
        @click="handlerBtnNavigationLeftClick"
        alt="left arrow"
      ></div>
      <div class="footer__page-one" :style="{ color: textPageOne }">
        {{ "0" + curentPages }}
      </div>
      <div class="footer__page-up">
        <img
          class="footer__page-slash"
          src="@/assets/footer/slash.svg"
          alt="slash"
        />
        <div class="footer__page-two" :style="{ color: colorTwoPages }">
          {{ "0" + numberPages }}
        </div>
      </div>
      <div
        class="footer__navigation_img"
        :style="{
          backgroundImage: `url(${require(`@/assets/footer/${rightArrowImg}`)})`,
        }"
        @mouseover="rightArrowHover = true"
        @mouseleave="rightArrowHover = false"
        @click="handlerBtnNavigationRightClick"
        alt="left arrow"
      ></div>
    </div>
    <div class="footer__download">
      <div>|</div>
      <div
        v-if="textButton"
        class="footer__download_button"
        :style="verticalBarStyle"
        @click="handlerBtnFooterClick"
      >
        {{ textButton }}
      </div>
      <div
        v-else
        @click="handlerBtnFooterClick"
        class="footer__download__cross"
      ></div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRef, inject } from "vue";

const props = defineProps<{
  theme?: "light";
  numberPages?: number;
  curentPages?: number;
  colorTwoPages?: string;
  textButton?: string;
  handlerBtnFooterClick?: () => void;
  handlerBtnNavigationLeftClick?: () => void;
  handlerBtnNavigationRightClick?: () => void;
}>();

const theme = toRef(props, "theme");
const curentPages = toRef(props, "curentPages");

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

const verticalBarStyle = computed(() => {
  return {
    color: textColor.value,
    textShadow: `1px 1px 6px ${textColor.value}`,
  };
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
  width: 100%;
  height: 5.83vh;
  // bottom: 9.8vh;
  bottom: 3.7vh;
  margin-bottom: 6.1vh;
  justify-content: flex-start;
  column-gap: 7.343vw;
  &__navigation {
    display: flex;
    align-items: center;
    height: 7vh;
    justify-content: flex-start;
    column-gap: 0.9375vw;
    &_img {
      width: 2.2135vw;
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
    column-gap: 2.187vw;
    &__cross {
      background-image: url(http://localhost:8080/img/cross.2af0edda.svg);
      height: 35px;
      width: 35px;
      cursor: pointer;
      background-size: cover;
      transform: rotate(45deg);
    }
    div {
      color: #f9f9f9;
      font-family: JuraRegular;
      font-size: 2.59vh;
      font-style: normal;
      line-height: 100%;
      letter-spacing: -0.56px;
      cursor: pointer;
    }
    &_button:hover {
      scale: 1.01;
    }
  }
  &__page-one {
    color: #fff;
    font-family: JuraSemiBold;
    font-size: 4.6vh;
    line-height: 125%;
    letter-spacing: -1.5px;
  }
  &__page-up {
    display: flex;
    column-gap: 0.9375vw;
    align-items: center;
    justify-content: space-between;
  }
  &__page-slash {
    height: 4.6vh;
  }
  &__page-two {
    color: rgba(255, 255, 255, 0.55);
    font-family: JuraSemiBold;
    font-size: 3.5vh;
    line-height: 125%;
    letter-spacing: -0.76px;
  }
}
</style>
