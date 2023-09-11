<template>
  <div @click.self="emit('close')" class="order">
    <div class="add__visualization">
      <div class="add__visualization__title">Новый проект</div>
      <div class="add__visualization__enter">
        <span class="add__visualization__enter__title">Название</span>
        <InputComponent
          v-model="name"
          placeholder="Введите название"
          :iconDisable="true"
          padding="1.85vh 3.33vw"
        />
      </div>
      <div class="add__visualization__enter">
        <span class="add__visualization__enter__title">Адрес</span>
        <LocateComponent
          v-model="address"
          placeholder="Введите адрес"
          paddingX="3.33vw"
          paddingY="1.85vh"
          icon="locate"
          :listItem="menuLocate"
          :selectAdress="selectAdress"
        />
      </div>
      <div class="add__visualization__enter">
        <span class="add__visualization__enter__title">Тип проекта</span>
        <DropDownComponent
          v-model="projectType"
          placeholder="Выберите тип проекта"
          paddingX="3.33vw"
          paddingY="1.85vh"
          icon="drop"
          :listItem="menuDropType"
        />
      </div>
      <img
        v-if="isBtnActive"
        @click="handlerCreate"
        class="add__visualization__btn"
        src="@/assets/components/create-new-active.svg"
        alt="create"
      />
      <img
        v-else
        class="add__visualization__btn"
        src="@/assets/components/create-new.svg"
        alt="create"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import projectService from "@/services/projectService";
import InputComponent from "@/components/controls/InputComponent.vue";
import DropDownComponent from "@/components/controls/DropDownComponent.vue";
import LocateComponent from "@/components/controls/LocateComponent.vue";

const emit = defineEmits(["close"]);

const router = useRouter();

const name = ref("");
const address = ref("");
const projectType = ref("");

const isBtnActive = computed(
  () => name.value && address.value && projectType.value
);

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

async function handlerCreate() {
  const project = await projectService.createProject({
    name: name.value,
    address: address.value,
    type: projectType.value,
  });
  router.push({ name: "project-id", params: { idProject: project.id } });
  emit("close");
}

async function selectAdress(value: string) {
  console.log("value: ", value);
  address.value = value;
}
</script>

<style lang="scss" scoped>
.order {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(17.5px);
  .add__visualization {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: stretch;
    width: 41.66vw;
    &__title {
      color: #f9f9f9;
      font-family: JuraSemiBold;
      font-size: 6.1vh;
      line-height: 125%;
      letter-spacing: -1.32px;
      margin-bottom: 4.44vh;
      text-align: center;
    }
    &__enter {
      display: flex;
      flex-direction: column;
      row-gap: 1.11vh;
      &__title {
        color: #fff;
        font-family: JuraMedium;
        font-size: 2.59vh;
        line-height: 100%;
        letter-spacing: -0.56px;
      }
    }
    &__btn {
      height: 5.89vh;
      width: 15.625vw;
      margin: 0 auto;
      margin-top: 5.185vh;
      cursor: pointer;
    }
  }
}
</style>
