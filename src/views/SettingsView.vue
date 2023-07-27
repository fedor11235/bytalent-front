<template>
  <div class="settings">
    <div class="settings__backdrop"></div>
    <div class="settings__content">
      <HeaderComponent
        urlButton="header/settings.png"
        urlButtonHover="header/settings.png"
        type="cross"
        :isTitleButton="true"
        @switch="router.push({ name: 'visualization-first' })"
      />
      <div class="description">
        <div class="description__card">
          <div class="description__info">
            <component :is="settings" />
          </div>
          <div class="description__menu">
            <div
              v-for="elem of menu"
              :key="elem"
              class="description__menu_elem"
              @click="chooseElemMenu(elem)"
            >
              <div
                :style="{
                  backgroundImage: `url(${require(`@/assets/icons/${chooseIcon(
                    elem
                  )}.png`)})`,
                }"
                class="description__menu_elem_icon"
              ></div>
              <span>{{ elem }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="doc">
        © 2023 Все права защищены. Пользователь уведомлен, что любые материалы,
        размещенные на сайте, являются объектами интеллектуальной собственности
        АО «ГК Талент» (правообладателя). Пользователь не вправе без
        предварительного письменного разрешения правообладателя осуществлять
        какие-либо действия с объектами интеллектуальной собственности, в
        противном случае, правообладатель оставляет за собой право на взыскание
        штрафов, предусмотренных законодательством РФ, а также на обращение в
        компетентные органы за защитой своих прав и законных интересов.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ProfileSettings from "@/components/settings/ProfileSettings.vue";
import LinksSettings from "@/components/settings/LinksSettings.vue";

const router = useRouter();

const menu = [
  "Коммерция",
  "Личные данные",
  "Юридические данные",
  "Официальный ссылки",
  "Безопасность",
];

const activeElemMenu = ref("Коммерция");

const settings = computed(() => {
  if (activeElemMenu.value === "Коммерция") {
    return ProfileSettings;
  }
  if (activeElemMenu.value === "Личные данные") {
    return ProfileSettings;
  }
  if (activeElemMenu.value === "Юридические данные") {
    return ProfileSettings;
  }
  if (activeElemMenu.value === "Официальный ссылки") {
    return LinksSettings;
  }
  if (activeElemMenu.value === "Безопасность") {
    return ProfileSettings;
  }
  return "";
});

function chooseElemMenu(elem: string) {
  activeElemMenu.value = elem;
}

function chooseIcon(item: string) {
  if (item === "Коммерция") return "cards";
  if (item === "Личные данные") return "personal";
  if (item === "Юридические данные") return "docs";
  if (item === "Официальный ссылки") return "integration";
  if (item === "Безопасность") return "security";
}
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #141414;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-image: url(@/assets/backgrounds/info.png);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.08;
  }
  &__content {
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: space-between;
    .description {
      width: 100%;
      height: 70%;
      justify-content: center;
      align-items: center;
      margin-top: 3%;
      display: flex;
      &__info {
        width: 67%;
        height: 92%;
        background-color: #252525;
        border: 0 solid rgba(158, 158, 158, 0.07);
        border-top: 1px solid rgba(231, 231, 231, 0.44);
        border-bottom: 1px solid rgba(158, 158, 158, 0.31);
        border-radius: 15px;
        padding-top: 3%;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.26);
      }
      &__card {
        width: 65.5%;
        height: 100%;
        display: flex;
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
        background-color: #1d1d1d;
        border: 0 solid #000;
        border-top: 1px solid rgba(255, 255, 255, 0.47);
        border-bottom: 1px solid rgba(250, 250, 250, 0.18);
        border-radius: 15px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.62);
        padding: 12px;
        column-gap: 16px;
      }
      &__menu {
        width: 33%;
        &_elem {
          width: 100%;
          height: 50px;
          color: #fff;
          text-align: left;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0);
          border-top: 1px solid rgba(138, 138, 138, 0.87);
          border-radius: 9px;
          font-size: 1.7vh;
          font-weight: 300;
          display: flex;
          align-items: center;
          font-family: JuraMedium, sans-serif;
          &:hover {
            text-shadow: 0 12px 12px rgba(0, 0, 0, 0.48);
            background-color: rgba(255, 255, 255, 0.03);
          }
          &_icon {
            width: 17%;
            height: 45%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
          }
          span {
            margin-left: 16px;
          }
        }
      }
    }
    .doc {
      opacity: 0.75;
      color: #fff;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      margin: 2%;
      margin-top: 0;
      font-size: 1.6vh;
      font-weight: 400;
      padding: 16px;
    }
  }
}
</style>
