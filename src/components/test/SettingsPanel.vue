<template>
  <div @click.self="rootStore.popupProfile = false" class="settings-view__content">
    <div class="settings-view__left-panel">
      <div class="settings-view__card">
        <div v-if="aciveItem === 'Коммерция'">
          <CommerceSettings />
        </div>
        <div v-else-if="aciveItem === 'Личные дела'">
          <ProfileSettings />
        </div>
        <div v-else-if="aciveItem === 'Юридические данные'">
          <LegalDataSettings />
        </div>
        <div v-else-if="aciveItem === 'Официальные ссылки'">
          <OfficialLinksSettings />
        </div>
        <div v-else-if="aciveItem === 'Безопасность'">
          <SafetySettings />
        </div>
      </div>
    </div>
    <div class="settings-view__menu">
      <div
        v-for="item in menu"
        :key="item"
        @click="aciveItem = item"
        :class="[
          'settings-view__menu_item',
          { 'settings-view__menu_item_active': aciveItem === item },
        ]"
      >
        <img
          class="settings-view__menu_img"
          :src="require(`@/assets/icons/${chooseIconMenu(item)}.svg`)"
        />
        {{ item }}
      </div>
    </div>
    <div class="settings-view__doc">
      © 2023 Все права защищены. Пользователь уведомлен, что любые материалы,
      размещенные на сайте, являются объектами интеллектуальной собственности АО
      «ГК Талент» (правообладателя). Пользователь не вправе без предварительного
      письменного разрешения правообладателя осуществлять какие-либо действия с
      объектами интеллектуальной собственности, в противном случае,
      правообладатель оставляет за собой право на взыскание штрафов,
      предусмотренных законодательством РФ, а также на обращение в компетентные
      органы за защитой своих прав и законных интересов.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CommerceSettings from "@/components/test/CommerceSettings.vue";
import ProfileSettings from "@/components/test/ProfileSettings.vue";
import LegalDataSettings from "@/components/test/LegalDataSettings.vue";
import OfficialLinksSettings from "@/components/test/OfficialLinksSettings.vue";
import SafetySettings from "@/components/test/SafetySettings.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const menu = [
  "Коммерция",
  "Личные дела",
  "Юридические данные",
  "Официальные ссылки",
  "Безопасность",
];

const aciveItem = ref("Коммерция");

function chooseIconMenu(item: string) {
  if (item === "Коммерция") return "chat";
  if (item === "Личные дела") return "technical-requirements";
  if (item === "Юридические данные") return "scales";
  if (item === "Официальные ссылки") return "integration";
  if (item === "Безопасность") return "integration";
}
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
  }
  &__content {
    position: absolute;
    bottom: 0;
    height: calc(100% - 3.7vh - min(80px, 7.4vh));
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__left-panel {
    height: 100%;
    max-width: 45vw;
    width: 100%;
    background-image: url(@/assets/components/profile-left-panel.svg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 8.7vh 6.66vw 7.68vh 3.125vw;
    box-sizing: border-box;
    background-position: right;
  }
  &__menu {
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
    width: 20.83vw;
    margin-left: 3.3vw;
    &_img {
      height: 1.6vw;
      width: 1.6vw;
      margin-right: 1.25vw;
    }
    &_item {
      display: flex;
      padding: 1.11vh 1.25vw;
      align-items: center;
      column-gap: 0.8vw;
      align-self: stretch;
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);
      color: #f9f9f9;
      font-family: JuraSemiBold;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      &_active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  &__doc {
    color: #fff;
    font-family: JuraSemiBold;
    font-size: 1.296vh;
    line-height: 100%;
    flex: 1 0 0;
    width: 27vw;

    position: absolute;
    bottom: 62px;
    left: 56.3vw;
  }
}
</style>
