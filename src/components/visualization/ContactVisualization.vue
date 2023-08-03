<template>
  <div class="contact__visualization">
    <div class="contact__visualization__title">Зказать визуализацию</div>
    <div class="contact__visualization__enter">
      <input
        class="contact__visualization__enter__input"
        v-model="name"
        placeholder="Как вас зовут"
      />
      <img
        class="contact__visualization__enter__img"
        v-if="name"
        src="@/assets/icons/daw.svg"
        height="24"
        width="24"
        alt="daw"
      />
    </div>
    <div class="contact__visualization__enter">
      <input
        class="contact__visualization__enter__input"
        v-model="phone"
        placeholder="Ваш телефон"
      />
      <img
        class="contact__visualization__enter__img"
        v-if="phone"
        src="@/assets/icons/daw.svg"
        height="24"
        width="24"
        alt="daw"
      />
    </div>
    <div class="contact__visualization__enter">
      <input
        class="contact__visualization__enter__input"
        v-model="email"
        placeholder="Ваш email"
      />
      <img
        class="contact__visualization__enter__img"
        v-if="email"
        src="@/assets/icons/daw.svg"
        height="24"
        width="24"
        alt="daw"
      />
    </div>
    <div class="contact__visualization__btns">
      <CheckboxComponent height="21" width="21" v-model="accept" />
      <span class="contact__visualization__check-text"
        >Подтверждаю, что я ознакомлен с пользовательским соглашением и
        правилами обработки ПДН</span
      >
      <img
        v-if="btnActive"
        @click="handlerOrder"
        class="contact__visualization__btn"
        src="@/assets/components/order-active.svg"
        height="24"
        width="116"
        alt="create"
      />
      <img
        v-else
        class="contact__visualization__btn"
        src="@/assets/components/order.svg"
        height="24"
        width="116"
        alt="create"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CheckboxComponent from "@/components/common/CheckboxComponent.vue";

const emit = defineEmits(["order"]);

const accept = ref(false);
const name = ref("");
const phone = ref("");
const email = ref("");

const btnActive = computed(
  () => accept.value && name.value && phone.value && email.value
);

function handlerOrder() {
  emit("order");
}
</script>

<style lang="scss" scoped>
.contact__visualization {
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
    text-align: center;
    margin-bottom: 32px;
  }
  &__enter {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
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
  &__btns {
    display: flex;
    padding-left: 12px;
  }
  &__btn {
    cursor: pointer;
  }
  &__check-text {
    color: white;
    font-family: JuraMedium;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    letter-spacing: -0.48px;
    padding: 0 12px;
  }
}
</style>
