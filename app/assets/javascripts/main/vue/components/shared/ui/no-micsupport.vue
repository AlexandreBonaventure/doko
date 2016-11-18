<script>

  export default {
    name: 'no-micsupport',
  }
</script>

<template lang="jade">

div.no-micsupport
  div.is-flex-center
    div.iconwrap
      icon(icon="no-mic", size="80", unit="px")
    div
      p
        b Bon, là, nous avons un problème.
      p Il faut un micro pour faire de la radio. C’est vraiment un élément important.
  hr
  a.link(href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&amp;hl=fr", target="_blank")
    p.little Changer de navigateur pour profiter pleinement de l'expérience
    p.like
        icon.radiodokoma(icon="radio-dokoma", size="120", unit="px")
        icon.coeur(icon="coeur", size="25", unit="px")
        icon.chrome(icon="logo-chromium", size="30", unit="px", :no-color="true")
          |chrome

</template>

<style lang="scss">
@import "rallye/base/utils/vendors";
@import "rallye/base/project/mixins";
@import "rallye/base/project/variables";
@import "animatewithsass/animate.scss";

  .no-micsupport{
    @include fadeIn();
    font-family: $font-primary;
    background: white;
    padding: 40px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    display: inline-block;
    .iconwrap {
      margin-right: 30px;
    }
    .like {
      opacity: .5;
      display: inline-block;
      // display: flex;
      // justify-content: space-around;
      // align-items: center;
      // width: 50%;
      margin: 0 auto;
      &:hover {
        opacity: 1;
      }
      * {
        margin: 0 5px;
      }
      width: auto;
    }
    .little {
      font-size: rem(12);
      text-align: center;
    }
    .link {
      text-align: center;
      display: block;
    }
    .coeur {
      opacity: .3;
    }
    .radiodokoma,.chrome {
      // flex: 0 0 40%;
      // text-align: center;
    }

  }
</style>
