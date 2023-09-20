<template>
  <div @click.self="rootStore.popupLogin = false" class="login">
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
      <LoginForm />
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

      <!-- <div v-show="false" class="login__apple" ref="appleIdBtn">
        <ApleAuth />
      </div> -->
      <!-- TODO тестовый вход -->
      <div class="login__test" v-if="isDevelopment">
        <div class="login__title">Тестовый вход</div>
        <input class="test-input" v-model="login" />
        <div @click="handlerLogin" class="test-button">Вход</div>
      </div>
      <FAQControl />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import authService from "@/services/authService";
import PopupTermsUser from "@/components/docs/PopupTermsUser.vue";
import PopupPersonalData from "@/components/docs/PopupPersonalData.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

import { useRootStore } from "@/store";

const props = defineProps<{
  nextPage?: string;
}>();

const router = useRouter();
const rootStore = useRootStore();

const login = ref("");
const isDevelopment = process.env.NODE_ENV === "development";

const isPersonalData = ref(false);
const isTermsUser = ref(false);

// rootStore.hiddenHeader = true;
// rootStore.loadApiTest = false;
// rootStore.loadBgrTest = false;

async function callBackRedirect() {
  if (props.nextPage) {
    window.location.href = props.nextPage;
  } else {
    rootStore.popupLogin = false;
    await router.push({ name: "project-main" });
  }
}

async function handlerLogin() {
  await authService.userLogin(
    {
      login: login.value,
    },
    callBackRedirect
  );
}

onMounted(() => {
  rootStore.loadApiTest = true;
  rootStore.loadBgrTest = true;
});
</script>

<style lang="scss" scoped>
.crutch-telegram {
  display: none;
}
.login {
  position: fixed;
  z-index: 4;
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
    min-width: 300px;
    width: 15.625vw;
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    align-items: center;
  }
  &__title {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-family: JuraMedium;
    font-size: 2.592vh;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.56px;
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
  &__test {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 12px;
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
