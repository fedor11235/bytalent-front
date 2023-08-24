<template>
  <!-- <div class="tgme_widget_login medium nouserpic" id="widget_login"><button class="btn tgme_widget_login_button"
      onclick="return TWidgetLogin.auth();"><i class="tgme_widget_login_button_icon"></i>Log in with Telegram</button>
  </div> -->
  <div ref="buttonTelegram" class="telegram-auth"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";

const props = defineProps<{
  onTelegramAuth: (user: any) => void;
}>();

const buttonTelegram = ref();

onMounted(() => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", "https://telegram.org/js/telegram-widget.js?22");
  script.setAttribute("data-telegram-login", "ByTALENTBot");
  script.setAttribute("data-size", "large");
  // script.setAttribute(
  //   "data-userpic",
  //   "false"
  // );
  script.setAttribute("data-onauth", "window.onTelegramAuth(user)");
  script.setAttribute("data-width", "100%");
  script.setAttribute("data-request-access", "write");

  buttonTelegram.value.appendChild(script);
  (window as any).onTelegramAuth = props.onTelegramAuth;
});
</script>

<style lang="scss" scoped>
.telegram-auth {
  width: 100%;

  &:deep(.tgme_widget_login_user_photo) {
    display: none;
  }

  &:deep(body) {
    width: 100%;
  }

  &:deep(.tgme_widget_login_button) {
    width: 100%;
    padding: 16px 48px;
    border-radius: 28px;
    display: flex;
    column-gap: 16px;
  }
}
</style>
