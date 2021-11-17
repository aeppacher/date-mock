export const getNextInterval = (secondsToSleep: number) => {
  const startTime = Date.now();

  const timeOfNextInterval = Date.now() + secondsToSleep * 1000;

  const nextInterval = new Date(timeOfNextInterval).toISOString();

  const endTime = Date.now();

  const duration = endTime - startTime;

  return { duration, nextInterval };
};
