<template>
  <div class="header-container">
    <header-wrap>
      <div class="h-left">
        <a href="javascript:;" class="iconfont icon-category nav_item"></a>
      </div>
      <h1 class="nav_item">首页</h1>
      <div class="h-right">
        <a href="javascript:;" class="iconfont icon-remind nav_item"></a>
        <a href="javascript:;" class="iconfont icon-set nav_item"></a>
      </div>
    </header-wrap>
  </div>
</template>

<script>
import HeaderWrap from './HeaderWrap'
export default {
  name: 'HeaderMain',
  components: {
    HeaderWrap
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/lib/function";
@import "../../assets/sass/lib/flex";


nav {
  @include flexbox;
  @include justify-content(space-between);
  @include align-items(center);
  width: 100%;
  height: px2em(90);
  padding: 0 px2em(10);

  h1 {
    font-size: 16px;
    color: #fff;
  }
}

.h-left,
.h-right {
  height: px2em(90);
}

.nav_item {
  padding: 0 px2em(20);
}
</style>
