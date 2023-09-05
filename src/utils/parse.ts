export function parseTextSetting(setting: string) {
  if (!setting) {
    return "-";
  } else if (!/[^\s]/gim.test(setting)) {
    return "-";
  }
  return setting;
}
