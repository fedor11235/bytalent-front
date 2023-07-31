<template>
  <div class="new-level">
    <Transition name="fade">
      <PopupLavel v-if="isShowPopup" @close="isShowPopup = false" />
    </Transition>
    <div class="new-level__backdrop"></div>
    <div class="new-level__content">
      <HeaderComponent
        urlButton="header/main.png"
        urlButtonHover="header/main.png"
        type="burger"
        :isTitleButton="true"
        @switch="rootStore.infoPage = !rootStore.infoPage"
      />
      <div class="media">
        <div class="new-level__content__control">
          <div @click="isMediaAdd = !isMediaAdd" class="media__btn"></div>
        </div>
        <div class="carousel">
          <div
            @click="handlerLeftMove"
            class="carousel__arrow carousel__arrow-left"
          ></div>
          <div class="sliders" ref="sliders">
            <img
              class="carousel__img"
              v-for="img in imgs"
              :key="img.id"
              @click="handlerShowPopup"
              :src="require(`@/assets/lvel/${img.img}`)"
              alt="img"
            />
          </div>
          <div
            @click="handlerRightMove"
            class="carousel__arrow carousel__arrow-right"
          ></div>
        </div>
        <Transition name="fade">
          <div v-if="isMediaAdd" class="media__add">
            <img
              class="media__add_icon"
              src="@/assets/lvel/clip.png"
              alt="add"
            />
            Добавление медиа файлов<br />
            (Нажмите для выбора, либо перетащите файлы в<br />данное поле)
            <br /><br />
            jpg/png/gif/mp4/mov
          </div>
        </Transition>
      </div>
      <div class="new-level__info">
        <div class="new-level__header">
          <div class="new-level__content__control">
            <div class="new-level__header__btn"></div>
          </div>
          <div>
            <div class="new-level__title">Новый уровень</div>
            <div class="new-level__text">Адрес</div>
          </div>
        </div>
      </div>
      <div class="assistant">
        <div class="new-level__content__control">
          <div
            :class="['assistant__btn', { assistant__btn_big: isExpand }]"
          ></div>
        </div>
        <div
          :class="[
            'new-level__assistant',
            { 'new-level__assistant_big': isExpand },
          ]"
        >
          <div
            :class="[
              'new-level__assistant_menu',
              { 'new-level__assistant_menu_big': isExpand },
            ]"
          >
            <div
              class="new-level__assistant_menu_item"
              v-for="item of menu"
              :key="item"
            >
              {{ item }}
            </div>
          </div>
          <div class="new-level__assistant_chat">
            <textarea class="new-level__assistant_chat_input"></textarea>
            <img
              @click="isExpand = !isExpand"
              src="@/assets/icons/expand.png"
              alt="expand"
              class="new-level__assistant_expand"
            />
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
import type { Ref } from "vue";
import { provide, ref } from "vue";
import { useRootStore } from "@/store";
import { useRouter } from "vue-router";

import PopupLavel from "@/components/newLavel/PopupLavel.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

const router = useRouter();
const rootStore = useRootStore();

const menu = [
  "Личный ассистент",
  "Технические требования",
  "Правли размещения",
  "Интеграция",
];

const imgs = [
  {
    id: 1,
    img: "carousel.jpeg",
  },
  {
    id: 2,
    img: "carousel.jpeg",
  },
  {
    id: 3,
    img: "carousel.jpeg",
  },
  {
    id: 4,
    img: "carousel.jpeg",
  },
];

const widthSlid = 33.75;
let move = 0;

const sliders: Ref<HTMLDivElement | null> = ref(null);
const isShowPopup = ref(false);
const isMediaAdd = ref(false);
const isExpand = ref(false);

function handlerShowPopup() {
  isShowPopup.value = true;
}

function returnHome() {
  router.push({ name: "visualization-first" });
}

function handlerLeftMove() {
  move += widthSlid;
  if ((imgs.length - 1) * widthSlid <= move) {
    move = (imgs.length - 1) * -widthSlid;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

function handlerRightMove() {
  move -= widthSlid;
  if (imgs.length * -widthSlid >= move) {
    move = (imgs.length - 2) * widthSlid;
  }
  if (sliders.value) {
    sliders.value.style.transform = `translateX(${move}%)`;
  }
}

provide("handlerBtnHeaderClick", returnHome);
</script>

<style lang="scss" scoped>
.new-level {
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/backgrounds/lvel.jpeg);
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
      margin-top: 21px;
      &__add {
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        background-color: #1f1f1f;
        border: 1px solid rgba(70, 70, 70, 0.85);
        border-radius: 17px;
        box-shadow: inset 0 0 8px 2px rgba(122, 122, 122, 0.36),
          0 2px 8px rgba(0, 0, 0, 0.49);
        position: absolute;
        width: 66%;
        left: 50%;
        transform: translateX(-50%);
        height: 45vh;
        top: 10vh;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        font-family: JuraMedium;
        &_icon {
          width: 32px;
          height: 28px;
          opacity: 0.9;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: contain;
          margin-bottom: 12px;
        }
      }
      &__btn {
        width: 32px;
        height: 28px;
        opacity: 0.9;
        background-image: url(@/assets/lvel/clip.png);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        position: relative;
        &:hover {
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
      .carousel {
        position: relative;
        width: 66%;
        height: 27vh;
        overflow: hidden;
        .sliders {
          display: flex;
          column-gap: 1.25%;
          transition: transform 0.3s;
          height: 100%;
        }
        &__img {
          height: 100%;
          width: 32.5%;
          object-fit: cover;
          max-width: none;
          border-radius: 10px;
          box-shadow: 0 7px 8px -5px #000;
          cursor: pointer;
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
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          &:hover {
            opacity: 1;
          }
          &-left {
            z-index: 1;
            left: 12px;
            &::before {
              content: "";
              position: relative;
              left: 4px;
              width: 50%;
              height: 50%;
              border-top: 4px solid white;
              border-right: 4px solid white;
              transform: rotate(-135deg);
            }
          }
          &-right {
            right: 12px;
            &::before {
              content: "";
              position: relative;
              right: 4px;
              width: 50%;
              height: 50%;
              border-top: 4px solid white;
              border-right: 4px solid white;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
  &__header {
    display: flex;
    &__btn {
      width: 32px;
      height: 28px;
      opacity: 0.77;
      background-image: url(@/assets/lvel/pen.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      position: relative;
      &:hover {
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
    direction: ltr;
    color: #fff;
    letter-spacing: -2px;
    text-indent: 0%;
    text-shadow: 0 6px 7px #000;
    font-family: JuraMedium, sans-serif;
    font-size: 8vh;
    font-style: normal;
    font-weight: 400;
    line-height: 70%;
    text-align: left;
    margin: auto;
    padding: 21px 0;
  }
  &__text {
    text-align: left;
    margin: auto;
    color: #b6b6b6;
    letter-spacing: 1px;
    text-shadow: 0 6px 7px #000;
    font-family: OswaldExtraLight, sans-serif;
    font-size: 26px;
    font-weight: 200;
    line-height: 24px;
  }
  .assistant {
    margin-top: 21px;
    display: flex;
    &__btn {
      width: 32px;
      height: 28px;
      opacity: 0.77;
      background-image: url(@/assets/lvel/upload.png);
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
      height: 36vh;
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
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
    padding: 0.1vh 0.1vh 0.1vh 1vh;
    height: 36vh;
    opacity: 0.72;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    box-shadow: 0 2px 8px #000, inset 0 0 5px 2px rgba(255, 255, 255, 0.22);
    &_big {
      position: relative;
      bottom: 44vh;
      height: 80vh;
    }
    &_expand {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 27.33px;
      height: 25.96px;
      -o-object-fit: contain;
      object-fit: contain;
      opacity: 0.5;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
    &_menu {
      position: relative;
      bottom: 0;
      width: 31.5%;
      height: 36vh;
      padding-top: 1%;
      padding-bottom: 1%;
      padding-right: 1%;
      &_big {
        top: 22vh;
      }
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
        font-family: JuraMedium, sans-serif;
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
        right: 0;
        overflow-y: scroll;
        resize: none;
        overflow: hidden;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.35),
          inset 0 2px 5px rgba(255, 255, 255, 0.2);
        &:focus-visible {
          outline: none;
        }
      }
      &_button {
        padding: 8px 16px;
        text-align: center;
        background-color: #292929;
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 11px;
        position: absolute;
        font-family: Arial, sans-serif;
        bottom: 16px;
        right: 32px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
        display: flex;
        color: white;
        cursor: pointer;
        &:hover {
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.18);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.59),
            0 2px 5px rgba(0, 0, 0, 0.44);
        }
      }
    }
  }
}
</style>
