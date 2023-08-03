<template>
  <div class="thank__visualization">
    <div class="thank__visualization__title">
      Спасибо за заявку, мы обязательно с вами свяжемся в ближайшее время
    </div>
    <img
      @click="emit('close')"
      class="thank__visualization__btn"
      src="@/assets/components/return.svg"
      height="24"
      width="116"
      alt="create"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.thank__visualization {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: stretch;
  width: 400px;
  &__title {
    color: white;
    font-family: JuraMedium;
    font-size: 33px;
    line-height: 125%;
    letter-spacing: -1.32px;
    text-align: left;
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
