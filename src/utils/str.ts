export function getURLForFile(name: string, format: string) {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bytalent.ru/api"
      : "http://localhost:3000";
  return `${baseURL}/file/background/${name}.${format}`;
}

export function getURLForFilePoster(name: string) {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bytalent.ru/api"
      : "http://localhost:3000";
  return `${baseURL}/file/poster/${name}`;
}
