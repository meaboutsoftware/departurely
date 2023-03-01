export function formatTime(time: string): string {
  return new Date(time).toLocaleTimeString("de", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getHoursPartString(hoursPart: number) {
  return `${hoursPart}h`;
}

function validateInputDuration(duration: string) {
  const durationRegex = /^(\d+d)?(\d{2}):(\d{2}):(\d{2})$/;

  return durationRegex.exec(duration);
}

export function formatDuration(duration: string): string {
  const match = validateInputDuration(duration);
  if (!match) {
    return "Invalid Duration";
  }

  const days = Number.parseInt(match[1], 10) || 0;
  const hours = Number.parseInt(match[2], 10) || 0;
  const minutes = Number.parseInt(match[3], 10) || 0;

  const totalMinutes = days * 24 * 60 + hours * 60 + minutes;

  if (totalMinutes === 0) {
    return `0 min(s)`;
  }

  if (totalMinutes < 60) {
    return `${totalMinutes}min(s)`;
  }

  const hoursPart = Math.floor(totalMinutes / 60);
  const minutesPart = totalMinutes % 60;

  if (minutesPart === 0) {
    return `${getHoursPartString(hoursPart)}`;
  }

  return `${getHoursPartString(hoursPart)} ${minutesPart}min(s)`;
}
