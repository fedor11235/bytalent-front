<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  display: flex;
  cursor: pointer;
  background-color: black;
  width: 100%;
  height: 55px;
  opacity: 0.5;
  align-items: center;
  padding: 0 32px;
  color: white;
  font-size: 21px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  justify-content: center;
}
</style>
