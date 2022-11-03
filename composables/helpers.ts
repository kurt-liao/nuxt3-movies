export function formatTime(min: number) {
  const hours = Math.floor(min / 60)

  const leftMin = min % 60

  return `${hours ? `${hours}h` : ''} ${leftMin}min`
}

export function debounce(func, delay = 250) {
  let timer = null

  return () => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments

    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}
