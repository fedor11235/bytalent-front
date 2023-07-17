<template>
  <div class="settings">
    <div class="settings__backdrop"></div>
    <div class="settings__content">
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
      <div class="doc">
        © 2023 Все права защищены. Пользователь уведомлен, что любые материалы, размещенные на сайте, являются объектами интеллектуальной собственности АО «ГК Талент» (правообладателя). Пользователь не вправе без предварительного письменного разрешения правообладателя осуществлять какие-либо действия с объектами интеллектуальной собственности, в противном случае, правообладатель оставляет за собой право на взыскание штрафов, предусмотренных законодательством РФ, а также на обращение в компетентные органы за защитой своих прав и законных интересов.
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
        &_elem {
        }
      }
      &__menu {
        &_elem {
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
    .doc {
      opacity: .75;
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
