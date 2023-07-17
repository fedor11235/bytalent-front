<template>
  <div class="error">
    <div class="content">
      <img src="@/assets/error.svg" alt="error" />
      <div class="title">Page Not Found</div>
      <div class="text">
        The page you are looking for doesn&#x27;t exist or has been moved
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
.title {
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.content {
  width: 260px;
  text-align: center;
  flex-direction: column;
  display: flex;
}
.text {
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
</style>
