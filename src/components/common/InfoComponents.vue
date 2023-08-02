<template>
  <div class="info">
    <div class="info__backdrop"></div>
    <div class="info__content">
      <HeaderComponent
        urlButton="header/profile.png"
        urlButtonHover="header/profile.png"
        type="cross"
        :isTitleButton="true"
        @switch="rootStore.infoPage = !rootStore.infoPage"
      />
      <div class="description">
        <div class="description__card">
          <div class="description__info">
            <component :is="norifications" />
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
      <div class="personal">
        <div class="personal__card">
          <div class="personal__header">Информация профиля</div>
          <div class="personal__row">Роман Нестеренко</div>
          <div class="personal__row">Акционерное общество "Талент"</div>
          <div class="personal__row">+7 (933) 666-66-63</div>
          <div class="personal__row">Генеральный директор</div>
          <div class="personal__footer">
            <div @click="handlerClick" class="personal__button"></div>
          </div>
        </div>
      </div>
      <div class="doc">
        <div class="doc__text">
          Пользовательское соглашение АО "ГК Талент" в соответствии со статьёй
          428 гражданского кодекса Российской Федерации
        </div>
        <div class="doc__text">
          Политика обработки персональных данных согласно Федеральному закону "О
          персональных данных" от 27.07.2006 N 152-ФЗ
        </div>
        <div class="doc__text">Договор публичной оферты АО "ГК Талент"</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ActiveProjectsNorifications from "@/components/notifications/ActiveProjectsNorifications.vue";
import ComerceNorifications from "@/components/notifications/ComerceNorifications.vue";
import AllNorifications from "@/components/notifications/AllNorifications.vue";
import { useRouter } from "vue-router";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
const router = useRouter();

const menu = ["Активные проекты", "Коммерция", "Уведомления"];

const activeElemMenu = ref("Активные проекты");

const norifications = computed(() => {
  if (activeElemMenu.value === "Активные проекты") {
    return ActiveProjectsNorifications;
  }
  if (activeElemMenu.value === "Коммерция") {
    return ComerceNorifications;
  }
  if (activeElemMenu.value === "Уведомления") {
    return AllNorifications;
  }
  return "";
});

function chooseIcon(name: string) {
  if (name === "Активные проекты" || name === "Уведомления") return "personal";
  if (name === "Коммерция") return "cards";
}

function chooseElemMenu(elem: string) {
  activeElemMenu.value = elem;
}

function handlerClick() {
  router.push({ name: "settings" });
  rootStore.infoPage = false;
}
</script>

<style lang="scss" scoped>
.info {
  position: fixed;
  z-index: 2;
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
      height: auto;
      justify-content: center;
      align-items: center;
      margin-top: 0.7%;
      display: flex;
      &__card {
        width: 65.5%;
        display: flex;
      }
      &__info {
        z-index: 1;
        width: 60%;
        height: 183px;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid rgba(255, 255, 255, 0.12);
        border-top: 1px solid rgba(255, 255, 255, 0.47);
        border-bottom: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        font-size: 2vh;
        display: flex;
        overflow-y: scroll;
        box-shadow: 0 4px rgba(0, 0, 0, 0.6);
      }
      &__menu {
        z-index: 1;
        width: 40%;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 1%;
        margin-right: 0%;
        font-size: 2vh;
        display: flex;
        overflow: visible;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
        &_elem {
          color: #fff;
          text-align: left;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0);
          border-top: 1px solid rgba(138, 138, 138, 0.87);
          border-radius: 9px;
          justify-content: flex-start;
          align-items: center;
          font-family: JuraMedium, sans-serif;
          font-size: 1.7vh;
          font-weight: 300;
          display: flex;
          height: 60px;
          width: 100%;
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
    .personal {
      width: 100%;
      height: auto;
      justify-content: center;
      align-items: center;
      margin-top: 0.7%;
      display: flex;
      &__row {
        width: 80%;
        height: 6vh;
        text-align: center;
        border: 0 solid rgba(255, 255, 255, 0.09);
        border-top-width: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);
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
        border: 0 solid rgba(255, 255, 255, 0.09);
        border-top-width: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        border-radius: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.34);
      }
      &__card {
        width: 65.5%;
        background-color: rgba(0, 0, 0, 0);
        border: 0 solid #000;
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        border-bottom: 1px solid rgba(255, 255, 255, 0.21);
        border-radius: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: flex;
        box-shadow: 0 4px rgba(0, 0, 0, 0.6);
        overflow: hidden;
        color: #b6b6b6;
        font-family: JuraMedium, sans-serif;
        font-size: 2.5vh;
      }
      &__footer {
        height: 7vh;
        text-align: center;
        background-color: #181818;
        border: 0 solid rgba(255, 255, 255, 0.13);
        border-top: 1px solid rgba(255, 255, 255, 0.31);
        border-radius: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        display: flex;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.34);
      }
      &__button {
        height: 41px;
        width: 185px;
        background-image: url(@/assets/settings/settings.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        &:hover {
          background-image: url(@/assets/settings/settings-hover.png);
        }
      }
    }
    .doc {
      &__text {
        width: 60%;
        opacity: 0.75;
        color: #fff;
        text-align: justify;
        margin: auto;
        font-family: Arial, sans-serif;
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
