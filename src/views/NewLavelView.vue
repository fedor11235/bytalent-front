<template>
  <div
    class="new-level"
    :style="{
      backgroundImage: projectStore.background
        ? `url(${projectStore.background})`
        : `url(${require('@/assets/backgrounds/lvel.jpeg')})`,
    }"
  >
    <div class="new-level__backdrop"></div>
    <div class="new-level__content">
      <Transition name="fade">
        <AddFileBgr v-if="isMediaAddBgr" />
      </Transition>
      <Transition name="fade">
        <AddFileProject v-if="isMediaAddProgect" />
      </Transition>
      <HeaderComponentAdditional :removeBtnPst="true" />
      <div class="new-level__title">Новый уровень</div>
      <div class="media">
        <div class="new-level__content__control">
          <div @click="handlerOpenBgrPopup" class="media__btn"></div>
        </div>
        <CarouselComponent />
      </div>
      <div class="new-level__info">
        <div class="new-level__header">
          <div class="new-level__content__control">
            <div
              class="new-level__header__btn"
              @click="IsModeAdrsWrt = !IsModeAdrsWrt"
            ></div>
          </div>
          <div class="new-level__text_wrap">
            <div
              :class="[
                'new-level__text',
                { 'new-level__text-wrt': IsModeAdrsWrt },
              ]"
            >
              <LineComponent :themeLight="IsModeAdrsWrt" />
              <div
                :class="[
                  'new-level__text_address',
                  { 'new-level__text_address-wrt': IsModeAdrsWrt },
                ]"
              >
                Адрес проекта
              </div>
            </div>
            <div class="new-level__description">
              <div class="new-level__description_text">Описание объекта</div>
              <div class="new-level__description_text">
                Дополнительная информация
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="assistant">
        <div class="new-level__content__control">
          <div
            @click="isMediaAddProgect = !isMediaAddProgect"
            :class="[
              'assistant__btn',
              // { assistant__btn_big: isExpand }
            ]"
          ></div>
        </div>
        <div
          :class="[
            'new-level__assistant',
            // { 'new-level__assistant_big': isExpand },
          ]"
        >
          <div
            :class="[
              'new-level__assistant_menu',
              // { 'new-level__assistant_menu_big': isExpand },
            ]"
          >
            <div
              class="new-level__assistant_menu_item"
              v-for="item of menu"
              :key="item"
            >
              <img
                class="new-level__assistant_menu_item_icon"
                :src="require(`@/assets/icons/${setIconMenu(item)}.svg`)"
              />
              {{ item }}
            </div>
          </div>
          <div
            :class="[
              'new-level__assistant_chat',
              { 'new-level__assistant_chat_big': isExpand },
            ]"
          >
            <img
              v-if="isExpand"
              @click="isExpand = false"
              src="@/assets/icons/full-close.svg"
              alt="expand"
              class="new-level__assistant_expand"
            />
            <img
              v-else
              @click="isExpand = true"
              src="@/assets/icons/full.svg"
              alt="expand"
              class="new-level__assistant_expand"
            />
            <textarea
              :class="[
                'new-level__assistant_chat_input',
                { 'new-level__assistant_chat_input_big': isExpand },
              ]"
              placeholder="Введите текст"
            ></textarea>
            <div class="new-level__assistant_chat_button">Отправить</div>
          </div>
        </div>
        <div class="assistant__btns">
          <div class="assistant__btns_btn assistant__btns_check"></div>
          <div class="assistant__btns_btn assistant__btns_import"></div>
          <div class="assistant__btns_btn assistant__btns_share"></div>
          <div class="assistant__btns_btn assistant__btns_faq"></div>
          <div class="assistant__btns_btn assistant__btns_delete"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted } from "vue";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";
import { useRouter } from "vue-router";

import projectService from "@/services/projectService";

import HeaderComponentAdditional from "@/components/common/HeaderComponentAdditional.vue";
import LineComponent from "@/components/common/LineComponent.vue";
import AddFileBgr from "@/components/newLavel/AddFileBgr.vue";
import AddFileProject from "@/components/newLavel/AddFileProject.vue";
import CarouselComponent from "@/components/controls/CarouselComponent.vue";

const router = useRouter();
const rootStore = useRootStore();
const projectStore = useProjectStore();

const menu = [
  "Личный ассистент",
  "Технические требования",
  "Правли размещения",
  "Интеграция",
];

let finishLoadBgr = false;

const IsModeAdrsWrt = ref(false);
const isMediaAddBgr = ref(false);
const isMediaAddProgect = ref(false);
const isExpand = ref(false);

function handlerOpenBgrPopup() {
  if (finishLoadBgr) {
    isMediaAddBgr.value = !isMediaAddBgr.value;
  }
}

function returnHome() {
  router.push({ name: "project" });
}

function setIconMenu(name: string) {
  if (name === "Личный ассистент") return "chat";
  if (name === "Технические требования") return "technical-requirements";
  if (name === "Правли размещения") return "scales";
  if (name === "Интеграция") return "integration";
}

provide("handlerBtnHeaderClick", returnHome);

onMounted(() => {
  projectService.getBackgrounds().then((res) => {
    const backgrounds = res.backgrounds;
    projectStore.backgroundsFill.push(...backgrounds);
    if (backgrounds.length > 1) {
      projectStore.backgroundsEmpty = [{ id: "0-emty", img: "", plus: true }];
    } else if (backgrounds.length === 1) {
      projectStore.backgroundsEmpty = [
        { id: "0-emty", img: "", plus: true },
        { id: "1-emty", img: "" },
      ];
    }
    finishLoadBgr = true;
  });
});
</script>

<style lang="scss" scoped>
.new-level {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
    &__control {
      width: 17%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .media {
      display: flex;
      margin-top: 16px;
      &__btn {
        width: 32px;
        height: 28px;
        background-image: url(@/assets/icons/image.svg);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        position: relative;
        &:hover {
          background-image: url(@/assets/icons/image-hover.svg);
          &::before {
            opacity: 1;
          }
        }
        &::before {
          content: "Добавить медиа";
          font-family: JuraMedium;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 100%);
          color: white;
          text-wrap: nowrap;
          opacity: 0;
          transition: opacity 0.3s;
        }
      }
    }
  }
  &__header {
    display: flex;
    &__btn {
      width: 32px;
      height: 28px;
      background-image: url(@/assets/icons/pen.svg);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      position: relative;
      &:hover {
        background-image: url(@/assets/icons/pen-hover.svg);
        &::before {
          opacity: 1;
        }
      }
      &::before {
        content: "Редактировать информацию";
        font-family: JuraMedium;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        color: white;
        opacity: 0;
        transition: opacity 0.3s;
        text-align: center;
      }
    }
  }
  &__title {
    color: white;
    font-family: JuraSemiBold;
    font-size: 4.6vh;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -1.5px;
    width: 66%;
    margin: 0 auto;
  }
  &__text {
    display: flex;
    align-items: center;
    margin-top: 3.3vh;
    width: 100%;
    border-radius: 8px;
    padding: 0 0.8vw;
    &_wrap {
      width: 66%;
    }
    &-wrt {
      background-color: #f9f9f9;
    }
    &_address {
      color: rgba(255, 255, 255, 0.85);
      font-family: JuraSemiBold;
      font-size: 3.5vh;
      font-style: normal;
      line-height: 125%;
      letter-spacing: -0.76px;
      &-wrt {
        color: #191919;
      }
    }
  }
  &__description {
    margin-top: 1.48vh;
    display: flex;
    flex-direction: column;
    row-gap: 1.48vh;
    &_text {
      color: rgba(255, 255, 255, 0.85);
      font-family: JuraMedium;
      font-size: 2.5vh;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.56px;
    }
  }
  .assistant {
    margin-top: 3.3vh;
    display: flex;
    &__btn {
      width: 32px;
      height: 28px;
      background-image: url(@/assets/icons/upload.svg);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      position: relative;
      &_big {
        position: relative;
        bottom: 22vh;
      }
      &:hover {
        background-image: url(@/assets/icons/upload-hover.svg);
        &::before {
          opacity: 1;
        }
      }
      &::before {
        content: "Загрузка файлов";
        font-family: JuraMedium;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        color: white;
        opacity: 0;
        transition: opacity 0.3s;
        text-align: center;
      }
    }
    &__btns {
      width: 17%;
      height: 31vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      &_btn {
        width: 70%;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      &_check {
        background-image: url(@/assets/lvel/check.png);
      }
      &_import {
        background-image: url(@/assets/lvel/import.png);
      }
      &_share {
        background-image: url(@/assets/lvel/share.png);
      }
      &_faq {
        background-image: url(@/assets/lvel/faq.png);
      }
      &_delete {
        background-image: url(@/assets/lvel/delete.png);
      }
    }
  }
  &__assistant {
    position: relative;
    display: flex;
    align-items: center;
    width: 66%;
    height: 31vh;
    border-radius: 24px;
    background-color: rgba(0, 0, 0, 0.1);
    &_big {
      position: relative;
      bottom: 49vh;
      height: 80vh;
    }
    &_expand {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 2.2vh;
      height: 2.2vh;
      cursor: pointer;
    }
    &_menu {
      position: relative;
      width: 35%;
      height: 100%;
      padding: 2.5vh 1.04vw 4.07vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      row-gap: 1vh;

      &_big {
        top: 22vh;
      }
      &_item {
        display: flex;
        align-items: center;
        column-gap: 0.8vw;
        padding: 12px 24px;
        cursor: pointer;
        border-radius: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.65);
        color: #f9f9f9;
        font-family: JuraSemiBold;
        font-size: 1.6vh;
        line-height: 100%;
        letter-spacing: -0.36px;
        &_icon {
          width: 2.2vh;
          height: 2.2vh;
        }
        &:hover {
          text-shadow: 0 12px 12px rgba(0, 0, 0, 0.48);
          background-color: rgba(255, 255, 255, 0.03);
        }
      }
    }
    &_chat {
      position: relative;
      width: calc(65% - 0.74vh);
      height: calc(100% - 1.48vh);
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.25);
      margin: 0.74vh 0.74vh 0.74vh 0;
      box-sizing: border-box;
      &_big {
        height: 80vh;
        bottom: 25vh;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(22.5px);
      }
      &_input {
        height: 5vh;
        border: none;
        border-radius: 16px;
        background-color: rgba(0, 0, 0, 0.55);
        padding: 16px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: scroll;
        resize: none;
        overflow: hidden;
        color: rgba(255, 255, 255, 0.65);
        font-family: JuraBold;
        font-size: 1.296vh;
        line-height: 100%;
        &:focus-visible {
          outline: none;
        }
        &::placeholder {
          color: rgba(255, 255, 255, 0.65);
          font-family: JuraBold;
          font-size: 1.296vh;
          line-height: 100%;
        }
        &_big {
          background: rgba(255, 255, 255, 0.75);
          color: #2a2a2a;
          &::placeholder {
            color: #2a2a2a;
          }
        }
      }
      &_button {
        position: absolute;
        right: 16px;
        bottom: 2.5vh;
        border-radius: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.65);
        background-color: rgba(0, 0, 0, 0.35);
        padding: 1.48vh 1.6vh;
        color: #f9f9f9;
        font-family: JuraSemiBold;
        font-size: 1.6vh;
        line-height: 100%;
        letter-spacing: -0.36px;
        cursor: pointer;
        // &:hover {
        //   text-shadow: 0 1px 1px rgba(255, 255, 255, 0.18);
        //   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.59),
        //     0 2px 5px rgba(0, 0, 0, 0.44);
        // }
      }
    }
  }
}
</style>
