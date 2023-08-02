<template>
  <div v-if="comerce">
    <div class="comerce_header">Баланс: {{ comerce.balance }}</div>
    <div
      v-for="item in comerce.invoicePayments"
      :key="item.date"
      class="comerce"
    >
      <span class="comerce_text">{{ item.text }}</span>
      <span class="comerce_date"
        >{{ parseDateT(item.date) }}<br />{{ parseDateHMY(item.date) }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { parseDateHMY, parseDateT } from "@/utils/date";
import commerceService from "@/services/commerceService";

const comerce = ref();

commerceService.getCommerce().then((res) => (comerce.value = res));
</script>

<style lang="scss" scoped>
.comerce_header {
  width: 100%;
  min-height: 40%;
  background-color: #1f1f1f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: JuraMedium, sans-serif;
  font-size: 2.5vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
}
.comerce {
  padding: 12px 0;
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  &_text {
    width: 75%;
    color: #fff;
    font-weight: 300;
    display: flex;
    text-align: left;
    font-family: JuraMedium, sans-serif;
  }
  &_date {
    width: 25%;
    color: #757575;
    text-align: right;
    font-family: MontserratRegular400, sans-serif;
    font-size: 1.5vh;
    line-height: 15px;
  }
}
</style>
