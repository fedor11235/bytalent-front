<template>
  <div v-for="(elem, index) of security" :key="elem + index" class="security-row">
    <span class="security-row__name">{{ index }}</span>
    <span v-if="index !== '2FA'" class="security-row__value">{{ elem }}</span>
    <span v-else-if="elem" class="security-row__value">{{ elem }}</span>
    <span v-else class="security-row__value">подключить</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import securityService from "@/services/securityService";

const security = ref([]);

securityService.getSecurity().then((res) => (security.value = res));
</script>

<style lang="scss" scoped>
.security-row {
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
}
</style>
