export function formatHour(date: Date) {
  let hour = date.getUTCHours().toString();
  let minute = date.getUTCMinutes().toString();

  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");

  return `${hour}:${minute}`;
}
