<template>
  <!--含有相同头部的页面-->
  <div class="container">
    <header-main></header-main>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderMain from '../components/Header/HeaderMain'

  export default {
    name: 'Index',
    components: {
      HeaderMain
    }
  }
</script>
