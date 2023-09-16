<template>
  <input
    class="file-input"
    type="file"
    multiple
    @change="filesInsertion(saveFailesProject, getFilteredFileProject)"
    ref="fileInputProject"
    accept="*"
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
            <!-- Поддерживаемые форматы: *3dm, *fbx, *dwg -->
            Поддерживаемые форматы: *
          </div>
          <div v-if="rootStore.loaderFile" class="add-file-prg__loader-file">
            <div class="add-file-prg__loader-file__title">
              First place with spiral stairway
            </div>
            <LoaderFileComponent
              :loadPercentage="rootStore.loaderFilePercentage"
            />
          </div>
          <!-- <img
            src="@/assets/icons/upload-prj.svg"
            width="48"
            height="48"
            alt="upload"
          /> -->
        </div>
        <!-- <div class="add-file-prg_elem add-file-prg_elem-preview">
          <div class="add-file-prg_elem_title">Предпросмотр</div>
        </div>
        <div class="add-file-prg_elem add-file-prg_elem-preview">
          <div class="add-file-prg_elem_title">Информация</div>
        </div> -->
      </div>
      <div class="add-file-prg_title">Загрузите файлы проекта</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoaderFileComponent from "@/components/common/LoaderFileComponent.vue";
import type { Ref } from "vue";
import { ref } from "vue";
import {
  fileInput,
  filesInsertion,
  browseFile,
  filesProcessing,
} from "@/utils/file";
import projectService from "@/services/projectService";
import { useRootStore } from "@/store";
import { useProjectStore } from "@/store";

const rootStore = useRootStore();
const projectStore = useProjectStore();

const props = defineProps<{
  projectId: number;
}>();

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
  projectService.uploadFileProject(props.projectId, filteredFiles);
}

function getFilteredFileProject(file: File) {
  // if (/\.(3dm|fbx|dwg|3DM|FBX|DWG)$/.test(file.name)) {
  //   console.log(file);
  //   // return null;
  //   return file;
  // }
  // rootStore.popupWarning = true;
  // rootStore.titleWarning = "Неподдерживаемый формат файла";
  // rootStore.textWarning = "Поддерживаемые форматы:  *3dm, *fbx, *dwg";
  // return null;

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
  &__loader-file {
    padding: 0 1.6vw;
    width: 100%;
    &__title {
      color: rgba(255, 255, 255, 0.75);
      font-family: JuraMedium;
      font-size: 1.85vh;
      line-height: 140%;
      letter-spacing: -0.4px;
      margin-top: 2.96vh;
      margin-bottom: 1.48vh;
    }
  }
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
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: repeat(2, 1fr);
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
      align-items: flex-start;
      justify-content: flex-start;
      background-image: url(https://localhost:8080/img/upload-prj.cfc97225.svg);
      background-position: center;
      background-size: 48px 48px;
      background-repeat: no-repeat;
      cursor: pointer;
      flex-direction: column;
      // grid-area: 1 / 1 / span 2 / span 2;
    }
    &_title {
      // position: absolute;
      margin-top: 1.48vh;
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
