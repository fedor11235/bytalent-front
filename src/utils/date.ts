export function parseDateHMY(date: string) {
  const res = new Date(date);
  return `${res.getDay()}.${res.getMonth()}.${res.getFullYear()}`;
}

export function parseDateT(date: string) {
  const res = new Date(date);
  return `${String(res.getHours()).padStart(2, "0")}:${String(
    res.getMinutes()
  ).padStart(2, "0")}`;
}
