<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/views/layout/components/Footer'
import Header from '@/views/layout/components/Header'
export default {
  name: 'LayOut',
  components: {
    Header,
    Footer
  }
}
</script>
