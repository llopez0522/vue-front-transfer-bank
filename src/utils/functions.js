export function round (value) {
  return Math.round(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
