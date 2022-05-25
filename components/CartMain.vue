<script>
export default {
  name: 'Cart',
  data() {
    return {
      items: this.$store.state.Cart,
      count: 0
    }
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi')
  },
  computed: {
    getCart() {
      return this.$store.getters['Cart/getAllCart']
    },
    getTotal() {
      return this.$store.getters['Cart/getTotal']
    }
  },
  methods: {
    updateCount(id) {
      const payload = {
        idItem: id,
        count: this.count
      }
      this.$store.dispatch('Cart/updateCount', payload);
      this.count = 0
    },
    removeCart(id) {
      this.$store.dispatch('Cart/RemoveCart', id)
    },
    RemoveAllCart() {
      this.$store.dispatch('Cart/RemoveAllCart')
    }
  },
  watch: {
    items: {
      deep: true,
      handler(items) {
        localStorage.setItem('CartLocal', JSON.stringify(items));
      }
    }
  }
}
</script>
<template>
  <div class="w-full h-full">
      <!-- list product -->
      <div class="w-full bg-[#fff] flex flex-col justify-start items-start px-[30px] pb-[30px]">
          <div class="w-full flex flex-row justify-between items-center">
              <h2 class="text-[36px] font-serif font-[700] py-[50px]">Shopping cart</h2>
              <button class="text-[25px] font-serif font-[500]" @click="RemoveAllCart"><i class="fa-solid fa-x"></i> Clear cart</button>
          </div>
          <div class="w-full flex flex-col justify-start items-center pb-[10px]"  v-for="item in getCart" :key="item.count + item.product.id">
              <div class="w-full flex flex-row justify-around items-start">
                  <img class="w-[130px]" v-bind:src="item.product.Image" alt="">
                  <div class="w-[200px] flex flex-col justify-start items-start">
                      <p class="text-[20px] font-[500] mb-[8px]">{{item.product.Name}}</p>
                      <p class="text-[13px] font-[300] mb-[20px]">ID: {{item.product.id}}</p>
                      <p class="text-[18px] font-[400] mb-[20px]">Color: {{item.product.Color}}</p>
                      <button class="text-[13px] font-[300] mb-[20px] hover:text-[#faabab]" @click="removeCart(item.product.id)">remove cart</button>
                  </div>
                  <div class="w-[150px] flex flex-col justify-start items-start">
                      <p class="w-full inline-block text-center">Quantity</p>
                      <input type="number" class="w-[50%] outline-none border-b border-[#080808]" v-model="item.count" disabled />
                      <div class="w-full flex flex-row justify-between items-center">
                      <input type="number" class="w-[50%] outline-none border-b border-[#080808]" min="1" minlength="1" v-model="count">
                      <input type="button" value="Update" class="border p-[5px] border-[#fa1010]" @click="updateCount(item.product.id)">
                      </div>
                  </div>
                  <div class="w-[100px] flex flex-col justify-center items-start">
                <p class="w-full inline-block text-center">{{item.product.Price}} VND</p>
                  </div>
              </div>
          </div>
      </div>
      <!-- Price -->
      <div class="w-full bg-[#d3d3d3] pb-[100px]">
          <div class="w-full px-[30px] flex flex-col justify-between items-center">
              <h2 class="inline-block w-full text-[24px] text-[#4f4f4f] font-serif mb-[30px] text-left">Shopping summary</h2>
              <div class="w-full text-[18px] text-[#4f4f4f] font-serif mb-[30px] flex flex-row justify-between items-center">
                  <h3>Price: </h3>
                  <p>{{getTotal}} VND</p>
              </div>
              <div class="w-full text-[18px] text-[#4f4f4f] font-serif mb-[30px] flex flex-row justify-between items-center">
                  <h3>Tax: </h3>
                  <p>50000 VND</p>
              </div>
              <div class="w-full text-[#4f4f4f] font-serif mb-[30px] flex flex-row justify-between items-center">
                  <h3 class="text-[19px] font-[600]">Total: </h3>
                  <p v-if="getTotal == 0" class="text-[25px] font-[700]">{{getTotal}} VND</p>
                  <p v-else class="text-[25px] font-[700]">{{getTotal + 50000}} VND</p>
              </div>
              <div class="w-full text-[#4f4f4f] font-serif mb-[30px] flex flex-row justify-between items-center">
                <nuxt-link to="/">
                  <button class="text-[15px]">Return to shopping</button>
                </nuxt-link>
                <nuxt-link to="/Cart">
                  <button class="text-[19px] border py-[20px] px-[10px] text-center text-[#fff] bg-[#000]">Go to checkout</button>
                </nuxt-link>
              </div>
          </div>
      </div>
  </div>
</template>
