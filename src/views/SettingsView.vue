<template>
  <div class="settings">
    <div class="settings__backdrop"></div>
    <div class="settings__content">
      <HeaderComponent
        urlButton="header/settings.png"
        urlButtonHover="header/settings.png"
        type="cross"
        :isTitleButton="true"
        @switch="router.push({ name: 'home' })"
      />
      <div class="description">
        <div class="description__card">
          <div class="description__info">
            <div
              v-for="elem of dropdown"
              :key="elem.date"
              class="description__info_elem"
            >
              <span class="description__info_elem_text">{{ elem.text }}</span>
              <span class="description__info_elem_date">{{ elem.date }}</span>
            </div>
          </div>
          <div class="description__menu">
            <div
              v-for="elem of menu"
              :key="elem"
              class="description__menu_elem"
            >
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
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

const router = useRouter();

const menu = [
  "Коммерция",
  "Личные данные",
  "Юридические данные",
  "Официальный ссылки",
  "Безопасность",
];

const dropdown = [
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
];
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
      }
      &__info {
        width: 67%;
        box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0);
        text-shadow: 0 3px 3px rgba(0, 0, 0, 0.85);
        background-color: #252525;
        border: 0 solid rgba(158, 158, 158, 0.07);
        border-top: 1px solid rgba(231, 231, 231, 0.44);
        border-bottom: 1px solid rgba(158, 158, 158, 0.31);
        border-radius: 15px;
        display: flex;
        overflow: scroll;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.26);
        display: flex;
        flex-direction: column;
        &_elem {
          width: 94%;
          height: 8vh;
          color: #fff;
          text-align: left;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0);
          border-top: 1px rgba(138, 138, 138, 0.87);
          border-radius: 0;
          justify-content: center;
          align-items: center;
          margin-bottom: 0%;
          padding: 0% 0% 0.2%;
          font-family: Jura, sans-serif;
          font-size: 1.8vh;
          font-weight: 300;
          display: flex;
          position: relative;
        }
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
          &:hover {
            text-shadow: 0 12px 12px rgba(0, 0, 0, 0.48);
            background-color: rgba(255, 255, 255, 0.03);
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
      text-align: center;
      margin: auto;
      font-size: 1.6vh;
      font-weight: 400;
      margin-bottom: 2vh;
      padding: 16px;
    }
  }
}
</style>
