<template>
  <WelcomeLayout
    bg="projects"
    title="Приложение «by Talent»"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    bgrDropBlur="blur(7.5px)"
    description="Персональное приложение для доступа в проекты Unreal Engine 5"
    isLine
    imgBtn="upload-w"
    :btnClick="HandkerClickUpload"
  >
    <template v-slot:content-bottom>
      <div class="requirements">
        Технические требования<br /><br />
        • Формат уровня Unreal Engine 5<br />
        • Максимальный размер уровня - 3 Гб<br />
        • Количество актеров в сцене &lt; 1000<br />
        • Максимальный пул текстур - 3Гб
      </div>
    </template>
  </WelcomeLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";

const router = useRouter();

function HandkerClickUpload() {
  router.push({
    name: "login-redirect",
    params: { nextPage: "/project" },
  });
}
</script>

<style lang="scss" scoped>
.requirements {
  border-radius: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(0, 0, 0, 0.55);
  height: 100%;
  width: 60%;
  padding: 0.74vh 1.6vw;
  color: #f9f9f9;
  font-family: JuraMedium;
  font-size: 1.85vh;
  line-height: 140%;
  letter-spacing: -0.4px;
}
</style>
