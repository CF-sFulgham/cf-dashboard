import isWithinInterval from 'date-fns/isWithinInterval';
import { removeDashes } from '@utils/date'

export default function isWithinRange(today, start, end) {
  return isWithinInterval(new Date(), {start: new Date(removeDashes(start)), end: new Date(removeDashes(end))})
}
