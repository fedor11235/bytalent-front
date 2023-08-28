<template>
  <div class="profile-view__right-panel">
    <div class="profile-view__cards">
      <div class="profile-view__card-profile">
        <div class="profile-view__card-profile_title">
          Информация профиля
          <img
            class="profile-view__card-profile_title_img"
            src="@/assets/icons/edit.svg"
          />
        </div>
        <div class="profile-view__card-profile_info">
          <img
            class="profile-view__card-profile_img"
            src="@/assets/icons/person.svg"
          />
          {{ name }} {{ surname }}
        </div>
        <div class="profile-view__card-profile_info">
          <img
            class="profile-view__card-profile_img"
            src="@/assets/icons/company.svg"
          />
          {{ organization }}
        </div>
        <div class="profile-view__card-profile_info">
          <img
            class="profile-view__card-profile_img"
            src="@/assets/icons/role.svg"
          />
          {{ position }}
        </div>
        <div class="profile-view__card-profile_info">
          <img
            class="profile-view__card-profile_img"
            src="@/assets/icons/phone-profile.svg"
          />
          {{ phone }}
        </div>
        <div class="profile-view__card-profile_info">
          <img
            class="profile-view__card-profile_img"
            src="@/assets/icons/telegram-profile.svg"
          />
          {{ email }}
        </div>
      </div>
      <div class="profile-view__card-not">
        <div class="profile-view__card-not_tabs">
          <div
            v-for="tab of tabs"
            :key="tab"
            @click="tabActive = tab"
            :class="[
              'profile-view__card-not_tab',
              { 'profile-view__card-not_tab-active': tabActive === tab },
            ]"
          >
            {{ tab }}
          </div>
        </div>
        <div v-if="tabActive == 'Активные проекты'">
          <div
            v-for="(item, index) of projectsActive"
            :key="item.id"
            :class="[
              'profile-view__card-not_item',
              { 'profile-view__card-not_item-border': index !== 0 },
            ]"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.status }}</div>
          </div>
        </div>
        <div v-if="tabActive == 'Коммерция'">
          <div
            v-for="(item, index) of nots"
            :key="item"
            :class="[
              'profile-view__card-not_item',
              { 'profile-view__card-not_item-border': index !== 0 },
            ]"
          >
            {{ item }}
          </div>
        </div>
        <div v-if="tabActive == 'Уведомления'">
          <div
            v-for="(item, index) of notifications"
            :key="item"
            :class="[
              'profile-view__card-not_item',
              { 'profile-view__card-not_item-border': index !== 0 },
            ]"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="profile-view__doc">
        Пользовательское соглашение АО ТК Талент" в соответствии со статьёй 428
        гражданского кодекса Российской Федерации Политика обработки
        персональных данных согласно Федеральному закону “О персональных данных“
        от 27.07.2006 №152-ФЗ Договор публичной оферты АО “ГК Талент"
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import profileService from "@/services/profileService";
import projectService from "@/services/projectService";
import commerceService from "@/services/commerceService";
import notificationsService from "@/services/notificationsService";

const tabs = ["Активные проекты", "Коммерция", "Уведомления"];

const name = ref(false);
const surname = ref(false);
const organization = ref(false);
const position = ref(false);
const phone = ref(false);
const email = ref(false);

const projectsActive = ref([]);
const nots = ref([]);
const notifications = ref([]);
const tabActive = ref("Активные проекты");

onMounted(async () => {
  const profile = await profileService.getProfile();
  name.value = profile.name ?? "-";
  surname.value = profile.surname ?? "-";
  organization.value = profile.organization ?? "-";
  position.value = profile.position ?? "-";
  phone.value = profile.phone ?? "-";
  email.value = profile.email ?? "-";
  projectsActive.value = await projectService.getActiveProjects();
  const commerce = await commerceService.getCommerce();
  nots.value = commerce.operationsHistory;
  notifications.value = await notificationsService.getAllNotifications();
});
</script>

<style lang="scss" scoped>
.profile-view__right-panel {
  position: absolute;
  height: calc(100% - 3.7vh - min(80px, 7.4vh));
  right: 0;
  bottom: 0;
  max-width: 45vw;
  width: 100%;
  background-image: url(@/assets/components/profile-right-panel.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2.5vh 5.8vw 7.2vh 8.6vw;
  box-sizing: border-box;
}
.profile-view__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-view__card-profile {
  width: 100%;
  height: 32.5vh;
  box-sizing: border-box;
  border-radius: 24px;
  border-top: 2px solid rgba(255, 255, 255, 0.25);
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  padding: 1.1vh 1.25vw;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.2vh;
  &_title {
    width: calc(100% - 48px);
    padding-bottom: 1.6vh;
    padding-left: 2.9vw;

    color: rgba(255, 255, 255, 0.65);
    font-family: JuraMedium;
    font-size: 2.5vh;
    line-height: 100%;
    letter-spacing: -0.56px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &_img {
      height: 1.6vw;
      width: 1.6vw;
      margin-right: 1.25vw;
    }
  }
  &_info {
    width: calc(100% - 48px);
    padding: 1.4vh 1.25vw;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 2.2vh;
    line-height: 100%;
    letter-spacing: -0.56px;
    display: flex;
    align-items: center;
  }
  &_img {
    height: 2.2vh;
    width: 2.2vh;
    margin-right: 1.25vw;
  }
}
.profile-view__card-not {
  width: 100%;
  height: 32.5vh;
  box-sizing: border-box;
  border-radius: 24px;
  border-top: 2px solid rgba(255, 255, 255, 0.25);
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.4vh 2.5vw;
  margin-bottom: 3.3vh;
  &_tabs {
    display: flex;
    column-gap: 0.4vw;
    padding-bottom: 1.9vh;
  }
  &_tab {
    width: 100%;
    border-radius: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.65);
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1.4vh 1.25vw;

    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 1.6vh;
    line-height: 100%;
    letter-spacing: -0.36px;

    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    &-active {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  &_item {
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 1.9vh;
    padding-bottom: 1.9vh;
    line-height: 100%;
    letter-spacing: -0.4px;
    display: flex;
    justify-content: space-between;
    &-border {
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
}
.profile-view__wrap-info {
  margin-top: 7vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.profile-view__btn {
  cursor: pointer;
  border-radius: 12px;
  border-top: 2px solid rgba(255, 255, 255, 0.65);
  background-color: rgba(0, 0, 0, 0.35);
  padding: 1.15vh 1.6vw;

  color: #f9f9f9;
  font-family: JuraMedium;
  font-size: 1.6vh;
  line-height: 100%;
  letter-spacing: -0.36px;
}
.profile-view__doc {
  width: 100%;
  color: var(--element-white, #fff);
  font-family: JuraBold;
  font-size: 1.2vh;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
  padding-right: 20%;
  box-sizing: border-box;
}
</style>