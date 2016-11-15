<script>
  import mapRange from 'helpers/mapRange.js'

  export default {
    name: 'timerBar',
    props: {
      time: {
        required: true,
      },
      maxTime: {
        required: true,
      },
    },
    computed: {
      width() {
        return `${Math.round(mapRange([0, this.maxTime], [100, 0], this.maxTime - this.time))}%`
      },
    },
    data() {
      return {

      }
    },
  }

</script>

<template lang="jade">
div.timer-bar
  span.bar(:style="{width: width}")
  slot
</template>


<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";

  .timer-bar {
    @include position();
    .bar {
      pointer-events: none;
      @include position(absolute, 0 null 0 0);
      background-color: rgba(0,0,0,.2);
      z-index: 1;
      transition: width .3s ease-in-out;
    }
  }
</style>
