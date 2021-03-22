<template>
  <div>
    <OderHeader></OderHeader>
    <router-view></router-view>
    <OrderFooter></OrderFooter>
  </div>
</template>
<script>
import OderHeader from '@/views/order/components/Header'
import OrderFooter from '@/views/order/components/Footer'
export default {
  name: 'order',
  components: {
    OderHeader,
    OrderFooter
  }
}
</script>
