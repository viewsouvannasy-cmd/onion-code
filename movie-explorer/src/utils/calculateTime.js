export function calculateTime(time) {
  const hour = String(time / 60).slice(0, 1);
  const minute = time - hour * 60;
  return `${hour}h ${minute}m`;
}
