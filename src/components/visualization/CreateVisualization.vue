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
      <LocateComponent
        v-model="projectType"
        placeholder="Введите адрес"
        paddingX="32px"
        paddingY="10px"
        icon="locate"
        :listItem="menuLocate"
      />
    </div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Тип проекта</span>
      <DropDownComponent
        v-model="projectType"
        placeholder="Выберите тип проекта"
        paddingX="32px"
        paddingY="10px"
        icon="drop"
        :listItem="menuDropType"
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
import InputComponent from "@/components/controls/InputComponent.vue";
import DropDownComponent from "@/components/controls/DropDownComponent.vue";
import LocateComponent from "@/components/controls/LocateComponent.vue";

const emit = defineEmits(["create"]);

const name = ref("");
const address = ref("");
const projectType = ref("");

const menuDropType = [
  "Частный дом",
  "Квартира / апартаменты",
  "Жилой комплекс",
  "Коттеджный поселок",
  "Музей / Галерея",
  "Прочее",
];
const menuLocate = [
  "Аляска",
  "Астрахань",
  "Абхазия",
  "Большово",
  "Биван",
  "Бостон",
  "Вавилон",
  "Варкута",
  "Византия",
  "Валивуд",
  "Ванила",
];
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
