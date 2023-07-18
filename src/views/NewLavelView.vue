<template>
  <div class="settings">
    <div class="settings__backdrop"></div>
    <div class="settings__content">
      <HeaderComponent
        urlButton="header/main.png"
        urlButtonHover="header/main.png"
        type="burger"
        :isTitleButton="true"
        @switch="rootStore.infoPage = !rootStore.infoPage"
      />
      <div class="media">
        <div class="carousel">
          <div class="carousel__arrow carousel__arrow-left"></div>
          <img class="carousel__img" src="@/assets/lvel/bg.jpeg" alt="img" />
          <img class="carousel__img" src="@/assets/lvel/bg.jpeg" alt="img" />
          <img class="carousel__img" src="@/assets/lvel/bg.jpeg" alt="img" />
          <img class="carousel__img" src="@/assets/lvel/bg.jpeg" alt="img" />
          <img class="carousel__img" src="@/assets/lvel/bg.jpeg" alt="img" />
          <div class="carousel__arrow carousel__arrow-right"></div>
        </div>
      </div>
      <div class="settings__title">Новый уровень</div>
      <div class="settings__text">Адрес</div>
      <div class="settings__assistant">
        <div class="settings__assistant_menu">
          <div
            class="settings__assistant_menu_item"
            v-for="item of menu"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <div class="settings__assistant_chat">
          <textarea class="settings__assistant_chat_input"></textarea>
          <div class="settings__assistant_chat_button">Отправить</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

const rootStore = useRootStore();

const menu = [
  "Личный ассистент",
  "Технические требования",
  "Правли размещения",
  "Интеграция",
];
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/lvel/bg.jpeg);
  background-position: 0 0;
  box-shadow: inset 0 0 5px #000;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.66);
  }
  &__content {
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    .media {
      margin-top: 21px;
      .carousel {
        position: relative;
        width: 66%;
        height: 27vh;
        margin: auto;
        display: flex;
        column-gap: 12px;
        overflow: hidden;
        &__img {
          height: 100%;
          width: 32.5%;
          object-fit: cover;
          max-width: none;
          border-radius: 10px;
          box-shadow: 0 7px 8px -5px #000;
        }
        &__arrow {
          position: absolute;
          opacity: 0.6;
          border-radius: 12px;
          box-shadow: 0 2px 5px #000;
          width: 40px;
          height: 40px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
          &-left {
            left: 12px;
          }
          &-right {
            right: 12px;
          }
        }
      }
    }
  }
  &__title {
    width: 66%;
    direction: ltr;
    color: #fff;
    letter-spacing: -2px;
    text-indent: 0%;
    text-shadow: 0 6px 7px #000;
    font-family: Jura, sans-serif;
    font-size: 8vh;
    font-style: normal;
    font-weight: 400;
    line-height: 70%;
    text-align: left;
    margin: auto;
    padding: 21px 0;
  }
  &__text {
    width: 66%;
    text-align: left;
    margin: auto;
    color: #b6b6b6;
    letter-spacing: 1px;
    text-shadow: 0 6px 7px #000;
    font-family: Oswald, sans-serif;
    font-size: 26px;
    font-weight: 200;
    line-height: 24px;
  }
  &__assistant {
    display: flex;
    align-items: center;
    width: 66%;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
    margin: auto;
    padding: 0.1vh 0.1vh 0.1vh 1vh;
    height: 36vh;
    opacity: 0.72;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    box-shadow: 0 2px 8px #000, inset 0 0 5px 2px rgba(255, 255, 255, 0.22);
    &_menu {
      width: 31.5%;
      height: 100%;
      padding-top: 1%;
      padding-bottom: 1%;
      padding-right: 1%;
      &_item {
        width: 100%;
        height: 20%;
        color: #fff;
        text-align: left;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        border-top: 1px solid rgba(138, 138, 138, 0.87);
        border-radius: 9px;
        padding-bottom: 0.2%;
        font-family: Jura, sans-serif;
        font-size: 1.7vh;
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          text-shadow: 0 12px 12px rgba(0, 0, 0, 0.48);
          background-color: rgba(255, 255, 255, 0.03);
        }
      }
    }
    &_chat {
      position: relative;
      width: 67%;
      height: 97%;
      background-color: #1f1f1f;
      border-radius: 15px;
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.52),
        inset 0 -1px 10px -1px rgba(0, 0, 0, 0.93);
      &_input {
        width: 70%;
        height: 30%;
        min-height: 5vh;
        color: #f0f0f0;
        background-color: rgba(104, 104, 104, 0.29);
        border: 1px solid #000;
        border-radius: 11px;
        padding: 16px 25% 16px 25px;
        position: absolute;
        bottom: 0;
        left: 0;
        overflow-y: scroll;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.35),
          inset 0 2px 5px rgba(255, 255, 255, 0.2);
      }
      &_button {
        padding: 8px 16px;
        text-align: center;
        background-color: #292929;
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 11px;
        position: absolute;
        bottom: 16px;
        right: 32px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
        display: flex;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
