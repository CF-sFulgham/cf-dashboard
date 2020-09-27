// https://date-fns.org/docs/format
import format from 'date-fns/format'

export default function formatDate(date) {
  return format(date, 'yyyy-MM-dd')
}

export function formatDateSlash(date) {
  return format(date, 'MM/dd/yyyy')
}

export function formatTime(date) {
  return format(date, 'hh:mm a')
}
