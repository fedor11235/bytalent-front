<template>
  <div class="commerce" v-if="commerce">
    <div class="commerce-row commerce-balance">
      <span class="commerce-row__name">Баланс:</span>
      <span class="commerce-row__value">
        {{ commerce.balance }}
        <span class="commerce__top-up">Пополнить</span>
      </span>
    </div>
    <div class="commerce-row_item">
      <div
        v-for="(elem, index) of commerce.invoicePayments"
        :key="elem.id"
        class="commerce-row_list"
      >
        <span class="commerce-row__name">{{
          index === 0 ? "Счета к оплате" : ""
        }}</span>
        <span class="commerce-row__value">{{ elem.text }}</span>
      </div>
    </div>
    <div class="commerce-row_item">
      <div
        v-for="(elem, index) of commerce.operationsHistory"
        :key="elem.id"
        class="commerce-row_list"
      >
        <span class="commerce-row__name">{{
          index === 0 ? "История операций" : ""
        }}</span>
        <span class="commerce-row__value">{{ elem.text }}</span>
      </div>
    </div>
    <div class="commerce-row_item">
      <div
        v-for="(elem, index) of commerce.operationsHistory"
        :key="elem.id"
        class="commerce-row_list"
      >
        <span class="commerce-row__name">{{
          index === 0 ? "История операций" : ""
        }}</span>
        <span class="commerce-row__value">{{ elem.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import commerceService from "@/services/commerceService";

type CommerceSettings = {
  balance: number;
  invoicePayments: any[];
  operationsHistory: any[];
};

const commerce: Ref<CommerceSettings | null> = ref(null);

commerceService.getCommerce().then((res) => (commerce.value = res));
</script>

<style lang="scss" scoped>
.commerce {
  overflow-y: scroll;
  height: 100%;
  &__top-up {
    color: rgba(255, 255, 255, 0.72);
    margin-left: 4vh;
    text-decoration: underline;
    &:hover {
      color: #fff;
    }
  }
  &-balance {
    position: sticky;
    background-color: #252525;
    top: 0;
  }
  &-row {
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.85);
    width: 87%;
    height: 8vh;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-family: JuraMedium, sans-serif;
    font-size: 1.8vh;
    font-weight: 300;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin: auto;
    &_item {
      justify-content: center;
      align-items: center;
      font-family: JuraMedium, sans-serif;
      font-size: 1.8vh;
      font-weight: 300;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin: auto;
    }
    &_list {
      text-shadow: 0 3px 3px rgba(0, 0, 0, 0.85);
      width: 87%;
      height: 8vh;
      color: #fff;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      font-family: JuraMedium, sans-serif;
      font-size: 1.8vh;
      font-weight: 300;
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 8px;
      margin: auto;
    }
    &__name {
      font-size: 1.7vh;
      line-height: 2vh;
      color: rgba(255, 255, 255, 0.56);
      text-shadow: 0 3px 3px rgba(0, 0, 0, 0.93);
    }
    &__value {
      color: #fff;
      font-family: JuraMedium, sans-serif;
      font-size: 1.8vh;
    }
  }
}
</style>
