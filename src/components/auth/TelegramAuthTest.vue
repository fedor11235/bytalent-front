<template>
  <div ref="buttonTelegram" @click="test" class="telegram-auth">
    <LoaderComponent size="19px" v-if="!finishLoad" />
    <img
      v-if="finishLoad"
      src="@/assets/icons/telegram-w.svg"
      height="24"
      width="24"
      alt="telegram"
    />
    <div v-if="finishLoad" class="telegram-auth__text">
      Войти через Telegram
    </div>
  </div>
</template>

<script setup lang="ts">
import LoaderComponent from "@/components/common/LoaderComponent.vue";
import { ref } from "vue";
import "./wgtTelegram.js";

const emit = defineEmits(["enter"]);

const props = defineProps<{
  finishLoad: boolean;
}>();

const buttonTelegram = ref();

function test() {
  if (!props.finishLoad) return;
  // eslint-disable-next-line
  window.Telegram.Login.auth(
    { bot_id: 6574863532, request_access: true },
    (data: any) => {
      if (data) {
        emit("enter", data);
      }
    }
  );
}
</script>

<style lang="scss" scoped>
.telegram-auth {
  width: 100%;
  padding: 1.48vh 2.5vw;
  align-items: center;
  // border-radius: 28px;
  background-color: #6aa7e5;
  display: flex;
  column-gap: 0.8vw;
  box-sizing: border-box;
  justify-content: space-around;
  cursor: pointer;
  justify-content: center;
  &:hover {
    box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
      4px 6px 12px 0px rgba(232, 232, 232, 0.25),
      2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  }
  &__text {
    color: white;
    font-family: SFProDisplaySemibold;
    font-size: 1.759vh;
    line-height: 100%;
    letter-spacing: -0.38px;
    width: 145px;
    text-wrap: nowrap;
  }
}
</style>
