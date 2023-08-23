<template>
  <div ref="buttonTelegram" class="telegram-auth">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
import authService from "@/services/authService";

const buttonTelegram = ref();

function onTelegramAuth(user: any) {
  alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
}

onMounted(() => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute(
    "src",
    "https://telegram.org/js/telegram-widget.js?22"
  );
  script.setAttribute(
    "data-telegram-login",
    "ByTALENTBot"
  );
  script.setAttribute(
    "data-telegram-login",
    "ByTALENTBot"
  );
  script.setAttribute(
    "data-size",
    "large"
  );
  script.setAttribute(
    "data-userpic",
    "false"
  );
  script.setAttribute(
    "data-onauth",
    "onTelegramAuth(user)"
  );
  script.setAttribute(
    "data-request-access",
    "write"
  );

  buttonTelegram.value.appendChild(script);
});
</script>

<style lang="scss" scoped>
// .aple-auth {
// }
</style>
