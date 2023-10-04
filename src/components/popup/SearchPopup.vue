<template>
  <div class="search-popup" :class="{'search-popup_fill': rootStore.searchPage}">
    <SearchComponent
      bg="visualization-first.jpg"
      content="Найти"
      subcontent="Проекты, модели, уровни"
      :load="true"
    />
  </div>
</template>

<script setup lang="ts">
import SearchComponent from "@/components/common/SearchComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore()
</script>

<style lang="scss" scoped>
.search-popup {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(42, 42, 42, 0.85);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  transition: all .6s;
  &_fill {
    background-color: #2A2A2A;
  }
}
</style>
