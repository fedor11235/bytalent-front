<template>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Имя</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="name"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(name) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Фамилия</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="surname"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(surname) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Ограницзация</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="organization"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(organization) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Должность</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="position"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(position) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Номер телефона</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="phone"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(phone) }}
      </div>
    </div>
  </div>
  <div class="settings-view__card_delimiter"></div>
  <div class="settings-view__card_grid">
    <div class="settings-view__card_title">Эл. почта</div>
    <div>
      <input
        v-if="isProfileEdit"
        v-model="email"
        class="settings-view__card_input"
      />
      <div v-else class="settings-view__card_text">
        {{ parseTextSetting(email) }}
      </div>
    </div>
  </div>
  <div
    v-if="isProfileEdit"
    @click="handlerSave"
    class="settings-view__card_edit_cntnr"
  >
    <div class="settings-view__card_edit">
      <img
        class="settings-view__card_edit_icon"
        src="@/assets/icons/save.svg"
        alt="edit"
      />
      Сохранить
    </div>
  </div>
  <div
    v-else
    @click="isProfileEdit = true"
    class="settings-view__card_edit_cntnr"
  >
    <div class="settings-view__card_edit">
      <img
        class="settings-view__card_edit_icon"
        src="@/assets/icons/pen.svg"
        alt="edit"
      />
      Редактировать
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import profileService from "@/services/profileService";
import { parseTextSetting } from "@/utils/parse";

const name = ref("");
const surname = ref("");
const organization = ref("");
const position = ref("");
const phone = ref("");
const email = ref("");

const isProfileEdit = ref(false);

function handlerSave() {
  isProfileEdit.value = false;
  profileService.setProfile({
    name: name.value,
    surname: surname.value,
    organization: organization.value,
    position: position.value,
    phone: phone.value,
    email: email.value,
  });
}

onMounted(async () => {
  const profile = await profileService.getProfile();
  name.value = profile.name;
  surname.value = profile.surname;
  organization.value = profile.organization;
  position.value = profile.position;
  phone.value = profile.phone;
  email.value = profile.email;
  // console.log('profile.email', profile.email)
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
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1.11vh 1.25vw;
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &_cntnr {
        margin-top: 7.77vh;
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
