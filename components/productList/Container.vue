<script>
export default {
  props: ['idLoai'],
  computed: {
    getProduct() {
      return this.$store.getters['Product/getAllProduct'].filter(el => el.idLoai === this.idLoai);
    }
  }
};
</script>
<template>
  <div class="w-[1180px] flex flex-row justify-center items-center">
    <div class="w-full grid grid-cols-5">
      <div
        class="w-full h-full"
        v-for="item in getProduct"
        :key="item.id"
      >
        <nuxt-link :to="'/ProductList/' + item.id" class=" flex flex-col justify-center items-center">
        <img v-bind:src="item.Image" alt="" class="w-[150px] h-[150px]"/>
        <p class="text-[15px]">{{ item.Name }}</p>
        <p>{{ item.Price }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
