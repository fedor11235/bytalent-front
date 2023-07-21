<template>
  <div class="login">
    <div class="login__form">
      <div class="login__title">Добро пожаловать!</div>
      <div class="login__enter">Вход через Telegram</div>
      <div class="login__enter">Вход по номеру</div>
      <div class="login__enter">Apple авторизация</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  &__form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
  &__title {
    font-family: JuraMedium, sans-serif;
    font-size: 32px;
    color: white;
  }
  &__enter {
    border: 1px solid white;
    font-family: JuraMedium, sans-serif;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.54);
    border-radius: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }
}
</style>
