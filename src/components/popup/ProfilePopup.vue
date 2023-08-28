<template>
  <div class="profile-view">
    <EmptyComponent />
    <div class="switch-profile-settings">
      <img
        v-if="activePanel === 'settings'"
        class="switch-profile-settings_img"
        src="@/assets/icons/settings-active.svg"
        alt="settings"
      />
      <img
        v-else
        @click="activePanel = 'settings'"
        class="switch-profile-settings_img"
        src="@/assets/icons/settings.svg"
        alt="settings"
      />
      <img
        v-if="activePanel === 'profile'"
        class="switch-profile-settings_img"
        src="@/assets/icons/profile-active.svg"
        alt="profile"
      />
      <img
        v-else
        @click="activePanel = 'profile'"
        class="switch-profile-settings_img"
        src="@/assets/icons/profile.svg"
        alt="profile"
      />
    </div>
    <Transition name="move-right">
      <ProfilePanel v-if="activePanel === 'profile'" />
    </Transition>
    <Transition name="move-left">
      <SettingsPanel v-if="activePanel === 'settings'" />
    </Transition>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import ProfilePanel from "@/components/test/ProfilePanel.vue";
import SettingsPanel from "@/components/test/SettingsPanel.vue";

const activePanel = ref("profile");
</script>

<style lang="scss" scoped>
.switch-profile-settings {
  position: absolute;
  display: flex;
  column-gap: 1.6vw;
  top: calc(80px + 3.7vh);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.48vh 0.8vw;
  z-index: 1;
  &_img {
    height: 2.96vh;
    width: 2.96vh;
    cursor: pointer;
  }
}
.profile-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
  &__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__right-panel {
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
  &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__card-profile {
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
      font-size: 2.5vh;
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
  &__card-not {
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
  &__wrap-info {
    margin-top: 7vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__btn {
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
  &__doc {
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
}
</style>
