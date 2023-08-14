<template>
  <div class="add-file">
    <img class="add-file_icon" src="@/assets/lvel/clip.png" alt="add" />
    Добавление медиа файлов<br />
    (Нажмите для выбора, либо перетащите файлы в<br />данное поле) <br /><br />
    {{ formats }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  formats: string;
}>();
</script>

<style lang="scss" scoped>
.add-file {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: #1f1f1f;
  border: 1px solid rgba(70, 70, 70, 0.85);
  border-radius: 17px;
  box-shadow: inset 0 0 8px 2px rgba(122, 122, 122, 0.36),
    0 2px 8px rgba(0, 0, 0, 0.49);
  position: absolute;
  width: 66%;
  left: 50%;
  transform: translateX(-50%);
  height: 45vh;
  top: 10vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: JuraMedium;
  cursor: pointer;
  &_icon {
    width: 32px;
    height: 28px;
    opacity: 0.9;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 12px;
  }
}
</style>
