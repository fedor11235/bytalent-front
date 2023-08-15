<template>
  <div ref="apleAuth" class="aple-auth">
    <button ref="buttonAple" id="sign-in-with-apple-button">
      Sign In with Apple
    </button>

    <!-- <script type="text/javascript">
    </script> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
import authService from "@/services/authService";

const apleAuth = ref();
const buttonAple = ref();

function postLoadFunction() {
  // eslint-disable-next-line
  AppleID.auth.init({
    clientId: "ru.bytalent.client",
    scope: "name email",
    redirectURI: "https://bytalent.ru/",
    usePopup: true,
  });
  buttonAple.value.addEventListener("click", async () => {
    try {
      // eslint-disable-next-line
      const response = await window.AppleID.auth.signIn();
      console.log("data apple! ", response);
      await authService.userLogin({
        login: "@fedor",
      });
    } catch (e) {
      console.error(e);
    }
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

  apleAuth.value.appendChild(script);
});
</script>

<style lang="scss" scoped>
// .aple-auth {
// }
</style>
