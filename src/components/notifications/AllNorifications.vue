<template>
  <div v-if="notifications">
    <div
      v-for="item in notifications"
      :key="item.date"
      class="notifications"
    >
      <span class="notifications_text">{{ item.text }}</span>
      <span class="notifications_date">{{ item.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import notificationsService from "@/services/notificationsService";

const notifications = ref();

notificationsService.getAllNotifications().then((res) => (notifications.value = res.notifications));
</script>

<style lang="scss" scoped>
.notifications {
  width: 80%;
  min-height: 40%;
  height: 100%;
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
