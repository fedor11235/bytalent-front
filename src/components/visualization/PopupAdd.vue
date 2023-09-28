<template>
  <div @click.self="emit('close')" class="order">
    <div class="add__visualization">
      <div class="add__visualization__title">Новый проект</div>
      <div class="add__visualization__enter">
        <span class="add__visualization__enter__title">Название</span>
        <InputComponent
          v-model="name"
          placeholder="Введите название"
          padding="1.48vh 1.6vw"
          iconEnablePerm
          icon="pen-black"
        />
      </div>
      <div class="add__visualization__enter">
        <span class="add__visualization__enter__title">Адрес</span>
        <LocateComponent
          v-model="address"
          placeholder="Введите адрес"
          paddingX="1.6vw"
          paddingY="1.48vh"
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
          paddingX="1.6vw"
          paddingY="1.48vh"
          icon="drop"
          :listItem="menuDropType"
        />
      </div>
      <div @click="handlerCreate" class="add__visualization__btn">
        Создать проект
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
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

const btnState = ref("disabled");

function choiceBtn(name: string) {
  if (btnState.value === "default") {
    return `${name}.svg`;
  }
  if (btnState.value === "disabled") {
    return `${name}-disabled.svg`;
  }
  if (btnState.value === "hover") {
    return `${name}-hover.svg`;
  }
  if (btnState.value === "pressed") {
    return `${name}-pressed.svg`;
  }
}

function handlerOverBtn() {
  if (isBtnActive.value) {
    btnState.value = "hover";
  }
}

function handlerMousedown() {
  if (isBtnActive.value) {
    btnState.value = "pressed";
  }
}

function handlerLeaveOverBtn() {
  if (isBtnActive.value) {
    btnState.value = "default";
  }
}

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
  if (name.value.length < 8) {
    alert("В названии проекта должно быть минимум 8 символов");
    return;
  }
  const nameUpperWord = name.value[0].toUpperCase() + name.value.slice(1);
  const project = await projectService.createProject({
    name: nameUpperWord,
    address: address.value,
    type: projectType.value,
  });
  await router.push({ name: "new-lavel", params: { idProject: project.id } });
  emit("close");
}

async function selectAdress(value: string) {
  address.value = value;
}

watch(
  () => isBtnActive.value,
  (newVal) => {
    if (newVal) {
      btnState.value = "default";
    } else {
      btnState.value = "disabled";
    }
  }
);
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
      display: flex;
      align-items: center;
      justify-content: center;

      height: 5.925vh;
      width: 100%;
      margin: 0 auto;
      margin-top: 5.185vh;
      cursor: pointer;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(0, 0, 0, 0.35);

      color: #f9f9f9;
      font-family: JuraSemiBold;
      font-size: 2.59vh;
      line-height: 100%;
      letter-spacing: -0.56px;
    }
  }
}
</style>
