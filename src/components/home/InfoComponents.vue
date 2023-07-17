<template>
  <div class="info">
    <div class="info__backdrop"></div>
    <div class="info__content">
      <HeaderComponent
        urlButton="header/profile.png"
        urlButtonHover="header/profile.png"
      />
      <div class="description">
        <div class="description__card">
          <div class="description__info">
            <div v-for="elem of dropdown" :key="elem.date" class="description__info_elem">
              <span class="description__info_elem_text">{{ elem.text }}</span>
              <span class="description__info_elem_date">{{ elem.date }}</span>
            </div>
          </div>
          <div class="description__menu">
            <div v-for="elem of menu" :key="elem" class="description__menu_elem">
              <span>{{ elem }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="personal">
        <div class="personal__card">
          <div class="personal__header">Информация профиля</div>
          <div class="personal__row">Роман Нестеренко</div>
          <div class="personal__row">Акционерное общество "Талент"</div>
          <div class="personal__row">+7 (933) 666-66-63</div>
          <div class="personal__row">Генеральный директор</div>
          <div class="personal__footer">
            <RouterLink to="/settings"><TestButton class="personal__button">Настройки</TestButton></RouterLink>
          </div>
        </div>
      </div>
      <div class="doc">
        <div class="doc__text">Пользовательское соглашение АО "ГК Талент" в соответствии со статьёй 428 гражданского кодекса Российской Федерации</div>
        <div class="doc__text">Политика обработки персональных данных согласно Федеральному закону "О персональных данных" от 27.07.2006 N 152-ФЗ</div>
        <div class="doc__text">Договор публичной оферты АО "ГК Талент"</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import HeaderComponent from "@/components/home/HeaderComponent.vue";
import TestButton from "@/components/TestButton.vue";
import { useHomeStore } from  "@/store"

const homeStore = useHomeStore()

const menu = [
  'Активные проекты',
  'Коммерция',
  'Уведомления'
]

const dropdown = [
  {
    text: 'Выставлен счёт №0126 на сумму 150 050 рублей',
    date: '01.04.2024'
  },
  {
    text: 'Выставлен счёт №0126 на сумму 150 050 рублей',
    date: '01.04.2024'
  },
  {
    text: 'Выставлен счёт №0126 на сумму 150 050 рублей',
    date: '01.04.2024'
  },
]
</script>

<style lang="scss" scoped>
.info {
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
    background-image: url(@/assets/info/bg.png);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: .08;
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
      height: auto;
      justify-content: center;
      align-items: center;
      margin-top: .7%;
      display: flex;
      &__card {
        width: 65.5%;
        display: flex;
      }
      &__info {
        z-index: 1;
        width: 60%;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid rgba(255, 255, 255, .12);
        border-top: 1px solid rgba(255, 255, 255, .47);
        border-bottom: 1px solid rgba(255, 255, 255, .22);
        border-radius: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 2vh;
        display: flex;
        overflow: scroll;
        box-shadow: 0 4px rgba(0, 0, 0, .6);
        &_elem {
          width: 80%;
          min-height: 40%;
          border-bottom: 1px solid rgba(255, 255, 255, .2);
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          display: flex;
          margin: auto;
          &_text {
            width: 75%;
            color: #fff;
            font-weight: 300;
            display: flex;
            text-align: left;
          }
          &_date {
            width: 25%;
            color: #757575;
            text-align: right;
            font-family: Montserrat, sans-serif;
            font-size: 1.5vh;
            line-height: 15px;
          }
        }
      }
      &__menu {
        z-index: 1;
        width: 40%;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid rgba(255, 255, 255, .1);
        border-radius: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 1%;
        margin-right: 0%;
        font-size: 2vh;
        display: flex;
        overflow: visible;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .6);
        &_elem {
          color: #fff;
          text-align: left;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0);
          border-top: 1px solid rgba(138, 138, 138, .87);
          border-radius: 9px;
          justify-content: flex-start;
          align-items: center;
          font-family: Jura, sans-serif;
          font-size: 1.7vh;
          font-weight: 300;
          display: flex;
          height: 60px;
          width: 100%;
          &:hover {
            text-shadow: 0 12px 12px rgba(0, 0, 0, .48);
            background-color: rgba(255, 255, 255, .03);
          }
          span {
            margin-left: 16px;
          }
        }
      }
    }
    .personal {
      width: 100%;
      height: auto;
      justify-content: center;
      align-items: center;
      margin-top: .7%;
      display: flex;
      &__row {
        width: 80%;
        height: 6vh;
        text-align: center;
        border: 0 solid rgba(255, 255, 255, .09);
        border-top-width: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, .13);
        border-radius: 0;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      &__header {
        width: 100%;
        height: 6vh;
        text-align: center;
        background-color: #181818;
        border: 0 solid rgba(255, 255, 255, .09);
        border-top-width: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, .13);
        border-radius: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .34);
      }
      &__card {
        width: 65.5%;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid #000;
        border-top: 1px solid rgba(255, 255, 255, .4);
        border-bottom: 1px solid rgba(255, 255, 255, .21);
        border-radius: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: flex;
        box-shadow: 0 4px rgba(0, 0, 0, .6);
        overflow: hidden;
        color: #b6b6b6;
        font-family: Jura, sans-serif;
        font-size: 2.5vh;
      }
      &__footer {
        height: 7vh;
        text-align: center;
        background-color: #181818;
        border: 0 solid rgba(255, 255, 255, .13);
        border-top: 1px solid rgba(255, 255, 255, .31);
        border-radius: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        display: flex;
        box-shadow: -2px 0 5px rgba(0, 0, 0, .34);
      }
      &__button {
        height: 60%;
      }
    }
    .doc {
      &__text {
        width: 60%;
        opacity: .75;
        color: #fff;
        text-align: justify;
        margin: auto;
        font-size: 1.6vh;
        font-weight: 400;
        text-decoration: none;
        display: block;
        margin-bottom: 2vh;
      }
    }
  }
}
</style>
