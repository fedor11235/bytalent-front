<template>
  <InputControl name="Имя" v-model="name"/>

  <InputControl name="Фамилия" v-model="surname"/>

  <InputControl name="Организация" v-model="organization"/>

  <InputControl name="Должность" v-model="position"/>

  <InputControl name="Номер телефона" v-model="phone"/>

  <InputControl name="email" v-model="email"/>

  <div @click="handlerSaveProfile" class="profile-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import profileService from "@/services/profileService";
import InputControl from "@/components/controls/InputControl";

const name = ref(false);
const surname = ref(false);
const organization = ref(false);
const position = ref(false);
const phone = ref(false);
const email = ref(false);

const isChange = ref(false);

profileService.getProfile().then((res) => {
  name.value = res.name ? res.name : false;
  surname.value = res.surname ? res.surname : false;
  organization.value = res.organization ? res.organization : false;
  position.value = res.position ? res.position : false;
  phone.value = res.phone ? res.phone : false;
  email.value = res.email ? res.email : false;
});

function handlerSaveProfile(val: string) {
  profileService.setProfile({
    name: name.value,
    surname: surname.value,
    organization: organization.value,
    position: position.value,
    phone: phone.value,
    email: email.value,
  });
}
</script>

<style lang="scss" scoped>
.profile {
  &-row {
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
      &:hover {
      }
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
  &-save {
    padding: 8px 12px;
    font-family: JuraMedium, sans-serif;
    font-size: 1.8vh;
    color: rgba(255, 255, 255, 0.56);
    margin-right: 5%;
    margin-top: 18px;
    float: right;
    width: 30%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.56);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      color: white;
      border-color: white;
    }
  }
}
</style>
