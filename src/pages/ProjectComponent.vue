<template>
  <WelcomeLayout
    bg="projects.jpg"
    title="Разместите свой проект"
    bgrDropColor="rgba(0, 0, 0, 0.50)"
    bgrDropBlur="blur(7.5px)"
    description="Откройте свои проекты UE5 для клиентов со всего мира"
    isLine
    imgBtn="upload-w"
    :btnClick="HandkerClickUpload"
    @finishLoad="emit('finish-load')"
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
  <FAQControl />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRootStore } from "@/store";

const emit = defineEmits(["finish-load"]);

const rootStore = useRootStore();

rootStore.noHover = false;
rootStore.hiddenHeader = false;

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
