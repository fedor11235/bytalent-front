<template>
  <div class="contact__visualization">
    <div class="contact__visualization__title">Заказать визуализацию</div>
    <InputComponent
      v-model="name"
      placeholder="Как вас зовут"
      padding="10px 32px"
    />
    <InputComponent
      v-model="phone"
      placeholder="Ваш телефон"
      padding="10px 32px"
    />
    <InputComponent
      v-model="email"
      placeholder="Ваш email"
      padding="10px 32px"
    />
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
import InputComponent from "@/components/controls/InputComponent.vue";
import CheckboxComponent from "@/components/controls/CheckboxComponent.vue";
import orderService from "@/services/orderService";

const emit = defineEmits(["order"]);

const accept = ref(false);
const name = ref("");
const phone = ref("");
const email = ref("");

const btnActive = computed(
  () => accept.value && name.value && phone.value && email.value
);

function handlerOrder() {
  orderService.makeOrder({
    name: name.value,
    phone: name.value,
    email: name.value,
  });
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
