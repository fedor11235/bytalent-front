<template>
  <input
    class="file-input"
    type="file"
    @change="fileInsertion(saveFaileBgr, getFilteredFileBg)"
    ref="fileInputBgr"
    accept="image/*"
  />
  <div class="add-file-prg">
    <div class="add-file-prg_elem add-file-prg_elem-format">
      <div class="add-file-prg_elem_title">Поддерживаемые форматы: *3dm, *fbx, *dwg</div>
      <img src="@/assets/icons/upload-prj.svg" width="48" height="48" alt="upload"/>
    </div>
    <div class="add-file-prg_elem add-file-prg_elem-preview"><div class="add-file-prg_elem_title">Предпросмотр</div></div>
    <div class="add-file-prg_elem add-file-prg_elem-preview"><div class="add-file-prg_elem_title">Информация</div></div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import { fileInput, fileInsertion, browseFile } from "@/utils/file";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";

const rootStore = useRootStore();
const projectStore = useProjectStore();

const fileInputBgr: Ref<HTMLInputElement | null> = ref(null);

function handlerUploadBgr(enabled: boolean | undefined) {
  if (enabled && fileInputBgr.value) {
    fileInput.value = fileInputBgr.value;
    browseFile();
  }
}

function saveFaileBgr(filteredFile: File) {
  const fr = new FileReader();
  fr.onload = async () => {
    const fbase64 = fr.result;
    const backgroundNew = await projectService.postBackgrounds({
      file: filteredFile,
    });
    projectStore.backgroundsFill.push({
      id: backgroundNew.id,
      img: String(fbase64),
    });
    if (projectStore.backgroundsEmpty.length > 1) {
      projectStore.backgroundsEmpty.pop();
    }
  };
  fr.readAsDataURL(filteredFile);
}

function getFilteredFileBg(file: File) {
  if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
    return file;
  }
  rootStore.popupWarning = true;
  rootStore.textWarning = "неверный формат файла";
  return null;
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
  z-index: 2;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(17.5px);
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.25%;
  flex-shrink: 0;

  &_elem {
    position: relative;
    border-radius: 20px;
    background-color: #2A2A2A;
    &-format {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 1 / span 2 / span 2;
      cursor: pointer;
    }
    &-preview {

    }
    &_title {
        position: absolute;
        top: 1.48vh;
        left: 50%;
        transform: translateX(-50%);
        color:rgba(255, 255, 255, 0.75);
        font-family: JuraMedium;
        font-size: 1.85vh;
        line-height: 140%;
        letter-spacing: -0.4px;
      }
  }
}
</style>
