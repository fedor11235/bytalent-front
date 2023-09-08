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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import authService from "@/services/authService";
import PopupTermsUser from "@/components/docs/PopupTermsUser.vue";
import PopupPersonalData from "@/components/docs/PopupPersonalData.vue";
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

rootStore.hiddenHeader = true;

function callBackRedirect() {
  if (props.nextPage) {
    window.location.href = props.nextPage;
  } else {
    router.push({ name: "project-main" });
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

// #telegram-login-ByTALENTBot
// onMounted(() => {
//   const iFrame = document.getElementById('telegram-login-ByTALENTBot')
//   if(iFrame?.style) {
//     iFrame.style.width = '100%'
//   }
//   console.log('iFrame', iFrame)
// })
</script>

<style lang="scss" scoped>
.crutch-telegram {
  display: none;
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
  // &__text {
  //   color: #191919;
  //   font-family: SFProDisplaySemibold;
  //   font-size: 1.759vh;
  //   font-style: normal;
  //   font-weight: 600;
  //   line-height: 100%;
  //   letter-spacing: -0.38px;
  // }
  // &__enter {
  //   width: 100%;
  //   padding: 16px 48px;
  //   border-radius: 28px;
  //   background-color: white;
  //   display: flex;
  //   align-items: center;
  //   column-gap: 16px;
  //   box-sizing: border-box;
  //   cursor: pointer;
  //   &:hover {
  //     box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
  //       4px 6px 12px 0px rgba(232, 232, 232, 0.25),
  //       2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  //   }
  //   &:active {
  //     box-shadow: 6px 9px 12px 0px rgba(0, 0, 0, 0.35) inset,
  //       -8px -12px 12px 0px rgba(0, 0, 0, 0.35) inset;
  //   }
  // }
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
  // &__apple {
  //   pointer-events: none;
  // }
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
