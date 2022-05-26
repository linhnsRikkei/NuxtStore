<script>
import Container from '../../../components/productList/Container.vue';
import HeaderProductList from '../../../components/productList/HeaderProductList.vue';
export default {
  layout: 'userLayout',
  components: {
    Container,
    HeaderProductList
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi')
  }
};
</script>
<template>
  <div class="w-full font-sans">
    <div class="w-full pt-[50px] bg-[#f2f2f2] flex flex-row justify-center">
      <HeaderProductList />
    </div>
    <div class="w-full flex flex-row justify-center mt-[20px]">
      <Container :idLoai="this.$route.params.id"/>
    </div>
  </div>
</template>
