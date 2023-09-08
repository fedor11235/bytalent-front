import type { Ref } from "vue";
import { ref } from "vue";

export const fileInput: Ref<HTMLInputElement | null> = ref(null);

export function fileInsertion(
  callBack: (file: File) => void,
  getFilteredFile: (file: File) => null | File
) {
  if (fileInput.value?.files) {
    fileProcessing(fileInput.value.files[0], callBack, getFilteredFile);
  }
}

export function filesInsertion(
  callBack: (file: File[]) => void,
  getFilteredFile: (file: File) => null | File
) {
  if (fileInput.value?.files) {
    filesProcessing(fileInput.value.files, callBack, getFilteredFile);
  }
}

export function browseFile() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

export async function filesProcessing(
  files: FileList,
  callBack: (file: File[]) => void,
  getFilteredFile: (file: File) => null | File
) {
  const filteredFiles = [];
  for (const file of files) {
    if (!checkSizeCompatibleOne(file)) {
      console.error("the file is very large");
      return;
    }
    const filteredFile = getFilteredFile(file);
    if (!filteredFile) {
      clearFileInput();
      return;
    }
    filteredFiles.push(filteredFile);
  }
  callBack(filteredFiles);
  clearFileInput();
}

export async function fileProcessing(
  file: File,
  callBack: (file: File) => void,
  getFilteredFile: (file: File) => null | File
) {
  if (!checkSizeCompatibleOne(file)) {
    console.error("the file is very large");
    return;
  }
  const filteredFile = getFilteredFile(file);
  if (!filteredFile) {
    clearFileInput();
    return;
  }
  callBack(filteredFile);
  clearFileInput();
}

// проверка на размер
function checkSizeCompatibleOne(file: File) {
  // const sizeInMb = Number((file.size / (1024 * 1024)).toFixed(2));
  // if (sizeInMb > 5) {
  //   return false;
  // }
  return true;
}

function clearFileInput() {
  if (!fileInput.value) return;
  try {
    fileInput.value.value = "";
    if (fileInput.value.value) {
      fileInput.value.type = "text";
      fileInput.value.type = "file";
    }
  } catch (e) {
    console.error(e);
  }
}
