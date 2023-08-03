<template>
  <div class="add__visualization">
    <div class="add__visualization__title">Добавление визуализации</div>
    <div class="add__visualization__btns">
      <img
        @click="handlerCreate"
        class="add__visualization__btn"
        src="@/assets/components/create.svg"
        width="116"
        height="24"
        alt="create"
      />
      <img
        @click="handlerFile"
        class="add__visualization__btn"
        src="@/assets/components/file.svg"
        width="116"
        height="24"
        alt="file"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["create"]);

function handlerCreate() {
  emit("create");
}
function handlerFile() {
  console.log("file");
}
</script>

<style lang="scss" scoped>
.add__visualization {
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  align-items: center;
  &__title {
    color: black;
    font-family: JuraMedium;
    font-size: 33px;
    line-height: 125%;
    letter-spacing: -1.32px;
  }
  &__btns {
    display: flex;
    column-gap: 12px;
  }
  &__btn {
    cursor: pointer;
  }
}
</style>
