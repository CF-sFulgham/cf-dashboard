import isAfter from 'date-fns/isAfter'
import { removeDashes } from '@utils/date'

export default function isAfterDate(compareDate) {
  return isAfter(new Date(), new Date(removeDashes(compareDate)))
}
