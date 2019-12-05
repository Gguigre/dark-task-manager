export const computeDuration = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const date1Number = Number(date1);
  const date2Number = Number(date2);

  const hours = Math.floor(Math.abs(date1Number - date2Number) / 36e5);
  const minutes = Math.floor((Math.abs(date1Number - date2Number) / 60e3) % 60);
  const seconds = Math.floor((Math.abs(date1Number - date2Number) / 1e3) % 60);
  const duration = { hours, minutes, seconds };
  return duration;
};

export const computeDurationFromNow = (startTime: Date) => {
  const now = new Date();

  return computeDuration(now, startTime);
};
