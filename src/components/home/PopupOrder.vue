<template>
  <div class="back-screen" @click.self="homeStore.popupOrder = false">
    <div class="popup">
      <div class="popup__row popup__row-border">
        <div>Название</div>
        <input v-model="name" placeholder="Введите название" class="popup__fill"/>
      </div>
      <div class="popup__row popup__row-border">
        <div>Адрес</div>
        <input v-model="address" placeholder="Введите адрес"  class="popup__fill"/>
      </div>
      <div class="popup__row">
        <div>Тип проекта</div>
        <select class="popup__fill" v-model="type">
          <option v-for="project of typesProgect" :key="project.value" :value="project.value">{{ project.name }}</option>
        </select>
      </div>
      <div class="popup__create">Создать</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHomeStore } from  "@/store"

const typesProgect = [
  { name: 'Выберите тип проекта', value: 0 },
  { name: 'Жилой комплекс', value: 1 },
  { name: 'Коттеджный посёлок', value: 2 },
  { name: 'Частный дом', value: 3 },
  { name: 'Музей / Галерея', value: 4 },
  { name: 'Прочее', value: 5 }
]

const name = ref('')
const address = ref('')
const type = ref(typesProgect[0].value)

const homeStore = useHomeStore()
</script>

<style lang="scss" scoped>
.back-screen {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  .popup {
    width: 55%;
    height: 45%;
    background-color: #141414;
    border: 1px solid rgba(255, 255, 255, .14);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__row {
      width: 80%;
      height: 20%;
      align-items: center;
      margin-top: 2%;
      display: flex;
      div {
        width: 25%;
        text-align: left;
        color: #333;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 20px;
      }
      select {
        cursor: pointer;
      }
      .popup__fill {
        width: 75%;
        height: 100%;
        color: #e2e2e2;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid rgba(0, 0, 0, 0);
        font-family: Jura, sans-serif;
        font-size: 2.7vh;
        &:focus {
          outline: 0;
        }
      }
      &-border {
        border-bottom: 1px solid rgba(255, 255, 255, .26);
      }
    }
    &__create {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid rgba(255, 255, 255, .28);
      border-radius: 15px;
      width: 23%;
      height: 11%;
      font-family: Jura, sans-serif;
      font-size: 2vh;
      font-weight: 600;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
