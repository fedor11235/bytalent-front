<template>
  <div class="add__visualization">
    <input
      class="file-input"
      type="file"
      multiple
      @change="filesInsertion(saveFailesProject)"
      ref="fileInputProject"
      accept="image/*"
    />
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
import type { Ref } from "vue";
import { ref } from "vue";
import { fileInput, filesInsertion, browseFile } from "@/utils/file";
import { useProjectStore } from "@/store";

const projectStore = useProjectStore();

const emit = defineEmits(["create", "close"]);

const fileInputProject: Ref<HTMLInputElement | null> = ref(null);

function saveFailesProject(filteredFiles: File[]) {
  projectStore.files = filteredFiles;
  emit("close");
}

function handlerCreate() {
  emit("create");
}
function handlerFile() {
  if (fileInputProject.value) {
    fileInput.value = fileInputProject.value;
    browseFile();
  }
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
