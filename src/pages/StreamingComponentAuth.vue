<template>
  <div>
    <div v-if="notes" class="notes">
      <div class="notes__backdrop">
        <EmptyComponent />
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
            @mouseover="handlerOverBtn"
            @mouseleave="handlerLeaveOverBtn"
            :src="require(`@/assets/btns/${choiceBtn('start')}`)"
            alt="serach"
          />
        </div>
      </div>
    </div>
    <WelcomeLayout
      v-else
      bg="streaming-new.jpg"
      title="Подключите онлайн доступ к проекту"
      bgrDropColor="rgba(0, 0, 0, 0.55)"
      description="Доступ через бразуер к любому проекту"
      imgBtn="start"
      :btnClick="HandkerClickLaunch"
      noHover
      isLine
      @finishLoad="emit('finish-load')"
    >
      <template v-slot:content-bottom>
        <FooterComponent
          :handlerBtnFooterClick="handlerBtnFooterClick"
          :curentPages="0"
          :numberPages="0"
          textButton="+ Подключить стриминг"
          colorTwoPages="#c7c7c7"
        />
      </template>
    </WelcomeLayout>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import { useRootStore } from "@/store";

const emit = defineEmits(["finish-load"]);

const rootStore = useRootStore();

rootStore.hiddenHeader = false;

const notes = ref(false);
const btnState = ref("default");

function choiceBtn(name: string) {
  if (btnState.value === "default") {
    return `${name}.svg`;
  }
  if (btnState.value === "hover") {
    return `${name}-hover.svg`;
  }
}

function handlerOverBtn() {
  btnState.value = "hover";
}

function handlerLeaveOverBtn() {
  btnState.value = "default";
}

function HandkerClickLaunch() {
  notes.value = true;
}

function HandkerClickConfirmLaunch() {
  notes.value = false;
  alert("В разработке");
}

function handlerBtnFooterClick() {
  alert("В разработке");
}
</script>

<style lang="scss" scoped>
.notes {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/backgrounds/streaming-new.jpg");
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
