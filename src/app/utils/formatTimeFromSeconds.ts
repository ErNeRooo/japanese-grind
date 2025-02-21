const formatTimeFromSeconds = (seconds: number): string => {
  if (seconds < 0) {
    console.warn(
      "provided negative value of seconds, time has been set to 00:00:00"
    );
    return "00:00:00";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default formatTimeFromSeconds;
