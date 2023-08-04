<template>
  <div class="input-cmpt">
    <img
      v-if="modelValue"
      class="input-cmpt_icon"
      src="@/assets/icons/daw.svg"
      height="24"
      width="24"
      alt="daw"
    />
    <input
      @input="emit('update:modelValue', $event.target.value)"
      class="input-cmpt__enter"
      placeholder="Введите свой поисковой запрос"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<style lang="scss" scoped>
.input-cmpt {
  position: relative;
  width: 80%;
  &_icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__enter {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 32px;
    border-radius: 40px;
    border: 1px solid #191919;
    left: 0;
    padding: 20px 32px;
    border-radius: 40px;
    border: 1px solid #191919;
    background-color: #fff;
    color: #191919;
    font-family: JuraMedium;
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
    border: none;
    cursor: pointer;
    &::placeholder {
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 125%;
      letter-spacing: -0.76px;
    }
    &:focus-visible {
      outline: none;
    }
  }
}
</style>
