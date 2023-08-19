<template>
  <div v-if="notes" class="notes">
    <div class="notes__backdrop">
      <HeaderComponent />
      <div class="notes__contents">
        <div class="notes__info">
          <div class="notes__info_elem">
            Для качественного подключения вам необходимо стабильное интернет
            соединение
          </div>
          <div class="notes__info_elem">
            В правом углу вы можете выбрать переключение на мобильную версию
          </div>
          <div class="notes__info_elem">
            Для управления на телефоне используйте джойстики (левый -
            передвижение / правый - обзор)
          </div>
        </div>
        <img
          @click="HandkerClickConfirmLaunch"
          class="notes__btn"
          src="@/assets/components/launch-w.svg"
        />
      </div>
    </div>
  </div>
  <WelcomeLayout
    v-else
    bg="streaming-new"
    title="Подключите онлайн доступ к проекту"
    bgrDropColor="rgba(0, 0, 0, 0.55)"
    description="Доступ через бразуер к любому проекту"
    imgBtn="launch"
    :btnClick="HandkerClickLaunch"
  >
    <template v-slot:content-bottom>
      <FooterComponent
        :curentPages="0"
        :numberPages="0"
        textButton="+ Загрузить свой проект"
        colorTwoPages="#c7c7c7"
      />
    </template>
  </WelcomeLayout>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

const notes = ref(false);

function HandkerClickLaunch() {
  notes.value = true;
}

function HandkerClickConfirmLaunch() {
  alert("В разработке");
}

function handlerBtnFooterClick() {
  alert("В разработке");
}

provide("handlerBtnFooterClick", handlerBtnFooterClick);
</script>

<style lang="scss" scoped>
.notes {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/backgrounds/streaming-new.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(17.5px);
  }
  &__contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8.8vh;
    margin-top: 18.14vh;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    height: 30vh;
    width: 77vw;
    padding: 2.96vh 1.66vw;
    border-radius: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background-color: rgba(0, 0, 0, 0.55);
    &_elem {
      color: #f9f9f9;
      font-family: JuraMedium;
      font-size: 2.59vh;
      line-height: 100%;
      letter-spacing: -0.56px;
    }
  }
  &__btn {
    width: 15.625vw;
    height: 5.89vh;
    cursor: pointer;
  }
}
</style>
