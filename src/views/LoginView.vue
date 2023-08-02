<template>
  <div class="login">
    <Transition name="fade">
      <PopupFAQ v-if="isFAQ" @close="isFAQ = false" />
    </Transition>
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
        <div class="login__enter">
          <img
            src="@/assets/icons/telegram.svg"
            height="24"
            width="24"
            alt="telegram"
          /><span class="login__text">Telegram</span>
        </div>
        <div class="login__enter">
          <img
            src="@/assets/icons/phone.svg"
            height="24"
            width="24"
            alt="telegram"
          /><span class="login__text">Phone</span>
        </div>
        <div class="login__enter">
          <img
            src="@/assets/icons/apple.svg"
            height="24"
            width="24"
            alt="telegram"
          /><span class="login__text">Apple ID</span>
        </div>
      </div>
      <div class="login__form">
        <div class="login__checkbox">
          <input
            class="login__checkbox__input"
            type="checkbox"
            height="12"
            width="12"
          />
          <div class="login__checkbox__text" @click="isPersonalData = true">
            При начале авторизации пользователь подтверждает, что ознакомился с
            политикой конфиденциальности и дает согласие на обработку
            персональных данных.
          </div>
        </div>
        <div class="login__checkbox">
          <input
            class="login__checkbox__input"
            type="checkbox"
            height="12"
            width="12"
          />
          <div class="login__checkbox__text" @click="isTermsUser = true">
            При начале авторизации пользователь подтверждает, что ознакомился с
            правилами платформы и согласен с пользовательским соглашением
          </div>
        </div>
      </div>

      <!-- TODO тестовый вход -->
      <!-- <div class="login__title">Тестовый вход</div>
      <input class="test-input" v-model="login" />
      <div @click="handlerLogin" class="test-button">Вход</div> -->
    </div>
    <div @click="isFAQ = true" class="question">?</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import authService from "@/services/authService";
import PopupTermsUser from "@/components/login/PopupTermsUser.vue";
import PopupPersonalData from "@/components/login/PopupPersonalData.vue";
import PopupFAQ from "@/components/login/PopupFAQ.vue";

const router = useRouter();

const login = ref("");

const isFAQ = ref(false);
const isPersonalData = ref(false);
const isTermsUser = ref(false);

async function handlerLogin() {
  await authService.userLogin({
    login: login.value,
  });
  router.push({ name: "visualization-first" });
}
</script>

<style lang="scss" scoped>
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
    font-family: JuraMedium, sans-serif;
    font-size: 19px;
    color: white;
    text-align: center;
  }
  &__text {
    text-align: left;
    display: flex;
  }
  &__enter {
    font-family: JuraMedium, sans-serif;
    width: 250px;
    height: 56px;
    padding: 10px 38px;
    border-radius: 20px;
    background: rgba(62, 62, 62, 0.25);

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 27px;
    align-items: center;

    color: rgba(255, 255, 255, 0.25);
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
    box-sizing: border-box;
    cursor: pointer;
  }
  &__checkbox {
    font-family: JuraMedium, sans-serif;
    width: 400px;
    height: 56px;
    padding: 10px 17px;

    display: flex;
    column-gap: 6px;
    align-items: center;

    box-sizing: border-box;
    cursor: pointer;
    &__input {
      cursor: pointer;
    }
    &__text {
      color: #fff;
      /* Jura/Body */
      font-family: JuraMedium;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 12px */
      letter-spacing: -0.48px;
    }
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
.question {
  position: fixed;
  bottom: 42px;
  right: 42px;
  border-radius: 50%;
  background: rgba(62, 62, 62, 0.35);
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
  /* Jura/38 Header 4 */
  font-family: JuraMedium;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 47.5px */
  letter-spacing: -0.76px;
  cursor: pointer;
}
</style>
