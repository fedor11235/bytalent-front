<template>
  <div class="add__visualization">
    <div class="add__visualization__title">Новая визуализация</div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Название</span>
      <input
        class="add__visualization__enter__input"
        placeholder="Введите название"
      />
    </div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Адрес</span>
      <input
        class="add__visualization__enter__input"
        placeholder="Введите адрес"
      />
      <img
        class="add__visualization__enter__img"
        src="@/assets/icons/locate.svg"
        height="24"
        width="24"
        alt="locate"
      />
    </div>
    <div class="add__visualization__enter">
      <span class="add__visualization__enter__title">Тип проекта</span>
      <input
        class="add__visualization__enter__input"
        placeholder="Выберите тип проекта"
      />
      <img
        class="add__visualization__enter__img"
        src="@/assets/icons/drop.svg"
        height="24"
        width="24"
        alt="drop"
      />
    </div>
    <img
      @click="emit('create')"
      class="add__visualization__btn"
      src="@/assets/components/create-white.svg"
      height="24"
      width="116"
      alt="create"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["create"]);
</script>

<style lang="scss" scoped>
.add__visualization {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: stretch;
  width: 400px;
  &__title {
    color: black;
    font-family: JuraMedium;
    font-size: 33px;
    line-height: 125%;
    letter-spacing: -1.32px;
    text-align: center;
    margin-bottom: 32px;
  }
  &__enter {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    &__title {
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 100%;
      letter-spacing: -0.56px;
    }
    &__input {
      border: none;
      border-radius: 40px;
      background-color: rgba(255, 255, 255, 0.85);
      padding: 10px 32px;
      color: #191919;
      font-family: JuraMedium;
      font-size: 19px;
      line-height: 125%;
      letter-spacing: -0.76px;
      &::placeholder {
        color: #191919;
        font-family: JuraMedium;
        font-size: 19px;
        line-height: 125%;
        letter-spacing: -0.76px;
      }
      &:focus-visible {
        outline: none;
      }
    }
    &__img {
      position: absolute;
      right: 28px;
      bottom: 12px;
    }
  }
  &__btn {
    margin-top: 32px;
    margin-left: 100%;
    transform: translateX(-100%);
    cursor: pointer;
  }
}
</style>
