<script>
export default {
  name: 'CartInfo',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      total: 0
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
    addInvoice() {
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        products: this.getCart,
        total: this.getTotal + 50000
      }
      this.$store.dispatch('Invoice/addInvoice', payload)
      setTimeout(() => {
        this.name = ''
        this.email = ''
        this.phone = ''
        this.total = 0
      }, 500);
      this.$router.replace(this.$router.go('/'))
    }
  }
}
</script>
<template>
  <div class="pt-[50px] h-screen w-full flex flex-row justify-center items-start">
      <div class="w-[1180px] h-full flex flex-row justify-start items-start">
          <!-- Infor -->
          <div class="w-[60%] mt-[30px] flex flex-col justify-center items-start">
              <h2 class="text-[55px] font-serif font-[600]">Checkout</h2>
              <form class="w-full pr-[50px]" @submit.prevent="addInvoice">
                <!-- email, phone -->
                <div class="w-full flex flex-col justify-start items-start">
                    <div class="w-full flex flex-row justify-between items-start mb-[20px]">
                        <input type="text" placeholder="Name *" v-model="name"  required class="w-[45%] outline-none border-b-2 py-[8px] pl-[15px] text-[20px] focus:border-[#0fe933]">
                        <input type="text" placeholder="Phone *" v-model="phone" required class="w-[45%] outline-none border-b-2 py-[8px] pl-[15px] text-[20px] focus:border-[#0fe933]">
                    </div>
                    <input type="email" placeholder="Email address *" v-model="email" required class="w-full outline-none border-b-2 py-[8px] pl-[15px] text-[20px] focus:border-[#0fe933]">
                </div>
                <!-- Button -->
                <div class="w-full flex flex-row justify-between items-center mt-[50px]">
                    <button type="submit" class="text-[30px] border-[1px] py-[10px] px-[50px] bg-[#696969] text-white hover:bg-[#161616]">Order</button>
                    <nuxt-link to="/" class="border-b-[1px] hover:border-[#1cc00d]">
                      or login to your account
                    </nuxt-link>
                </div>
              </form>
          </div>
          <!-- Product -->
          <div class="w-[40%] h-full">
            <div class="w-full h-full bg-[#e6e6e6]">
                <!-- list product -->
                <div class="w-full flex flex-col justify-start items-start px-[30px] pb-[30px]">
                    <div class="w-full flex flex-row justify-between items-center">
                        <h2 class="text-[36px] font-serif font-[700] py-[50px]">Shopping cart</h2>
                    </div>
                    <div class="w-full flex flex-col justify-start items-center pb-[10px]"  v-for="item in getCart" :key="item.count + item.product.id">
                        <div class="w-full flex flex-row justify-around items-start">
                            <img class="w-[100px]" v-bind:src="item.product.Image" alt="">
                            <div class="w-[200px] ml-[10px] flex flex-col justify-start items-start">
                                <p class="text-[15px] font-[500] mb-[8px]">{{item.product.Name}}</p>
                                <p class="text-[13px] font-[300] mb-[20px]">ID: {{item.product.id}}</p>
                                <p class="text-[13px] font-[400] mb-[20px]">Color: {{item.product.Color}}</p>
                            </div>
                            <div class="w-[150px] flex flex-col justify-center items-center">
                                <p class="w-full inline-block text-center">Quantity</p>
                                <input type="number" class="w-[50%] outline-none border-b border-[#080808]" v-model="item.count" disabled />
                            </div>
                            <div class="w-[100px] flex flex-col justify-center items-start">
                            <p class="w-full inline-block text-center">{{item.product.Price}} VND</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Price -->
                <div class="w-full">
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
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
