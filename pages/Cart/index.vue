<script>
import CartInfo from '../../components/CartInfo/CartInfor.vue';
import Header from '../../components/Header.vue'
export default {
  middleware: 'userAuth',
  components: {
    CartInfo,
    Header
  }
};
</script>
<template>
  <div>
    <Header />
    <CartInfo />
  </div>
</template>
