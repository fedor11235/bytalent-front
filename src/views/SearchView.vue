<template>
  <div class="search-view">
    <div class="search-view__backdrop">
      <HeaderComponent class="search-view__header" :noHover="check" />
      <div class="search-view__input">
        <InputComponent
          v-model="searchText"
          placeholder="Введите свой поисковой запрос"
          padding="20px 32px"
        />
      </div>
      <img
        class="search-view__btn"
        src="@/assets/components/search.svg"
        width="200"
        height="42"
        alt="serach"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import InputComponent from "@/components/controls/InputComponent.vue";
import authService from "@/services/authService";

const searchText = ref("");
const check = ref(false);

onBeforeMount(async () => {
  check.value = await authService.checkToken();
});
</script>

<style lang="scss" scoped>
.search-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/backgrounds/search.jpg);
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
    width: 80vw;
  }
  &__btn {
    cursor: pointer;
  }
}
</style>
