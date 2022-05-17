<script>
export default {
  computed: {
    getFavorite() {
      return this.$store.getters['Favorite/getAllFavorite'];
    }
  }
};
</script>
<template>
  <div class="w-full h-full bg-[#fcfcfc]">
      <div class="w-full h-[120px] text-[25px] font-serif pt-[60px] px-[20px] pb-5 border-b-[1px] border-[#030303]">
          <div class="w-full grid grid-cols-2">
      <div
        class="w-full h-full"
        v-for="item in getFavorite"
        :key="item.id"
      >
        <nuxt-link :to="'/ProductList/' + item.id" class=" flex flex-col justify-center items-center">
        <img v-bind:src="item.Image" alt="" class="w-[150px] h-[150px]" />
        <p class="text-[15px]">{{ item.Name }}</p>
        <p>{{ item.Price }}</p>
        </nuxt-link>
      </div>
    </div>
      </div>
  </div>
</template>
