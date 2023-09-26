<template>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Наименование</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="companyName"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(companyName) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Орг. форма</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="organizationalForms"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(organizationalForms) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">ОГРН</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="oGRN"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(oGRN) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">ИНН</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="iNN"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(iNN) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Бик банка</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="bankBIC"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(bankBIC) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Расчётный счёт</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="checkingAccount"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(checkingAccount) }}
      </div>
    </div>
  </div>
  <div
    v-if="isProfileEdit"
    @click="handlerSave"
    class="settings-view__card_edit_cntnr"
  >
    <div class="settings-view__card_edit">
      <!-- <img
        class="settings-view__card_edit_icon"
        src="@/assets/icons/save.svg"
        alt="edit"
      /> -->
      Сохранить
    </div>
  </div>
  <div
    v-else
    @click="isProfileEdit = true"
    class="settings-view__card_edit_cntnr"
  >
    <div class="settings-view__card_edit">
      <!-- <img
        class="settings-view__card_edit_icon"
        src="@/assets/icons/pen.svg"
        alt="edit"
      /> -->
      Редактировать
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import legalService from "@/services/legalService";
import { parseTextSetting } from "@/utils/parse";

const bankBIC = ref();
const checkingAccount = ref();
const companyName = ref();
const iNN = ref();
const oGRN = ref();
const organizationalForms = ref();

const isProfileEdit = ref(false);

function handlerSave() {
  isProfileEdit.value = false;
  legalService.setLegal({
    bankBIC: bankBIC.value,
    checkingAccount: checkingAccount.value,
    companyName: companyName.value,
    iNN: iNN.value,
    oGRN: oGRN.value,
    organizationalForms: organizationalForms.value,
  });
}

onMounted(async () => {
  const legalData = await legalService.getlegal();
  bankBIC.value = legalData.bankBIC;
  checkingAccount.value = legalData.checkingAccount;
  companyName.value = legalData.companyName;
  iNN.value = legalData.iNN;
  oGRN.value = legalData.oGRN;
  organizationalForms.value = legalData.organizationalForms;
});
</script>

<style lang="scss" scoped>
.settings-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
  &__card {
    height: 100%;
    border-radius: 24px;
    border-top: 2px solid rgba(255, 255, 255, 0.25);
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4.44vh 1.6vw;
    box-sizing: border-box;
    &_title {
      color: rgba(255, 255, 255, 0.55);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 120%;
      letter-spacing: -0.4px;
    }
    &_input {
      border: none;
      outline: none;
      color: #191919;
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 120%;
      letter-spacing: -0.4px;
      padding: 0px 0.8vw;
      border-radius: 8px;
    }
    &_fill-btn {
      display: flex;
      width: 8.33vw;
      padding: 1.38vh 1.6vw;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(0, 0, 0, 0.1);
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      cursor: pointer;
      margin-top: 2.2vh;
      box-sizing: border-box;
      margin-left: calc(100% - 8.33vw);
    }
    &_edit {
      display: flex;
      justify-content: center;
      width: 50%;
      margin-left: 50%;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(255, 255, 255, 0.1);
      height: 4.44vh;
      // padding: 1.11vh 1.25vw;
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &_cntnr {
        margin-top: 3.703vh;
        display: flex;
        justify-content: center;
      }
      &_icon {
        width: 1.25vw;
        height: 1.25vw;
        margin-right: 0.8vw;
      }
    }
    &_delimiter {
      height: 1px;
      margin: 2.96vh 0;
      background-color: rgba(255, 255, 255, 0.25);
    }
    &_text {
      color: rgba(255, 255, 255, 0.85);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 120%;
      letter-spacing: -0.4px;
      padding: 0px 0.8vw;
    }
    &_grid {
      height: 1.85vh;
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>
