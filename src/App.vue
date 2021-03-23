<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from '@/storage/index'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },

  mounted () {
    storage.setItem('a', 1)
    // 覆盖原有的user模块
    storage.setItem('user', { a: 1 })
    // 向原有的user追加 adb:{a:1}
    storage.setItem('abc', { a: 1 }, 'user')
    // 清除
    storage.clear('a')
    // 清除user模块下面的 abc
    storage.clear('abc', 'user')
  }

}
</script>

<style lang="scss" scoped>

</style>
