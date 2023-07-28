export function createFormData(payload: any) {
  const formData = new FormData();
  for (const key of Object.keys(payload)) {
    formData.append(key, payload[key] ? payload[key] : "");
  }
  return formData;
}
