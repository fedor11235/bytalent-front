export function getURLForFile(name: string, format: string) {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bytalent.ru/api"
      : "http://localhost:3000";
  return `${baseURL}/file/background/${name}.${format}`;
}
