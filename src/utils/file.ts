import type { Ref } from "vue";
import { ref } from "vue";

export const fileInput: Ref<HTMLInputElement | null> = ref(null);

export function fileInsertion(callBack: (file: File) => void) {
  if (fileInput.value?.files) {
    fileProcessing(fileInput.value.files[0], callBack);
  }
}

export function browseFile() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

export async function fileProcessing(
  file: File,
  callBack: (file: File) => void
) {
  if (!checkSizeCompatibleOne(file)) {
    console.error("the file is very large");
    return;
  }
  const filteredFile = getFilteredFile(file);
  if (!filteredFile) {
    return;
  }
  callBack(filteredFile);
  clearFileInput();
}

function checkSizeCompatibleOne(file: File) {
  const sizeInMb = Number((file.size / (1024 * 1024)).toFixed(2));
  if (sizeInMb > 5) {
    return false;
  }
  return true;
}

function getFilteredFile(file: File) {
  if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
    return file;
  }
  return null;
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
