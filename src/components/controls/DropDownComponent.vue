<template>
  <div ref="drop" class="drop-cmpt">
    <img
      v-if="!isOpen"
      class="drop-cmpt_icon"
      :src="require(`@/assets/icons/${icon}.svg`)"
      height="24"
      width="24"
      alt="icon"
    />
    <div
      @click="handlerOpenDrop"
      class="drop-cmpt__enter"
      :style="styleDropDown"
      :placeholder="placeholder"
    >
      {{ activElem ? activElem : placeholder }}
    </div>
    <div v-if="isOpen" class="drop-cmpt__items">
      <div
        v-for="item in listItem"
        :key="item"
        @click="handlerChooseItem(item)"
        :style="styleItem"
        class="drop-cmpt__item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, computed } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  paddingX: string;
  paddingY: string;
  icon: string;
  listItem: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const activElem = ref("");
const isOpen = ref();
const drop: Ref<HTMLDivElement | null> = ref(null);

const styleDropDown = computed(() => {
  return {
    paddingLeft: props.paddingX,
    paddingRight: props.paddingX,
    paddingTop: props.paddingY,
    paddingBottom: props.paddingY,
  };
});
const styleItem = computed(() => {
  return { marginLeft: props.paddingX, marginRight: props.paddingX };
});

function handlerOpenDrop() {
  isOpen.value = true;
}
function handlerChooseItem(item: string) {
  isOpen.value = false;
  activElem.value = item;
  emit("update:modelValue", activElem.value);
}
</script>

<style lang="scss" scoped>
.drop-cmpt {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-radius: 40px;
  border: 3px solid #fff;
  left: 0;
  background-color: #fff;
  color: #191919;
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  cursor: pointer;
  &_icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__items {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    background-color: white;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding: 12px 0;
    border: 3px solid #191919;
    border-radius: 20px;
    z-index: 1;
  }
  &__item {
    &:hover {
      padding: 0 12px;
      border-radius: 16px;
      box-shadow: -3px -1px 8px 0px rgba(26, 26, 26, 0.25),
        4px 6px 12px 0px rgba(26, 26, 26, 0.25),
        1px 1px 2px 0px rgba(232, 232, 232, 0.5) inset;
    }
  }
}
</style>
