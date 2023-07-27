<template>
  <div class="profile-row">
    <span class="profile-row__name">имя</span>
    <input
      @blur="handlerChange('name')"
      v-show="name || name === ''"
      v-model="name"
      ref="nameInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputName"
      v-if="name === false"
      class="profile-row__img"
    ></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Фамилия</span>
    <input
      @blur="handlerChange('surname')"
      v-show="surname || surname === ''"
      v-model="surname"
      ref="surnameInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputSurname"
      v-if="surname === false"
      class="profile-row__img"
    ></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Организация</span>
    <input
      @blur="handlerChange('organization')"
      v-show="organization || organization === ''"
      v-model="organization"
      ref="organizationInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputOrganization"
      v-if="organization === false"
      class="profile-row__img"
    ></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Должность</span>
    <input
      @blur="handlerChange('position')"
      v-show="position || position === ''"
      v-model="position"
      ref="positionInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputPosition"
      v-if="position === false"
      class="profile-row__img"
    ></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Номер телефона</span>
    <input
      @blur="handlerChange('phone')"
      v-show="phone || phone === ''"
      v-model="phone"
      ref="phoneInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputPhone"
      v-if="phone === false"
      class="profile-row__img"
    ></span>
  </div>

  <div class="profile-row">
    <span class="profile-row__name">Email</span>
    <input
      @blur="handlerChange('email')"
      v-show="email || email === ''"
      v-model="email"
      ref="emailInpyt"
      class="profile-row__value"
    />
    <span
      @click="handlerFocusInputEmail"
      v-if="email === false"
      class="profile-row__img"
    ></span>
  </div>

  <div @click="handlerSaveProfile" class="profile-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import profileService from "@/services/profileService";

const nameInpyt = ref(null);
const surnameInpyt = ref(null);
const organizationInpyt = ref(null);
const positionInpyt = ref(null);
const phoneInpyt = ref(null);
const emailInpyt = ref(null);

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
function handlerChange(val: string) {
  if (val === "name" && name.value === "") {
    name.value = false;
  }
  if (val === "surname" && surname.value === "") {
    surname.value = false;
  }
  if (val === "organization" && organization.value === "") {
    organization.value = false;
  }
  if (val === "position" && position.value === "") {
    position.value = false;
  }
  if (val === "phone" && phone.value === "") {
    phone.value = false;
  }
  if (val === "email" && email.value === "") {
    email.value = false;
  }
}
function handlerFocusInputName() {
  name.value = "";
  nameInpyt.value.focus();
}
function handlerFocusInputSurname() {
  surname.value = "";
  surnameInpyt.value.focus();
}
function handlerFocusInputOrganization() {
  organization.value = "";
  organizationInpyt.value.focus();
}
function handlerFocusInputPosition() {
  position.value = "";
  positionInpyt.value.focus();
}
function handlerFocusInputPhone() {
  phone.value = "";
  phoneInpyt.value.focus();
}
function handlerFocusInputEmail() {
  email.value = "";
  emailInpyt.value.focus();
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
