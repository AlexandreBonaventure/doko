<script>

  import { kebabCase, forOwn } from 'lodash4'

  export default {
    props: ['name', 'binding', 'components'],
    created() {
      const props = []
      if (this.binding) {
        // apply properties to component data
        forOwn(this.binding, (value, key) => {
          props.push(`:${kebabCase(key)}="binding['${key}']"`)
        })
      }
      this.$options.components = this.components
      this.$options.template = `<component :is="name" ${props.join(' ')}>

      </component>`
    },
  }
</script>
