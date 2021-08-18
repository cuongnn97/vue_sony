function stringToDate(string) {
  const date = string.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
  return date;
}
function dateToString(date) {
  const string = date.replaceAll("-", "")
  return string
}
export default {
  StringToDate: stringToDate,
  DateToString: dateToString,
};
