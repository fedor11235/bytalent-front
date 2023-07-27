<template>
  <div
    v-for="(elem, index) of profile"
    :key="elem + index"
    class="profile-row"
  >
    <span class="profile-row__name">{{ index }}</span>
    <span class="profile-row__value">{{ elem }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import profileService from "@/services/profileService";

const dropdown = [
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
  {
    text: "Выставлен счёт №0126 на сумму 150 050 рублей",
    date: "01.04.2024",
  },
];

const profile = ref([]);

profileService.getProfile().then((res) => (profile.value = res));
</script>

<style lang="scss" scoped>
.profile-row {
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
    color: rgba(255, 255, 255, .56);
    text-shadow: 0 3px 3px rgba(0, 0, 0, .93);
  }
  &__value {
    color: #fff;
    font-family: JuraMedium, sans-serif;
    font-size: 1.8vh;
  }
}
</style>
