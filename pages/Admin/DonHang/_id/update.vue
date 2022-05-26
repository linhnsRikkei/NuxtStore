<script>
export default {
  data() {
    return {
      Address: '',
      email: '',
      name: '',
      phone: '',
      product: null,
      status: '',
      total: 0,
      token: this.$store.state.Auth
    }
  },
  beforeCreate() {
    this.$store.dispatch('Invoice/getAllApi');
  },
  computed: {
    getInvoice() {
      return this.$store.getters['Invoice/getAllInvoice'].find(
        el => el.id === this.$route.params.id
      )
    },
    getToken() {
      return this.$store.getters['Auth/getToken'];
    }
  },
  created() {
    if (this.getInvoice) {
      this.Address = this.getInvoice.Address;
      this.email = this.getInvoice.email;
      this.name = this.getInvoice.name;
      this.phone = this.getInvoice.phone;
      this.products = this.getInvoice.products;
      this.status = this.getInvoice.status;
      this.total = this.getInvoice.total;
    }
  },
  methods: {
    updateInvoice() {
      try {
        const payload = {
          id: this.$route.params.id,
          data: {
            Address: this.Address,
            email: this.email,
            name: this.name,
            phone: this.phone,
            products: this.products,
            status: true,
            total: this.total
          },
          token: this.token
        };
        this.$store.dispatch('Invoice/updateInvoice', payload);
        alert('Cap nhat trang thai thanh cong');
        this.$store.dispatch('Invoice/getAllApi');
        setTimeout(() => {
          this.$router.push('/Admin/DonHang');
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="w-[60%] h-full flex flex-col justify-center">
      <h1
        class="
          h-full
          text-[40px]
          py-[15px]
          inline-block
          w-full
          text-center text-[#e43333]
          font-[700]
        "
      >
        Quản lý đơn hàng
      </h1>
      <div
        class="w-full h-full flex flex-row justify-start items-start"
      >
        <table class="w-full text-[20px] text-left">
          <tr class="h-[70px] w-full flex flex-row justify-center items-start">
            <th class="inline-block w-[100px] h-full">Name</th>
            <td class="inline-block w-[700px] h-full text-left">{{name}}</td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start" >
            <th class="inline-block w-[100px] h-full">Email</th>
            <td class="inline-block w-[700px] h-full text-left">{{email}}</td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start" >
            <th class="inline-block w-[100px] h-full">Phone</th>
            <td class="inline-block w-[700px] h-full text-left">{{phone}}</td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start ">
            <th class="inline-block w-[100px] h-full">Address</th>
            <td class="inline-block w-[700px] h-full text-left">{{Address}}</td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start">
            <th class="inline-block w-[100px] h-full">Status</th>
            <td class="inline-block w-[700px] h-full text-left">{{status}}
            <button
            class="
                ml-[30px]
                border-[1px]
                px-[20px]
                py-[5px]
                bg-black
                text-white
                hover:bg-gradient-to-r
                from-cyan-500
                to-blue-500
                "
            @click="updateInvoice"
              >
                Xac nhan
            </button></td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start">
            <th class="inline-block w-[100px] h-full">Total</th>
            <td class="inline-block w-[700px] h-full text-left">{{total}} VND</td>
          </tr>
          <tr class="h-[70px] w-full flex flex-row justify-center items-start">
            <th class="inline-block w-[100px] h-full">Products</th>
            <td class="inline-block w-[700px] h-full text-left">
                <table class="w-full text-[20px] text-left">
                    <tr class="h-[70px] w-full flex flex-row justify-between items-start">
                        <th class="inline-block h-full w-[200px]">Name</th>
                        <th class="inline-block h-full w-[200px]">Image</th>
                        <th class="inline-block h-full w-[200px]">Price</th>
                        <th class="inline-block h-full w-[100px]">Count</th>
                    </tr>
                    <tr class="w-full flex flex-row justify-between items-start my-[5px] py-[8px] border-b" v-for="item in this.products" :key="item.count + new Date() + item.product.id">
                        <td class="w-[200px] inline-block">{{item.product.Name}}</td>
                        <td class="w-[200px] inline-block"><img v-bind:src="item.product.Image" class="w-[100px] h-[100px]"></td>
                        <td class="w-[200px] inline-block">{{item.product.Price}}</td>
                        <td class="w-[100px] inline-block">{{item.count}}</td>
                    </tr>
                </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
