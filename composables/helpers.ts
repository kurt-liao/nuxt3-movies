export function formatTime(min: number) {
  const hours = Math.floor(min / 60)

  const leftMin = min % 60

  return `${hours ? `${hours}h` : ''} ${leftMin}min`
}
