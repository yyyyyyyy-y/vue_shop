<template>
  <div>
    <LayOutHeader></LayOutHeader>
    <router-view></router-view>
    <LayOutFooter></LayOutFooter>
  </div>
</template>
<script>
import LayOutHeader from '@/views/layout/components/Header'
import LayOutFooter from '@/views/layout/components/Footer'
export default {
  name: 'layout',
  components: {
    LayOutHeader,
    LayOutFooter
  }
}
</script>
