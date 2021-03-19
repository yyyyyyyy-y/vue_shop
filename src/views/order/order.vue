<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/views/order/components/Footer'
import Header from '@/views/order/components/Header'
export default {
  name: 'Name',
  components: {
    Header,
    Footer
  }
}
</script>
