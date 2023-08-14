<template>
  <InputControl name="Имя" v-model="name" />
  <InputControl name="Фамилия" v-model="surname" />
  <InputControl name="Организация" v-model="organization" />
  <InputControl name="Должность" v-model="position" />
  <InputControl name="Номер телефона" v-model="phone" />
  <InputControl name="email" v-model="email" />

  <div @click="handlerSaveProfile" class="profile-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputControl from "@/components/controls/InputControl";
import profileService from "@/services/profileService";

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
.profile-save {
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
</style>
