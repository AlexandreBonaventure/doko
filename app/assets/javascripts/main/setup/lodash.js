
import _ from 'lodash4'

// import toggle from 'lodash/toggle'
// import filterByValues from 'lodash/filterByValues'
import insert from 'lodash/insert'

const mixins = {
  insert,
}
_.forEach(mixins, (v, k) => {
  _.mixin({
    [k]: v,
  })
})
