<script>
import Container from '../../../components/productList/Container.vue';
import HeaderProductList from '../../../components/productList/HeaderProductList.vue';
import Header from '../../../components/Header.vue'
export default {
  components: {
    Container,
    HeaderProductList,
    Header
  }
};
</script>
<template>
  <div class="w-full font-sans">
    <Header />
    <div class="w-full pt-[50px] bg-[#f2f2f2] flex flex-row justify-center">
      <HeaderProductList />
    </div>
    <div class="w-full flex flex-row justify-center">
      <Container :idLoai="this.$route.params.id"/>
    </div>
  </div>
</template>
