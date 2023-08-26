<template>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Баланс</div>
    <div class="settings-view__card_text">0 рублей</div>
  </div>
  <div class="settings-view__card_fill-btn">Пополнить</div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Счета к оплате</div>
    <div class="settings-view__card_text">
      Счет №1342445 на оплату первого этапа визуализации от 01.09.2023
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">История операций</div>
    <div class="settings-view__card_text">
      Оплата счета №1342445 на оплату первого этапа визуализации от 01.09.2023
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isProfileEdit = ref(false);
</script>

<style lang="scss" scoped>
.settings-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
  &__card {
    height: 100%;
    border-radius: 24px;
    border-top: 2px solid rgba(255, 255, 255, 0.25);
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4.44vh 1.6vw;
    box-sizing: border-box;
    &_title {
      color: rgba(255, 255, 255, 0.55);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 120%;
      letter-spacing: -0.4px;
    }
    &_fill-btn {
      display: flex;
      width: 8.33vw;
      padding: 1.38vh 1.6vw;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(0, 0, 0, 0.1);
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      cursor: pointer;
      margin-top: 2.2vh;
      box-sizing: border-box;
      margin-left: calc(100% - 8.33vw);
    }
    &_edit {
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1.11vh 1.25vw;
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &_cntnr {
        margin-top: 7.77vh;
        display: flex;
        justify-content: center;
      }
      &_icon {
        width: 1.25vw;
        height: 1.25vw;
        margin-right: 0.8vw;
      }
    }
    &_delimiter {
      height: 1px;
      margin: 2.96vh 0;
      background-color: rgba(255, 255, 255, 0.25);
    }
    &_text {
      color: rgba(255, 255, 255, 0.85);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 120%;
      letter-spacing: -0.4px;
    }
    &_grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>
