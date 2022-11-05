import LANGUAGES from '~/constants/language'

export function formatDate(str: string) {
  const dateArr = str.split('-')
  const date = dateArr[2].slice(0, 1) === '0' ? dateArr[2].slice(1, 1) : dateArr[2]
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return `${date} ${months[+dateArr[1] - 1]} ${dateArr[0]}`
}

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

export function numberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatLang(iso: string) {
  const fullLang = LANGUAGES.find(lang => lang.iso_639_1 === iso)

  if (fullLang)
    return fullLang.english_name

  return iso
}
