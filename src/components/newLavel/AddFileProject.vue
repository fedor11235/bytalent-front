<template>
  <input
    class="file-input"
    type="file"
    multiple
    @change="filesInsertion(saveFailesProject, getFilteredFileProject)"
    ref="fileInputProject"
    accept="image/*,video/*"
  />
  <div
    @click.self="rootStore.popupAddProject = false"
    class="add-file-prg_bgdrop"
  >
    <div class="add-file-prg">
      <div class="add-file-prg_grid">
        <div
          class="add-file-prg_elem add-file-prg_elem-format"
          @click="handlerAddProject"
          @drop="handlerDropProject"
        >
          <div class="add-file-prg_elem_title">
            Поддерживаемые форматы: *3dm, *fbx, *dwg
          </div>
          <img
            src="@/assets/icons/upload-prj.svg"
            width="48"
            height="48"
            alt="upload"
          />
        </div>
        <div class="add-file-prg_elem add-file-prg_elem-preview">
          <div class="add-file-prg_elem_title">Предпросмотр</div>
        </div>
        <div class="add-file-prg_elem add-file-prg_elem-preview">
          <div class="add-file-prg_elem_title">Информация</div>
        </div>
      </div>
      <div class="add-file-prg_title">Загрузите файлы проекта</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import {
  fileInput,
  filesInsertion,
  browseFile,
  filesProcessing,
} from "@/utils/file";
// import projectService from "@/services/projectService";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";

const rootStore = useRootStore();
const projectStore = useProjectStore();

const fileInputProject: Ref<HTMLInputElement | null> = ref(null);

["dragover", "drop"].forEach(function (event) {
  document.addEventListener(event, function (evt) {
    evt.preventDefault();
    return false;
  });
});

function handlerAddProject() {
  if (fileInputProject.value) {
    fileInput.value = fileInputProject.value;
    browseFile();
  }
}
function saveFailesProject(filteredFiles: File[]) {
  projectStore.files = filteredFiles;
  // projectService.uploadFileProject(3, filteredFiles)
}

function getFilteredFileProject(file: File) {
  return file;
}

function handlerDropProject(event: DragEvent) {
  const filesInstance = event?.dataTransfer?.files;
  if (filesInstance) {
    filesProcessing(filesInstance, saveFailesProject, getFilteredFileProject);
  }
}
</script>

<style lang="scss" scoped>
.add-file-prg {
  position: absolute;
  width: 66%;
  left: 50%;
  transform: translateX(-50%);
  height: 80vh;
  bottom: 5vh;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(17.5px);
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  &_bgdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
  &_grid {
    height: calc(100% - 4.5vh);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.25%;
    flex-shrink: 0;
  }
  &_title {
    color: rgba(255, 255, 255, 0.75);
    font-family: JuraSemiBold;
    font-size: 3.5vh;
    line-height: 125%;
    letter-spacing: -0.76px;
    text-align: center;
  }
  &_elem {
    position: relative;
    border-radius: 20px;
    background-color: #2a2a2a;
    &-format {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 1 / span 2 / span 2;
      cursor: pointer;
    }
    &_title {
      position: absolute;
      top: 1.48vh;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, 0.75);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 140%;
      letter-spacing: -0.4px;
    }
  }
}
</style>
