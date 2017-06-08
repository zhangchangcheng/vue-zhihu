<template>
  <header class="header">
    <nav>
      <slot></slot>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderWrap',
    data() {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">
@import "../../assets/sass/lib/variable";
@import "../../assets/sass/lib/function";

.header {
  height: px2em(90);
  line-height: px2em(90);
  background: #1490F2;
}
</style>
