<script>
export default {
  data() {
    return {
      open: false,
      search: false,
      favorite: false,
      login: false,
      cart: false
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
      this.favorite = !this.favorite;
    },
    loginOpen() {
      this.login = !this.login;
    },
    cartOpen() {
      this.cart = !this.cart;
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
            class="w-[54px] h-[54px] flex flex-row justify-center items-center cursor-pointer"
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
            class="w-[54px] h-[54px] flex flex-row justify-center items-center cursor-pointer"
            v-on:click="favoriteOpen"
          >
            <i class="fa-solid fa-heart text-[24px]"></i>
          </li>
          <div
            v-if="favorite === true"
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[53px] left-[63%] transition-all duration-700"
          >
            <Favority />
          </div>
          <div
            v-else
            class="w-[700px] h-[1000px] bg-[#fdfafa] text-[#000] z-50 absolute top-[-1000px] left-[63%]  transition-all duration-700"
          >
            <Favority />
          </div>
          <!-- cart -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center cursor-pointer"
            v-on:click="cartOpen"
          >
            <i class="fa-solid fa-cart-arrow-down text-[24px]"></i>
          </li>
          <div
            v-if="cart === true"
            class="w-[800px] overflow-y-auto h-[1000px] bg-[#fdfafa] text-[#000] z-0 absolute top-[53px] left-[57%] transition-all duration-700"
          >
            <CartMain />
          </div>
          <div
            v-else
            class="w-[800px] h-[1000px] bg-[#fdfafa] text-[#000] z-0 absolute top-[-1500px] left-[57%]  transition-all duration-700"
          >
            <CartMain />
          </div>
          <!-- login -->
          <li
            class="w-[54px] h-[54px] flex flex-row justify-center items-center cursor-pointer"
            v-on:click="loginOpen"
          >
           <i class="fa-solid fa-user text-[25px]"></i>
          </li>
          <div
            v-if="login === true"
            class="w-[620px] h-[500px] bg-[#fdfafa] text-[#000] z-50 absolute top-[200px] left-[50%] translate-x-[-50%] transition-all duration-700"
          >
            <Login />
          </div>
          <div
            v-else
            class="w-[620px] h-[500px] bg-[#fdfafa] text-[#000] z-50 absolute top-[-1000px] left-[50%] translate-x-[-50%]  transition-all duration-700"
          >
            <Login />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
