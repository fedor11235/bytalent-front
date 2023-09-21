<template>
  <div :class="['login-form', { 'test-login-card': absolutePos }]">
    <div class="login-form__enter" @click="handlerClickPhone">
      <img src="@/assets/icons/phone.svg" height="24" width="24" alt="apple" />
      <span class="login__text">Войти по номеру</span>
    </div>
    <telegram-login-temp
      class="crutch-telegram"
      mode="callback"
      telegram-login="ByTALENTBot"
      @loaded="telegramLoadedCallbackFunc"
      @callback="yourCallbackFunctionTelegram"
    />
    <TelegramAuth :finishLoad="telegramWgtFinishLoad" @enter="onTelegramAuth" />
    <div class="login-form__enter" @click="handlerClickApple">
      <img src="@/assets/icons/apple.svg" height="24" width="24" alt="apple" />
      <span class="login-form__text">Войти через Apple</span>
    </div>
    <div v-show="false" class="login-apple" ref="appleIdBtn">
      <ApleAuth />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import authService from "@/services/authService";
import ApleAuth from "@/components/auth/ApleAuth.vue";
import TelegramAuth from "@/components/auth/TelegramAuthTest.vue";
import { useRootStore } from "@/store";

import { telegramLoginTemp } from "vue3-telegram-login";

const props = defineProps<{
  nextPage?: string;
  absolutePos?: boolean;
}>();

const rootStore = useRootStore();
const router = useRouter();

const appleIdBtn = ref();
const telegramWgtFinishLoad = ref(false);

async function onTelegramAuth(user: any) {
  console.log("data telegram! ", user);
  await authService.registrationTelegramUser(
    {
      username: user.username,
      name: user.first_name,
      surname: user.last_name,
    },
    callBackRedirect
  );
}

async function callBackRedirect() {
  if (props.nextPage) {
    window.location.href = props.nextPage;
  } else {
    rootStore.popupLogin = false;
    await router.push({ name: "project-main" });
  }
}

async function handlerClickPhone() {
  alert("В разработке");
}

async function handlerClickApple() {
  const elem = document.getElementById("sign-in-with-apple-button");
  if (elem) {
    elem.click();
  }
}

function telegramLoadedCallbackFunc() {
  telegramWgtFinishLoad.value = true;
}

async function yourCallbackFunctionTelegram(user: any) {
  console.log("data telegram! ", user);
  await authService.registrationTelegramUser(
    {
      username: user.username,
      name: user.first_name,
      surname: user.last_name,
    },
    callBackRedirect
  );
}
</script>

<style lang="scss" scoped>
.test-login-card {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.crutch-telegram {
  display: none;
}
.login-form {
  min-width: 300px;
  width: 15.625vw;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  align-items: center;
  transition: opacity 0.6s ease;
  // opacity: 1;
  &__enter {
    width: 100%;
    padding: 16px 48px;
    border-radius: 28px;
    background-color: white;
    display: flex;
    align-items: center;
    column-gap: 16px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
        4px 6px 12px 0px rgba(232, 232, 232, 0.25),
        2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
    }
    &:active {
      box-shadow: 6px 9px 12px 0px rgba(0, 0, 0, 0.35) inset,
        -8px -12px 12px 0px rgba(0, 0, 0, 0.35) inset;
    }
  }
  &__text {
    color: #191919;
    font-family: SFProDisplaySemibold;
    font-size: 1.759vh;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.38px;
  }
}
.login-apple {
  pointer-events: none;
}
</style>
