<template>
  <div class="start-view">
    <div class="start-view__backdrop">
      <HeaderComponent />
      <!-- 'start-view__content_login':
        rootStore.isActiveLoginPopup && !rootStore.isActiveSearchPopup, -->
      <div
        :class="[
          'start-view__content',
          {
            'start-view__content_search':
              rootStore.searchStartHover && !rootStore.popuplogin,
          },
        ]"
      >
        <div v-if="rootStore.popuplogin" class="login-back">
          <div class="login-back__empty">
            <div class="login-back__title">Добро пожаловать!</div>
            <div class="login-back__form">
              <div
                class="login-back__agreement"
                @click="rootStore.popupPersonalData = true"
              >
                При начале авторизации пользователь подтверждает, что
                ознакомился с политикой конфиденциальности и дает согласие на
                обработку персональных данных.
              </div>
              <div
                class="login-back__agreement"
                @click="rootStore.popupTermsUser = true"
              >
                При начале авторизации пользователь подтверждает, что
                ознакомился с правилами платформы и согласен с пользовательским
                соглашением
              </div>
            </div>
          </div>
        </div>
        <Transition name="login">
          <LoginForm
            v-if="
              rootStore.isActiveLoginPopup && !rootStore.isActiveSearchPopup
            "
            absolutePos
          />
        </Transition>
        <div class="card-cntner">
          <!-- :isHover="rootStore.appStartHover && !rootStore.popuplogin" -->
          <CardComponent
            @click="handlerClickApp"
            :isHover="rootStore.appStartHover && !rootStore.popuplogin"
            :isLogin="rootStore.isActiveLoginPopup"
            :isSearch="rootStore.isActiveSearchPopup && !rootStore.popuplogin"
            loginPosX="2.5vw"
            searchPosX="2.5vw"
            backgroundImage="app.jpg"
            name="Приложение"
            text="Каждая деталь важна: Визуализация 3D с Unreal Engine 5"
          />
          <div
            :class="[
              'lolki',
              {
                'lolki-up':
                  rootStore.isHoverCard || rootStore.isActiveSearchPopup,
              },
            ]"
          >
            Приложение
          </div>
        </div>
        <div class="card-cntner">
          <CardComponent
            @click="handlerClickProject"
            :isHover="rootStore.projectStartHover && !rootStore.popuplogin"
            :isLogin="rootStore.isActiveLoginPopup"
            :isSearch="rootStore.isActiveSearchPopup && !rootStore.popuplogin"
            backgroundImage="projects-auth.jpg"
            name="Проекты"
            text="Управляйте пространством: создайте свое приложение создания интерьеров Unreal Engine 5"
          />
          <div
            :class="[
              'lolki',
              {
                'lolki-up':
                  rootStore.isHoverCard || rootStore.isActiveSearchPopup,
              },
            ]"
          >
            Проекты
          </div>
        </div>
        <div class="card-cntner">
          <CardComponent
            @click="handlerClickStreaming"
            :isHover="rootStore.streamingStartHover && !rootStore.popuplogin"
            :isLogin="rootStore.isActiveLoginPopup"
            :isSearch="rootStore.isActiveSearchPopup && !rootStore.popuplogin"
            loginPosX="-2.5vw"
            searchPosX="-2.5vw"
            backgroundImage="streaming-new.jpg"
            name="Стриминг"
            text="3D миры в реальном времени: Онлайн стриминг с by Talent"
          />
          <div
            :class="[
              'lolki',
              {
                'lolki-up':
                  rootStore.isHoverCard || rootStore.isActiveSearchPopup,
              },
            ]"
          >
            Стриминг
          </div>
        </div>
      </div>
    </div>
    <FAQControl />
    <Transition name="test">
      <SearchComponent
        v-if="rootStore.isActiveSearchPopup && !rootStore.popuplogin"
        class="test"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useRootStore } from "@/store";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import CardComponent from "@/components/start/CardComponent.vue";
import SearchComponent from "@/components/common/SearchComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

const router = useRouter();
const rootStore = useRootStore();

rootStore.hiddenHeader = true;

async function handlerClickApp() {
  await router.push({ name: "app" });
}
async function handlerClickProject() {
  await router.push({ name: "project-main" });
}
async function handlerClickStreaming() {
  await router.push({ name: "streaming" });
}
</script>

<style lang="scss" scoped>
.card-cntner {
  position: relative;
}
.lolki {
  position: absolute;
  left: 50%;
  translate: -50% 0;
  color: rgba(255, 255, 255, 0.85);
  font-family: JuraSemiBold;
  font-size: 4.6vh;
  line-height: 125%;
  letter-spacing: -1.5px;
  text-align: center;
  transition: all 0.6s;
  &-up {
    opacity: 0;
    transform: translateY(-100%);
  }
}
.test {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.login-back {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: #191919;
  animation: login-back-active 0.6s linear;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  transition: all 0.6s;
  &__title {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-family: JuraMedium;
    font-size: 2.592vh;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.56px;
  }
  &__empty {
    display: flex;
    height: calc(200px + 2.592vh + 180px);
    width: 26vw;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 130px;
  }
  &__form {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    align-items: center;
  }
  &__agreement {
    width: 310px;
    padding: 0 16px;
    color: rgba(255, 255, 255, 0.65);
    font-family: JuraMedium;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.48px;
    cursor: pointer;
  }
  @keyframes login-back-active {
    0% {
      height: 44.1vh;
      width: 26vw;
    }
    100% {
      width: 100vw;
      height: 100vh;
    }
  }
}
.start-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url(@/assets/backgrounds/visualization-first.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__content {
    position: fixed;
    top: 50%;
    translate: -50% -50%;
    display: flex;
    align-items: center;
    -moz-column-gap: 2.5vw;
    column-gap: 2.5vw;
    transition: all 0.6s;
    left: 50%;
  }
}
</style>
