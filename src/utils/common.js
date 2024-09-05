import moment from 'moment'
export function getDaysInMonth(year, month) {
  let date = new Date(year, month)
  return moment(date).daysInMonth()
}

export function formatDate(date) {
  return moment(date).format('yyyy-MM-DD')
}

export function formatDateTime(date) {
  return moment(date).format('yyyy-MM-DD HH:mm:ss')
}
