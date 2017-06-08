<style lang="scss">
  .main {
    background-color: #f2f2f2;
    .home-swipe {
      height: 6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>


<template>
  <div class="main">
    <swipe class="home-swipe" v-if="swipeItem">
      <swipe-item v-for="(item, key) of swipeItem" :key="key">
        <a :href="item.url">
          <img v-lazy="item.thumbnail">
        </a>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  async created() {
    await this.fetchHomeSwipe()
  },
  computed: {
    ...mapState('home', [
      'swipeItem',
    ]),
  },
  methods: {
    ...mapActions({
      fetchHomeSwipe: 'home/fetchHomeSwipe'
    })
  },
  components: {

  }
}
</script>

