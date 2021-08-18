function stringToDate(string) {
  const date = string.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
  return date;
}
export default {
  StringToDate: stringToDate
};
