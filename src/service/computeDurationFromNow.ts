export const computeDurationFromNow = (startTime: number) => {
  const now = Number(new Date());

  const hours = Math.floor(Math.abs(now - startTime) / 36e5);
  const minutes = Math.floor((Math.abs(now - startTime) / 60e3) % 60);
  const seconds = Math.floor((Math.abs(now - startTime) / 1e3) % 60);
  const duration = { hours, minutes, seconds };
  console.log(`🚀: computeDurationFromNow -> duration`, duration);
  return duration;
};
