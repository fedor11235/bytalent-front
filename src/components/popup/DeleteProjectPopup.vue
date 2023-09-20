<template>
  <div class="popup-delete_cntnr">
    <div class="popup-delete">
      <!-- <div @click="handlerClose" class="popup-delete__close"></div> -->
      <div class="popup-delete__text">Вы точно хотите удалить проект?</div>
      <div class="popup-delete__btns">
        <div @click="handlerClose" class="popup-delete__btn">Нет</div>
        <div @click="handlerConfirm" class="popup-delete__btn">Да</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import { useRouter } from "vue-router";
import projectService from "@/services/projectService";

const router = useRouter();
const rootStore = useRootStore();

function handlerClose() {
  rootStore.popupDelete = false;
}

async function handlerConfirm() {
  await projectService.deleteProject(rootStore.idActiveProject);
  rootStore.popupDelete = false;
  await router.push({ name: "project-main" });
}
</script>

<style lang="scss" scoped>
.popup-delete_cntnr {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9;
}
.popup-delete {
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  background-color: rgba(0, 0, 0, 0.35);
  box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  padding: 5.37vh 5.468vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  row-gap: 2.59vh;
  // &__close {
  //   height: 2.29vw;
  //   width: 2.29vw;
  //   right: 0.8vw;
  //   top: 1.48vh;
  //   cursor: pointer;
  //   background-image: url(@/assets/icons/close2.svg);
  //   background-size: 70%;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   position: absolute;
  //   border-radius: 50%;
  //   background-color: rgba(62, 62, 62, 0.35);
  // }
  &__text {
    color: white;
    font-family: JuraMedium;
    font-size: 2.59vh;
    line-height: 100%;
    letter-spacing: -0.56px;
  }
  &__btns {
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    display: flex;
    padding: 1.38vh 1.6vw;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 1.6vh;
    line-height: 100%;
    letter-spacing: -0.36px;
    cursor: pointer;
    margin-top: 2.2vh;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }
  }
}
</style>
