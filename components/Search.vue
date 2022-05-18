<script>
export default {
  data() {
    return {
      textSearch: ''
    }
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi')
  },
  computed: {
    searchProduct() {
      const search = this.textSearch
      return this.$store.getters['Product/getAllProduct'].filter(function (item) {
        return item.Name.toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
</script>
<template>
  <div class="w-full h-full bg-[#fcfcfc]">
      <div class="w-full h-[120px] text-[25px] font-serif pt-[60px] px-[20px] pb-5 border-b-[1px] border-[#030303]">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="ml-[10px] w-[90%] outline-none bg-[#fcfcfc]" v-model="textSearch" type="text" placeholder="Type what you are looking for ...">
      </div>
      <div v-if="textSearch != ''" class="w-full font-sans flex flex-col justify-center items-center">
          <div
            class="w-[90%] h-full flex flex-row justify-between items-center  border-b-[1px] border-[#030303] pb-[10px] mb-[10px]"
            v-for="item in searchProduct"
            :key="item">
              <nuxt-link :to="'/ProductList/' + item.id" class=" flex flex-row justify-start items-center ">
                <img v-bind:src="item.Image" alt="" class="w-[100px] h-[100px]" />
                <p class="ml-[25px] text-[25px]">{{ item.Name }}</p>
              </nuxt-link>
              <p>{{ item.Price }} VND</p>
          </div>
      </div>
  </div>
</template>
