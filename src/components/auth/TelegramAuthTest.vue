<template>
  <!-- <div class="tgme_widget_login medium nouserpic" id="widget_login"><button class="btn tgme_widget_login_button"
      onclick="return TWidgetLogin.auth();"><i class="tgme_widget_login_button_icon"></i>Log in with Telegram</button>
  </div> -->
  <div ref="buttonTelegram" @click="test" class="telegram-auth">
    <div v-if="isLoadTelegram" class="telegram-auth__loader"></div>
    <div v-else>Войти Телеграм</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import './test.js';

const props = defineProps<{
  onTelegramAuth: (user: any) => void;
}>();

const buttonTelegram = ref();
const isLoadTelegram = ref(false);

function test() {
  if(isLoadTelegram.value) return
  // eslint-disable-next-line
  console.log(window.Telegram)
  // eslint-disable-next-line
  window.Telegram.Login.auth(
    { bot_id: 6574863532, request_access: true },
    (data: any) => {
      if (!data) {
        console.log('ошибка авторизации')
      }
      console.log('авторизированны')
      alert(data)
      console.log(data)
    }
  );
}

function postLoadFunction(e: any) {
  // isLoadTelegram.value = false
  // eslint-disable-next-line
  window.Telegram.Login.init('widget_login', 6574863532, {"origin":"https:\/\/core.telegram.org"}, false, "ru", (data: any) => {
    console.log('data init: ', data)
  });
}

onMounted(() => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute(
    "src",
    "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
  );
  script.addEventListener("load", postLoadFunction);

  buttonTelegram.value.appendChild(script);
});
</script>

<style lang="scss" scoped>
.telegram-auth {
  width: 100%;
  padding: 16px 48px;
  border-radius: 28px;
  background-color: white;
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
    border: 3px solid black;
    border-color: black transparent black transparent;
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
