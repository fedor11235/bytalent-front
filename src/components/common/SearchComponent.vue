<template>
  <div class="search">
    <input class="search__input" v-model="wordSearch" placeholder="Поиск" />
    <img class="search__img" src="@/assets/icons/search-big.svg" alt="search" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const wordSearch = ref();
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  height: 9vh;
  width: 70vw;
  background: linear-gradient(
    -45deg,
    transparent 15px,
    rgba(255, 255, 255, 0.65) 0
  );
  &__input {
    color: rgba(0, 0, 0, 0.55);
    font-family: JuraSemiBold;
    font-size: 4.6vh;
    line-height: 125%;
    letter-spacing: -1.5px;
    height: 100%;
    width: calc(100% - 10vw);
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0 4.44vh;
    &::placeholder {
      color: rgba(0, 0, 0, 0.55);
      font-family: JuraSemiBold;
      font-size: 4.6vh;
      line-height: 125%;
      letter-spacing: -1.5px;
    }
  }
  &__img {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    height: 5.925vh;
    width: 5.925vh;
    cursor: pointer;
  }
}
</style>
