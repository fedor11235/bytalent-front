<template>

  <div class="profile-row">
    <span class="profile-row__name">имя</span>
    <input v-if="name" v-model="name" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Фамилия</span>
    <input v-if="surname" v-model="surname" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Организация</span>
    <input v-if="organization" v-model="organization" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Должность</span>
    <input v-if="position" v-model="position" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Номер телефона</span>
    <input v-if="phone" v-model="phone" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Email</span>
    <input v-if="email" v-model="email" class="profile-row__value" />
    <span v-else class="profile-row__img"></span>
  </div>

  <div class="profile-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import profileService from "@/services/profileService";

const name = ref('');
const surname = ref('');
const organization = ref('');
const position = ref('');
const phone = ref('');
const email = ref('');

const isChange = ref('');

profileService.getProfile().then((res) => {
  name.value = res.name
  surname.value = res.surname
  organization.value = res.organization
  position.value = res.position
  phone.value = res.phone
  email.value = res.email
});
</script>

<style lang="scss" scoped>
.profile {
  &-row {
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.85);
    width: 87%;
    height: 8vh;
    color: #fff;
    cursor: pointer;
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
