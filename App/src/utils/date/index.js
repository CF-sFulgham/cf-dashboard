import formatDate, { formatDateSlash, formatTime } from '@utils/date/format-date'
import isWithinRange from '@utils/date/is-within-range'
import isAfterDate from '@utils/date/is-after'

const removeDashes = (date) => {
  return date.replace(/-/g, '\/')
}

export {
  formatDate,
  isWithinRange,
  formatDateSlash,
  formatTime,
  removeDashes,
  isAfterDate,
 }
