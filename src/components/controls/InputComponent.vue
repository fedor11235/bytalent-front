<template>
  <div class="input-cmpt">
    <img
      v-if="(modelValue && !iconDisable) || iconEnablePerm"
      class="input-cmpt_icon"
      :src="require(`@/assets/icons/${icon ? icon : 'daw'}.svg`)"
      height="24"
      width="24"
      alt="icon"
    />
    <input
      @input="emit('update:modelValue', $event.target.value)"
      class="input-cmpt__enter"
      :style="{ padding: padding }"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder: string;
  padding: string;
  icon?: string;
  iconDisable?: boolean;
  iconEnablePerm?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<style lang="scss" scoped>
.input-cmpt {
  position: relative;
  width: 100%;
  &_icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__enter {
    box-sizing: border-box;
    width: 100%;
    border-radius: 40px;
    border: 3px solid #fff;
    left: 0;
    border-radius: 40px;
    background-color: #fff;
    color: #191919;
    font-family: JuraMedium;
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
    cursor: pointer;
    &::placeholder {
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 125%;
      letter-spacing: -0.76px;
    }
    &:focus-visible {
      border: 3px solid #191919;
      outline: 0;
    }
  }
}
</style>
