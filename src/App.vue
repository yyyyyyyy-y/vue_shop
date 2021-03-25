<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      res: {}
    }
  },

  mounted () {
    axios.get('/user/userInfo.json').then((res) => {
      this.res = res
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
