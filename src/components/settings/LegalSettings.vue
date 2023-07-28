<template>
  <div class="profile-row">
    <span class="profile-row__name">имя</span>
    <input
      @blur="handlerChange('companyName')"
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import legalService from "@/services/legalService";

const companyName = ref([]);
const organizationalForms = ref([]);
const oGRN = ref([]);
const iNN = ref([]);
const bankBIC = ref([]);
const checkingAccount = ref([]);

legalService.getlegal().then((res) => {
  companyName.value = res.companyName;
  organizationalForms.value = res.organizationalForms;
  oGRN.value = res.oGRN;
  iNN.value = res.iNN;
  bankBIC.value = res.bankBIC;
  checkingAccount.value = res.checkingAccount;
});

function handlerChange(val: string) {
  if (val === "companyName" && companyName.value === "") {
    companyName.value = false;
  }
  if (val === "organizationalForms" && organizationalForms.value === "") {
    organizationalForms.value = false;
  }
  if (val === "oGRN" && oGRN.value === "") {
    oGRN.value = false;
  }
  if (val === "iNN" && iNN.value === "") {
    iNN.value = false;
  }
  if (val === "bankBIC" && bankBIC.value === "") {
    bankBIC.value = false;
  }
  if (val === "email" && checkingAccount.value === "") {
    checkingAccount.value = false;
  }
}
</script>

<style lang="scss" scoped>
.legal-row {
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
</style>
