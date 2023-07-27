<template>
  <div v-for="(elem, index) of legal" :key="elem + index" class="legal-row">
    <span class="legal-row__name">{{ index }}</span>
    <span v-if="elem" class="legal-row__value">{{ elem }}</span>
    <span v-else class="legal-row__img"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import legalService from "@/services/legalService";

const legal = ref([]);

legalService.getlegal().then((res) => (legal.value = res));
</script>

<style lang="scss" scoped>
.legal-row {
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
  &__img {
    background-image: url(@/assets/lvel/pen.png);
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    width: 6%;
    height: 20%;
  }
}
</style>
