<template>
  <div class="input-setting">
    <span class="input-setting__name">{{ name }}</span>
    <input
      @blur="handlerChange"
      v-show="modelValue || modelValue === ''"
      :value="modelValue"
      @input="emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      ref="valueInpyt"
      class="input-setting__value"
    />
    <span
      @click="handlerFocusInputValue"
      v-if="modelValue === false"
      class="input-setting__img"
    ></span>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, toRef } from "vue";

const props = defineProps<{
  name: string;
  modelValue: string | boolean;
}>();

const modelValue = toRef(props, "modelValue");

const emit = defineEmits<{
  (e: "update:modelValue", value: string | boolean): void;
}>();

const valueInpyt: Ref<HTMLInputElement | null> = ref(null);

function handlerChange() {
  if (modelValue.value === "") {
    emit('update:modelValue', false)
  }
}
function handlerFocusInputValue() {
  emit('update:modelValue', "")
  if (valueInpyt.value) {
    valueInpyt.value.focus();
  }
}
</script>

<style lang="scss" scoped>
.input-setting {
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.85);
  width: 87%;
  height: 8vh;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-family: JuraMedium, sans-serif;
  font-size: 1.8vh;
  font-weight: 300;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: auto;
  &__name {
    font-size: 1.7vh;
    line-height: 2vh;
    color: rgba(255, 255, 255, 0.56);
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.93);
  }
  &__value {
    color: #fff;
    font-family: JuraMedium, sans-serif;
    font-size: 1.8vh;
    background-color: transparent;
    outline: none;
    border: none;
  }
  &__img {
    background-image: url(@/assets/lvel/pen.png);
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    width: 6%;
    height: 20%;
    cursor: pointer;
  }
}
</style>
