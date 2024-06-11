export function formatHour(date: Date, addOneHour?: boolean) {
  let hour = date.getUTCHours().toString();
  let minute = date.getUTCMinutes().toString();

  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");

  if (addOneHour) {
    return `${Number(hour) + 1}:${minute}`;
  }

  return `${hour}:${minute}`;
}
