<script>
export default {
  computed: {
    getDanhMuc () {
      return this.$store.getters['Menu/getAllDanhMuc']
    },
    getProduct() {
      console.log('items', this.item);
      return this.$store.getters['Product/getAllProduct']
    }
  },
  methods: {
    CallProduct () {
      this.$store.dispatch('Product/getAllApi')
    }
  }
};
</script>
<template>
  <div class="w-[350px] h-[1000px] bg-[#fdfafa] text-[#000] z-50">
    <ul class="w-full">
      <li
        class="w-full text-[18px] px-[20px] py-[25px] border-y bg-[#fff] hover:bg-[#c7c6c6]"
      >
        <i class="fa-solid fa-x text-[25px] cursor-pointer"></i> Danh mục
      </li>
      <li
        class="w-full text-[18px] px-[20px] py-[25px] border-y bg-[#fff] hover:bg-[#c7c6c6] cursor-pointer"
        v-for="item in getDanhMuc"
        :key="item.id"
      >
        <div v-on:click="CallProduct">
          <nuxt-link :to="'/DanhMuc/' + item.id">
            {{ item.content }}
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>
