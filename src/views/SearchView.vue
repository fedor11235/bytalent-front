<template>
  <div class="serach-view">
    <div class="serach-view__backdrop">
      <HeaderComponent class="serach-view__header" />
      <div class="serach-view__input">
        <img
          v-if="searchText"
          class="serach-view__input_icon"
          src="@/assets/icons/daw.svg"
          height="24"
          width="24"
          alt="daw"
        />
        <input
          v-model="searchText"
          class="serach-view__enter"
          placeholder="Введите свой поисковой запрос"
        />
      </div>
      <img
        class="serach-view__btn"
        src="@/assets/components/search.svg"
        width="200"
        height="42"
        alt="serach"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
const searchText = ref("");
</script>

<style lang="scss" scoped>
.serach-view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/backgrounds/visualization-first.jpeg);
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(17.5px);
    row-gap: 32px;
  }
  &__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__input {
    position: relative;
    width: 80%;
    &_icon {
      position: absolute;
      right: 32px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__enter {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 32px;
    border-radius: 40px;
    border: 1px solid #191919;
    left: 0;
    padding: 20px 32px;
    border-radius: 40px;
    border: 1px solid #191919;
    background-color: #fff;
    color: #191919;
    font-family: JuraMedium;
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
    border: none;
    cursor: pointer;
    &::placeholder {
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 125%;
      letter-spacing: -0.76px;
    }
    &:focus-visible {
      outline: none;
    }
  }
  &__btn {
    cursor: pointer;
  }
}
</style>
