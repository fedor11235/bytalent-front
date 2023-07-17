<template>
  <div class="footer">
    <div class="footer__navigation">
      <img
        :src="require(`@/assets/footer/${leftArrowImg}.svg`)"
        @mouseover="leftArrowHover = true"
        @mouseleave="leftArrowHover = false"
        @click="homeStore.secondPage = !homeStore.secondPage"
        alt="left arrow"
      />
      <div class="footer__page-one">{{ homeStore.secondPage? '02' : '01' }}</div>
      <div class="footer__page-up">
        <img class="footer__page-slash" src="@/assets/footer/slash.svg" alt="slash"/>
        <div class="footer__page-two">02</div>
      </div>
      <img
        :src="require(`@/assets/footer/${rightArrowImg}.svg`)"
        @mouseover="rightArrowHover = true"
        @mouseleave="rightArrowHover = false"
        @click="homeStore.secondPage = !homeStore.secondPage"
        alt="left arrow"
      />
    </div>
    <div class="footer__download">
      <div>|</div>
      <div @click="homeStore.uploadProject = true" class="footer__download_button">+ Загрузить готовый проект</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useHomeStore } from  "@/store"

const homeStore = useHomeStore()

const leftArrowHover = ref(false);
const rightArrowHover = ref(false);

const leftArrowImg = computed(() => {
  if (leftArrowHover.value) {
    return "left-arrow-active";
  } else {
    return "left-arrow";
  }
});

const rightArrowImg = computed(() => {
  if (rightArrowHover.value) {
    return "right-arrow-active";
  } else {
    return "right-arrow";
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
  }
  &__download {
    display: flex;
    justify-content: space-between;
    width: 55%;
    div {
      color: #fff;
      text-align: center;
      text-shadow: 1px 1px 6px #fff;
      cursor: pointer;
      margin-top: -1%;
      font-family: "Jost 100 hairline", sans-serif;
      font-size: 24px;
    }
    &_button:hover {
      scale: 1.01;
    }
  }
  img {
    cursor: pointer;
  }
  &__page-one {
    color: #d4d4d4;
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
    color: #8b8b8b;
    letter-spacing: -4px;
    font-family: Jura, sans-serif;
    font-size: 5vh;
    line-height: 42px;
  }
}
</style>
