<script>
export default {
  data() {
    return {
      sort: '0'
    };
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi');
  },
  methods: {
    sortPrice() {
      if (this.sort === '1') {
        this.$store.dispatch('Product/sortPriceIncrease');
      } else {
        this.$store.dispatch('Product/sortPriceDecline');
      }
    }
  }
};
</script>
<template>
  <div
    class="
      w-[1180px]
      h-[194px]
      bg-inherit
      flex flex-col
      justify-around
      items-center
    "
  >
    <div class="w-full text-[14px]">Default Categoty / Men</div>
    <div class="w-full flex flex-row justify-between items-center">
      <div class="text-[50px] w-[60%] font-[500] font-serif">Men</div>
      <div class="w-[40%] flex flex-row justify-between items-center">
        <div>
          Columns:
          <select name="" id="" class="outline-none">
            <option value="">4</option>
            <option value="">6</option>
            <option value="">8</option>
          </select>
        </div>
        <div>
          <select v-model="sort" class="outline-none cursor-pointer h-[50px]" v-on:click="sortPrice">
            <option value="0">Default</option>
            <option class="cursor-pointer" value="1">Price: Low to high</option>
            <option class="cursor-pointer" value="2">Price: High to low</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
