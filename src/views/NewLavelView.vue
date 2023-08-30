<template>
  <div v-if="finishLoad">
    <div v-if="project" class="new-level">
      <img
        v-if="bgr.type === 'img'"
        class="new-level__img"
        :src="bgr.content"
        alt="img"
      />
      <video
        v-else-if="bgr.type === 'video'"
        poster="@/assets/backgrounds/lvel.jpeg"
        volume="0.0"
        class="new-level__img"
        autoplay
        loop
        muted
      >
        <source :src="bgr.content" />
      </video>
      <div class="new-level__backdrop"></div>
      <div class="new-level__content">
        <EmptyComponent />
        <div v-if="IsModeAdrsWrt" class="new-level__title_input">
          <input v-model="name" />
        </div>
        <div v-else class="new-level__title">
          {{ name }}
        </div>
        <div class="media">
          <div class="new-level__content__control">
            <div @click="handlerOpenBgrPopup" class="media__btn"></div>
          </div>
          <CarouselComponent :projectId="Number(idProject)" />
        </div>
        <div class="new-level__info">
          <div class="new-level__header">
            <div class="new-level__content__control">
              <div class="new-level__header__btn" @click="handlerEdit"></div>
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
                  <input
                    v-if="IsModeAdrsWrt"
                    class="new-level__text_address-input"
                    v-model="address"
                  />
                  <div v-else>{{ address }}</div>
                </div>
              </div>
              <div class="new-level__description">
                <div
                  v-if="IsModeAdrsWrt"
                  class="new-level__description_text_input"
                >
                  <input v-model="info" />
                </div>
                <div v-else class="new-level__description_text">
                  {{ info }}
                </div>
                <div
                  v-if="IsModeAdrsWrt"
                  class="new-level__description_text_input"
                >
                  <input v-model="comments" />
                </div>
                <div v-else class="new-level__description_text">
                  {{ comments }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="assistant">
          <div class="new-level__content__control">
            <div @click="handlerOpenProjectPopup" class="assistant__btn"></div>
          </div>
          <div class="new-level__assistant">
            <div class="new-level__assistant_menu">
              <div
                :class="[
                  'new-level__assistant_menu_item',
                  {
                    'new-level__assistant_menu_item-active':
                      selectedMenu === item,
                  },
                ]"
                v-for="item of menu"
                :key="item"
                @click="selectedMenu = item"
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
              <div v-if="selectedMenu === 'Личный ассистент'">
                <textarea
                  :class="[
                    'new-level__assistant_chat_input',
                    { 'new-level__assistant_chat_input_big': isExpand },
                  ]"
                  placeholder="Введите текст"
                ></textarea>
                <div
                  @click="handlerSendCahnge"
                  class="new-level__assistant_chat_button"
                >
                  Отправить
                </div>
              </div>
              <div
                class="test"
                v-else-if="selectedMenu === 'Технические требования'"
              >
                Технические требования<br /><br />
                • Формат уровня Unreal Engine 5<br />
                • Максимальный размер уровня - 3 Гб<br />
                • Количество актеров в сцене &lt; 1000<br />
                • Максимальный пул текстур - 3Гб
              </div>
              <div
                class="test"
                v-else-if="selectedMenu === 'Правли размещения'"
              >
                Правли размещения<br /><br />
              </div>
              <div class="test" v-else-if="selectedMenu === 'Интеграция'">
                Интеграция<br /><br />
              </div>
            </div>
          </div>
          <div class="assistant__btns">
            <div class="assistant__btns_btn assistant__btns_check"></div>
            <div class="assistant__btns_btn assistant__btns_share"></div>
            <div
              @click="rootStore.FAQPopup = true"
              class="assistant__btns_btn assistant__btns_faq"
            ></div>
            <div class="assistant__btns_btn assistant__btns_delete"></div>
          </div>
        </div>
      </div>
    </div>
    <ErrorComponent v-else />
  </div>
  <LoadPage v-else />
</template>

<script setup lang="ts">
import { provide, ref, computed, onMounted } from "vue";
import { useProjectStore } from "@/store";
import { useRouter } from "vue-router";
import projectService from "@/services/projectService";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";
import CarouselComponent from "@/components/controls/CarouselComponent.vue";
import ErrorComponent from "@/pages/ErrorComponent.vue";
import LoadPage from "@/pages/LoadPage.vue";
import { useRootStore } from "@/store";
import { getURLForFile } from "@/utils/str";

const rootStore = useRootStore();

rootStore.hiddenHeader = false;
rootStore.noHover = true;

const props = defineProps<{
  idProject: string;
}>();

const router = useRouter();
const projectStore = useProjectStore();

const finishLoad = ref(false);
const selectedMenu = ref("Личный ассистент");

const menu = [
  "Личный ассистент",
  "Технические требования",
  "Правли размещения",
  "Интеграция",
];

const address = ref("Адрес проекта");
const name = ref("Новый уровень");
const info = ref("Описание объекта");
const comments = ref("Дополнительная информация");

const IsModeAdrsWrt = ref(false);
const isExpand = ref(false);

const projects = ref([]);
const project = ref();

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && IsModeAdrsWrt.value) {
    handlerEdit();
  }
});

const bgr = computed(() => {
  if (projectStore.background.projectId === Number(props.idProject)) {
    return projectStore.background;
  } else if (projectStore.project.background) {
    const background = projectStore.project.background;
    return {
      type: background.type,
      content: getURLForFile(background.name, background.format),
    };
  } else {
    return {
      type: "img",
      content: require("@/assets/backgrounds/lvel.jpeg"),
    };
  }
});

function handlerEdit() {
  IsModeAdrsWrt.value = !IsModeAdrsWrt.value;
  if (!IsModeAdrsWrt.value) {
    projectService.updateProject(props.idProject, {
      name: name.value,
      address: address.value,
      info: info.value,
      comments: comments.value,
    });
  }
}

function handlerSendCahnge() {
  console.log("отправить");
}

function handlerOpenBgrPopup() {
  if (finishLoad.value) {
    rootStore.popupAddBgr = true;
  }
}

function handlerOpenProjectPopup() {
  if (finishLoad.value) {
    rootStore.popupAddProject = true;
  }
}

function returnHome() {
  router.push({ name: "project-main" });
}

function setIconMenu(name: string) {
  if (name === "Личный ассистент") return "chat";
  if (name === "Технические требования") return "technical-requirements";
  if (name === "Правли размещения") return "scales";
  if (name === "Интеграция") return "integration";
}

provide("handlerBtnHeaderClick", returnHome);

onMounted(async () => {
  const projects = await projectService.getAllNumberProjects();
  projects.value = projects.projects;
  project.value = projects.value.find(
    (item: any) => item.id === Number(props.idProject)
  );
  projectStore.project = project.value;
  if (project.value) {
    address.value = project.value.address ?? "Адрес проекта";
    name.value = project.value.name ?? "Новый уровень";
    info.value = project.value.info ?? "Описание объекта";
    comments.value = project.value.comments ?? "Дополнительная информация";
  }
  const backgroundsResp = await projectService.getBackgrounds();
  const backgrounds = backgroundsResp.backgrounds;
  for (const background of backgrounds) {
    background.content = getURLForFile(background.name, background.format);
  }
  projectStore.backgroundsFill = backgrounds;

  if (backgrounds.length > 1) {
    projectStore.backgroundsEmpty = [
      { id: "0-emty", content: "", type: "empty", plus: true },
    ];
  } else if (backgrounds.length === 1) {
    projectStore.backgroundsEmpty = [
      { id: "0-emty", content: "", type: "empty", plus: true },
      { id: "1-emty", content: "", type: "empty" },
    ];
  }
  finishLoad.value = true;
});
</script>

<style lang="scss" scoped>
.test {
  padding: 0.74vh 1.6vw;
  color: #f9f9f9;
  font-family: JuraMedium;
  font-size: 1.85vh;
  line-height: 140%;
  letter-spacing: -0.4px;
}
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
  &__img {
    position: fixed;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
  }
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
      margin-top: 1.48vh;
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
    line-height: 125%;
    letter-spacing: -1.5px;
    width: 66%;
    margin: 0 auto;
    border-radius: 8px;
    &_input {
      width: 66%;
      margin: 0 auto;
      background-color: #f9f9f9;
      border-radius: 8px;
      input {
        border: none;
        outline: none;
        padding: 0;
        border-radius: 8px;
        font-family: JuraSemiBold;
        font-size: 4.6vh;
        line-height: 125%;
        letter-spacing: -1.5px;
        color: #191919;
        width: 100%;
      }
    }
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
      padding-bottom: 3.3vh;
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
      &-input {
        font-family: JuraSemiBold;
        font-size: 3.5vh;
        font-style: normal;
        line-height: 125%;
        letter-spacing: -0.76px;
        padding: 0;
        color: #191919;
        border: none;
        outline: none;
        height: 3.5vh;
        width: 100%;
      }
      &-wrt {
        color: #191919;
        width: 100%;
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
      height: 2.5vh;
      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;
      &_input {
        background-color: #f9f9f9;
        border-radius: 8px;
        height: 2.5vh;
        input {
          width: 100%;
          border: none;
          outline: none;
          padding: 0;
          border-radius: 8px;
          font-family: JuraSemiBold;
          font-size: 2.5vh;
          line-height: 125%;
          letter-spacing: -1.5px;
          color: #191919;
          height: 2.5vh;
        }
      }
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
      justify-content: flex-end;
      row-gap: 2.2vh;
      &_btn {
        width: 70%;
        height: 4.44vh;
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
        padding: 1.11vh 1.25vw;
        cursor: pointer;
        border-radius: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.65);
        color: #f9f9f9;
        font-family: JuraSemiBold;
        font-size: 1.6vh;
        line-height: 100%;
        letter-spacing: -0.36px;
        &-active {
          text-shadow: 0 12px 12px rgba(0, 0, 0, 0.48);
          background-color: rgba(255, 255, 255, 0.03);
        }
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
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(calc(-75vh + 31vh - 1.48vh));
        height: 75vh;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(22.5px);
      }
      &_input {
        height: 10vh;
        border: none;
        border-radius: 16px;
        background-color: rgba(0, 0, 0, 0.55);
        padding: 1.48vh 0.8vw;
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
