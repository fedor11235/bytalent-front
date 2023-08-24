<template>
  <div
    ref="buttonTelegram"
    @click="test"
    class="telegram-auth"
    :style="{
      justifyContent: finishLoad ? 'flex-start' : '',
    }"
  >
    <div v-if="!finishLoad" class="telegram-auth__loader"></div>
    <img
      v-if="finishLoad"
      src="@/assets/icons/telegram-w.svg"
      height="24"
      width="24"
      alt="apple"
    />
    <div v-if="finishLoad" class="telegram-auth__text">
      Войти через Telegram
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "./wgtTelegram.js";

const emit = defineEmits(["enter"]);

const props = defineProps<{
  finishLoad: boolean;
}>();

const buttonTelegram = ref();

function test() {
  if (!props.finishLoad) return;
  // eslint-disable-next-line
  console.log(window.Telegram)
  // eslint-disable-next-line
  window.Telegram.Login.auth(
    { bot_id: 6574863532, request_access: true },
    (data: any) => {
      if (data) {
        emit("enter", data);
      }
    }
  );
}
</script>

<style lang="scss" scoped>
.telegram-auth {
  width: 100%;
  padding: 16px 48px;
  border-radius: 28px;
  background-color: #6aa7e5;
  display: flex;
  align-items: center;
  column-gap: 16px;
  box-sizing: border-box;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
      4px 6px 12px 0px rgba(232, 232, 232, 0.25),
      2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  }
  &__text {
    color: white;
    font-family: SFProDisplaySemibold;
    font-size: 1.759vh;
    line-height: 100%;
    letter-spacing: -0.38px;
  }
  &__loader {
    display: inline-block;
    width: 19px;
    height: 19px;
  }
  &__loader:after {
    content: " ";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 3px solid white;
    border-color: white transparent white transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
