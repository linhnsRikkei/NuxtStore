<script>
export default {
  name: 'favorite',
  computed: {
    getFavorite() {
      return this.$store.getters['Favority/getAllFavorite'];
    }
  },
  methods: {
    CallAllFavorite() {
      console.log('favorite', this.getFavorite);
    }
  }
};
</script>
<template>
  <div class="w-full h-full bg-[#fcfcfc]">
      <div class="w-full h-[120px] text-[25px] font-sans pt-[60px] px-[20px] pb-5">
          <div class="w-full">
            <div
              class="w-full h-full flex flex-row justify-between items-center  border-b-[1px] border-[#030303] pb-[10px]"
              v-for="item in getFavorite"
              :key="item.product.id"
            >
              <nuxt-link :to="'/ProductList/' + item.product.id" class=" flex flex-row justify-start items-center ">
              <img v-bind:src="item.product.Image" alt="" class="w-[150px] h-[150px]" />
              <p class="ml-[25px] text-[25px]">{{ item.product.Name }}</p>
              </nuxt-link>
              <p>{{ item.product.Price }} VND</p>
            </div>
          </div>
      </div>
  </div>
</template>
