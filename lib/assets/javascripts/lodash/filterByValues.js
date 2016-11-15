import { filter, includes } from 'lodash4'

export default function filterByValues(collection, key, filter_array) {
  return filter(collection, c => includes(filter_array, c[key]))
}
