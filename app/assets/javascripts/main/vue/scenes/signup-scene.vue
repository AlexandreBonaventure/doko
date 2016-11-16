<script>
import sceneMixin from 'vue/mixins/scene'

import { updateUsager } from 'store/ressources'

module.exports = {
  name: 'SignupScene',
  mixins: [sceneMixin],
  methods: {
    updateUsager,
  },
}
</script>

<template lang="jade">

div.signup-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  form(novalidate, @submit.prevent="updateUsager({ prenom: 'Alex', nom: 'Geissmann', email: 'sw@sm.com'})")
    input(type="submit" value="ok")

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .question-scene {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $font-primary;
    padding-bottom: 20vh;

    .slide {
      height: 100vh;
      overflow: hidden;
      @include position(absolute, 0 0 0 0);
    }
    .slideitem {
      // padding-top: 10%;
      // cursor: pointer;
      // &:hover {
      //   opacity: .8;
      // }
      .questions {
        width: 80%;
        margin: 0 auto;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .questions {
      text-align: center;
      width: 80%;
      font-size: rem(40);
    }

    .record {
      width: 100%;
      @include position(absolute, 0 0 0 0);
      z-index: 5;
    }
    .description {
      font-size: rem(20);
    }
    .recordetiquette {
      // background-color: white;
      // padding: 10px;
      // @include position(absolute, null 0 0 null);
      @include position();
      // margin: 20px;
      text-indent: 40px;
      &:after {
        position: absolute;
        top: 50%;
        left: 20px;
        content: "";
        @include size(20px);
        transform: translate(-50%,-50%);
        border-radius: 100%;
        background: red;
        animation: blink-animation 1s steps(5, start) infinite;
      }
    }
    .recording {
      background-color: rgb(54,54,54);
      padding: 10px;
      color: white;
      height: 80px;
      z-index: 10;
      @include position(absolute, null 0 0 0);
      // &:after {
      //   position: absolute;
      //   top: 50%;
      //   left: 20px;
      //   content: "";
      //   @include size(20px);
      //   transform: translate(-50%,-50%);
      //   border-radius: 100%;
      //   background: red;
      //
      // }
    }
    .elapsedtime {
      color: white;
    }
    .infos {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }

</style>
