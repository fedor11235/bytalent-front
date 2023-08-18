<template>
  <div class="settings-view">
    <HeaderComponentAdditional class="settings-view__header" />
    <div class="settings-view__content">
      <div class="settings-view__left-panel">
      </div>
      <div class="settings-view__menu">
        <div v-for="item in menu" :key="item" class="settings-view__menu_item">
          <img class="settings-view__menu_img" :src="require(`@/assets/icons/${chooseIconMenu(item)}.svg`)" />
          {{ item }}
        </div>
      </div>
      <div class="settings-view__doc">
        © 2023 Все права защищены. Пользователь уведомлен, что любые материалы, размещенные на сайте, являются объектами интеллектуальной собственности АО «ГК Талент» (правообладателя). Пользователь не вправе без предварительного письменного разрешения правообладателя осуществлять какие-либо действия с объектами интеллектуальной собственности, в противном случае, правообладатель оставляет за собой право на взыскание штрафов, предусмотренных законодательством РФ, а также на обращение в компетентные органы за защитой своих прав и законных интересов.
      </div>
    </div>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
import HeaderComponentAdditional from "@/components/common/HeaderComponentAdditional.vue";
import FAQControl from "@/components/controls/FAQControl.vue";

const menu = [
  'Коммерция',
  'Личные дела',
  'Юридические данные',
  'Официальные ссылки',
  'Безопасность'
]

function chooseIconMenu(item: string) {
  if(item === 'Коммерция') return 'chat'
  if(item === 'Личные дела') return 'technical-requirements'
  if(item === 'Юридические данные') return 'scales'
  if(item === 'Официальные ссылки') return 'integration'
  if(item === 'Безопасность') return 'integration'
}
</script>

<style lang="scss" scoped>
.settings-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(17.5px);
  &__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__content {
    position: absolute;
    bottom: 0;
    height: calc(100% - 3.7vh - min(80px, 7.4vh));
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__left-panel {
    height: 100%;
    width: 53.3vw;
    background-image: url(@/assets/components/profile-left-panel.svg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2.5vh 3.125vw 7.2vh 6.66vw;
    box-sizing: border-box;
  }
  
  &__menu {
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2.2vh;
    width: 20.83vw;

    margin-left: 3.3vw;
    &_img {
      height: 1.6vw;
      width: 1.6vw;
      margin-right: 1.25vw;
    }
    &_item {
      display: flex;
      padding: 0.625vw 2.2vh;
      align-items: center;
      column-gap: 0.8vw;
      align-self: stretch;
      border-radius: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.65);

      color: #F9F9F9;
      font-family: JuraSemiBold;
      font-size: 1.6vh;
      line-height: 100%;
      letter-spacing: -0.36px;

      cursor: pointer;
    }
  }
  &__doc {
    color: #FFF;
    font-family: JuraSemiBold;
    font-size: 1.296vh;
    line-height: 100%;
    flex: 1 0 0;
    width: 27vw;

    position: absolute;
    bottom: 62px;
    left: 56.3vw;
  }
}
</style>
