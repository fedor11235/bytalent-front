<template>
  <div
    @mouseenter="handlerMouseenterImg"
    @mouseleave="handlerMouseleaveImg"
    class="card"
    :class="[
      'card',
      { 
        'card_hover': isHover,
        'card_search': isSearch
      },
    ]"
  >
    <div
      :style="{
        backgroundImage: `url(${require(`@/assets/backgrounds/${backgroundImage}`)})`,
        opacity: opactiImg(isHover, isLogin)
      }"
      class="card_img"
    ></div>
    <div
      v-if="isHover"
      class="card__title"
    >
      {{ text }}
    </div>
    <div v-else class="card__text">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isSearch: boolean;
  isLogin: boolean;
  isHover: boolean;
  backgroundImage: string;
  name: string;
  text: string;
}>();

function opactiImg(isHover: boolean, isLogin: boolean) {
  if(isHover || isLogin) {
    return "0";
  } else {
    return "1"
  }
}

function handlerMouseenterImg(event: any) {
  if(props.isLogin) return
  const childText = event.target.querySelector(
    ".card__text"
  );
  if (childText) {
    event.target.classList.add("card_big");
    childText.style.transform = "translate(0)";
  }
}

function handlerMouseleaveImg(event: any) {
  if(props.isLogin) return
  const childText = event.target.querySelector(
    ".card__text"
  );
  if (childText) {
    event.target.classList.remove("card_big");
    childText.style.transform = "translate(calc(100% + 0.41vw), 100%)";
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  left: 0;
  width: 26vw;
  height: 14.7vh;
  overflow: hidden;
  cursor: pointer;
  font-size: 0;
  transition: all 0.6s;
  background-color: rgba(0, 0, 0, 0.55);
  &_img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center;
    background-size: 120%;
    opacity: 1;
    transition: all 0.6s;
  }
  &_big {
    width: 39.06vw;
    height: 20.83vh;
  }
  &_hover {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 13vw;
    width: 100vw;
    height: 20.83vh;
    box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.2);
    font-size: 4.6vh;
    backdrop-filter: blur(5px);
  }
  &_search {
    position: absolute;
    left: 0;
    height: 8.8vh;
    width: 24.66vw;
  }
  &__title {
    color: white;
    text-align: center;
    font-family: JuraSemiBold;
    line-height: 125%;
    letter-spacing: -1.5px;
  }
  &__text {
    position: absolute;
    right: 0.41vw;
    bottom: 0;
    color: white;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5),
      -2px -1px 8px rgba(0, 0, 0, 0.35);
    font-family: JuraRegular;
    font-size: 5.925vh;
    line-height: 125%;
    letter-spacing: -1.28px;
    transition: transform 0.6s;
    transform: translate(calc(100% + 0.41vw), 100%);
  }
}
</style>

