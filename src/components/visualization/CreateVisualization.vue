<template>
  <div class="add__visualization">
    <div class="add__visualization__title">Новая визуализация</div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Название</span>
      <InputComponent
        v-model="name"
        placeholder="Введите название"
        :iconDisable="true"
        padding="10px 32px"
      />
    </div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Адрес</span>
      <InputComponent
        v-model="address"
        placeholder="Введите адрес"
        :iconEnablePerm="true"
        icon="locate"
        padding="10px 32px"
      />
    </div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Тип проекта</span>
      <InputComponent
        v-model="projectType"
        placeholder="Выберите тип проекта"
        :iconEnablePerm="true"
        icon="drop"
        padding="10px 32px"
      />
    </div>
    <img
      @click="emit('create')"
      class="add__visualization__btn"
      src="@/assets/components/create-white.svg"
      height="24"
      width="116"
      alt="create"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputComponent from "@/components/common/InputComponent.vue";

const emit = defineEmits(["create"]);

const name = ref("");
const address = ref("");
const projectType = ref("");
</script>

<style lang="scss" scoped>
.add__visualization {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: stretch;
  width: 400px;
  &__title {
    color: black;
    font-family: JuraMedium;
    font-size: 33px;
    line-height: 125%;
    letter-spacing: -1.32px;
    text-align: center;
    margin-bottom: 32px;
  }
  &__enter {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    &__title {
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 100%;
      letter-spacing: -0.56px;
    }
  }
  &__btn {
    margin-top: 32px;
    margin-left: 100%;
    transform: translateX(-100%);
    cursor: pointer;
  }
}
</style>
