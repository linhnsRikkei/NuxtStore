<script>
export default {
  data() {
    return {
      open: false,
      search: false,
      favorite: false
    };
  },
  methods: {
    buttonOpen() {
      this.open = !this.open
      this.$store.dispatch('Menu/getAllApi')
    },
    searchOpen() {
      this.search = !this.search;
    },
    favoriteOpen() {
      this.search = !this.favorite;
    }
  }
};
</script>
<template>
  <div class="w-full h-[54px] bg-[#fdfdfd] flex flex-row justify-center fixed">
    <div class="w-[1180px] flex flex-row justify-between items-center">
      <!-- menu -->
      <div class="w-[370px] cursor-pointer" v-on:click="buttonOpen">
        <i class="fa-solid fa-bars text-[25px]"></i>
      </div>
      <div
        v-if="this.open === true"
        class="w-[350px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[0px] left-[0px] transition-all duration-700"
      >
        <Menu />
      </div>
      <div
        v-else
        class="w-[350px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[0px] left-[-1000px] transition-all duration-700"
      >
        <Menu />
      </div>
      <!-- logo -->
      <div class="w-[370px] h-full">
        <nuxtLink to="/" class="w-full h-full flex flex-row justify-center items-center">
          <img
            class="w-[43px] h-[41px] cursor-pointer"
            src="https://demo.storefrontcloud.io/assets/logo.svg"
            alt="logo"
          />
        </nuxtLink>
      </div>
      <!-- button -->
      <div class="w-[370px] text-[#0e0e0e]">
        <ul class="flex flex-row justify-end items-center">
          <!-- search -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center"
            v-on:click="searchOpen"
          >
            <i class="fa-solid fa-magnifying-glass text-[24px]"></i>
          </li>
          <div
            v-if="search === true"
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[53px] left-[63%] transition-all duration-700"
          >
            <Search />
          </div>
          <div
            v-else
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[-1000px] left-[63%]  transition-all duration-700"
          >
            <Search />
          </div>
          <!-- favorite -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center"
            v-on:click="searchOpen"
          >
            <i class="fa-solid fa-heart text-[24px]"></i>
          </li>
          <!-- <div
            v-if="search === true"
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[53px] left-[63%] transition-all duration-700"
          >
            <Favorite />
          </div>
          <div
            v-else
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[-1000px] left-[63%]  transition-all duration-700"
          >
            <Favorite />
          </div> -->
          <!-- cart -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center"
          >
            <i class="fa-solid fa-cart-arrow-down text-[24px]"></i>
          </li>
          <!-- login -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center"
          >
            <i class="fa-solid fa-circle-user text-[24px]"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
