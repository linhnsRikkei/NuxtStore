<script>
import CartInfo from '../../components/CartInfo/CartInfor.vue';
export default {
  layout: 'userLayout',
  middleware: ['check_auth', 'userAuth'],
  components: {
    CartInfo
  }
};
</script>
<template>
  <div>
    <CartInfo />
  </div>
</template>
