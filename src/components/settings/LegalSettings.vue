<template>
  <InputControl name="Название компании" v-model="companyName" />
  <InputControl name="Организационная форма" v-model="organizationalForms" />
  <InputControl name="ОГРН" v-model="oGRN" />
  <InputControl name="ИНН" v-model="iNN" />
  <InputControl name="БИК банка" v-model="bankBIC" />
  <InputControl name="Расчётный счёт" v-model="checkingAccount" />

  <div @click="handlerSaveLegal" class="legal-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputControl from "@/components/controls/InputControl";
import legalService from "@/services/legalService";

const companyName = ref(false);
const organizationalForms = ref(false);
const oGRN = ref(false);
const iNN = ref(false);
const bankBIC = ref(false);
const checkingAccount = ref(false);

legalService.getlegal().then((res) => {
  companyName.value = res.companyName ? res.companyName : false;
  organizationalForms.value = res.organizationalForms
    ? res.organizationalForms
    : false;
  oGRN.value = res.oGRN ? res.oGRN : false;
  iNN.value = res.iNN ? res.iNN : false;
  bankBIC.value = res.bankBIC ? res.bankBIC : false;
  checkingAccount.value = res.checkingAccount ? res.checkingAccount : false;
});

function handlerSaveLegal(val: string) {
  legalService.setLegal({
    companyName: companyName.value,
    organizationalForms: organizationalForms.value,
    oGRN: oGRN.value,
    iNN: iNN.value,
    bankBIC: bankBIC.value,
    checkingAccount: checkingAccount.value,
  });
}
</script>

<style lang="scss" scoped>
.legal-save {
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
