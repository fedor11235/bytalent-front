<template>
  <div class="login">
    <Transition name="fade">
      <PopupPersonalData
        v-if="isPersonalData"
        @close="isPersonalData = false"
      />
    </Transition>
    <Transition name="fade">
      <PopupTermsUser v-if="isTermsUser" @close="isTermsUser = false" />
    </Transition>
    <div class="login__card">
      <div class="login__title">Добро пожаловать!</div>
      <div class="login__form">
        <!-- <div class="login__enter"  @click="handlerClickTelegram">
          <img
            class="test"
            src="@/assets/icons/telegram.svg"
            height="32"
            width="32"
            alt="telegram"
          /><span class="login__text">Telegram</span>
        </div> -->
        <!-- <div class="login__enter">
          <img
            src="@/assets/icons/phone.svg"
            height="32"
            width="32"
            alt="phone"
          />
          <span class="login__text">Phone</span>
        </div> -->
        <telegram-login-temp
          mode="callback"
          telegram-login="ByTALENTBot"
          @loaded='telegramLoadedCallbackFunc'
          @callback="yourCallbackFunctionTelegram"
        />
        <div class="login__enter" @click="handlerClickApple">
          <img
            src="@/assets/icons/phone.svg"
            height="32"
            width="32"
            alt="apple"
          />
          <span class="login__text">Apple ID</span>
        </div>
      </div>
      <div class="login__form">
        <div class="login__agreement" @click="isPersonalData = true">
          При начале авторизации пользователь подтверждает, что ознакомился с
          политикой конфиденциальности и дает согласие на обработку персональных
          данных.
        </div>
        <div class="login__agreement" @click="isTermsUser = true">
          При начале авторизации пользователь подтверждает, что ознакомился с
          правилами платформы и согласен с пользовательским соглашением
        </div>
      </div>

      <!-- TODO тестовый вход -->
      <div class="login__title">Тестовый вход</div>
      <input class="test-input" v-model="login" />
      <div @click="handlerLogin" class="test-button">Вход</div>
      <!-- Callback mode -->
      <div  v-show="false" class="test" ref="appleIdBtn">
        <ApleAuth />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import authService from "@/services/authService";
import profileService from "@/services/profileService";
import PopupTermsUser from "@/components/docs/PopupTermsUser.vue";
import PopupPersonalData from "@/components/docs/PopupPersonalData.vue";
import ApleAuth from "@/components/auth/ApleAuth.vue";

import { telegramLoginTemp } from 'vue3-telegram-login'

const router = useRouter();

const login = ref("");

const appleIdBtn = ref();
const telegramIdBtn = ref();

const isPersonalData = ref(false);
const isTermsUser = ref(false);

async function handlerClickApple() {
  const elem = document.getElementById('sign-in-with-apple-button');
  if(elem) {
    elem.click()
  }
}

// async function handlerLogin() {
//   await authService.userLogin({
//     login: login.value,
//   });
// }

function telegramLoadedCallbackFunc () {
  console.log('load')
}

async function yourCallbackFunctionTelegram (user) {
  console.log(user)
  await authService.registrationTelegramUser({
    username: user.username,
    name: user.first_name,
    surname: user.last_name,
  });
}

// {
//     "id": 372099197,
//     "first_name": "Fedor",
//     "last_name": "Avdeev",
//     "username": "fedor11235b",
//     "photo_url": "https://t.me/i/userpic/320/QlxKLHekt0clUKQBN2i09V6Ab8i6BuPaU4m2_RUcTOA.jpg",
//     "auth_date": 1691746033,
//     "hash": "568e84902a01e276c97607844488382658020f3b9fdef08c21e882b7a7b70256"
// }
</script>

<style lang="scss" scoped>
.test {
  pointer-events: none;
}
.login {
  height: 100vh;
  width: 100vw;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  &__card {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    align-items: center;
  }
  &__title {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-family: JuraMedium;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.56px;
  }
  &__text {
    text-align: left;
    display: flex;
    color: rgba(0, 0, 0, 0.85);
    font-family: JuraMedium;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 28px */
    letter-spacing: -0.56px;
  }
  &__enter {
    width: 100%;
    padding: 16px 32px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    align-items: center;
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
  &__agreement {
    width: 310px;
    padding: 0 16px;
    color: rgba(255, 255, 255, 0.65);
    font-family: JuraMedium;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.48px;
    cursor: pointer;
  }
}
.test-input {
  border: 1px solid white;
  font-family: JuraMedium, sans-serif;
  font-size: 18px;
  color: black;
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;
}
.test-button {
  text-align: center;
  border: 1px solid white;
  font-family: JuraMedium, sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.54);
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
