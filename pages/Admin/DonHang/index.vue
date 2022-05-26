<script>
export default {
  middleware: ['check_auth', 'auth'],
  head: {
    title: 'Admin | DonHang | Sach Linh Store'
  },
  data() {
    return {
      sort: '0',
      token: this.$store.state.Auth
    }
  },
  beforeCreate() {
    this.$store.dispatch('Invoice/getAllApi');
  },
  computed: {
    getInvoice() {
      return this.$store.getters['Invoice/getAllInvoice'];
    },
    getToken() {
      return this.$store.getters['Auth/getToken']
    }
  },
  created() {
    console.log('list', this.getInvoice);
  },
  methods: {
    sortInvoice() {
      if (this.sort === '2') {
        this.$store.dispatch('Menu/sortNameIncrease');
      }
      if (this.sort === '1') {
        this.$store.dispatch('Menu/sortNameDecline');
      }
      if (this.sort === '0') {
        this.$store.dispatch('Menu/getAllApi')
      }
    }
  }
}
</script>
<template>
  <main class="w-full h-full  flex flex-col justify-center items-center">
    <div class="w-[70%] h-full flex flex-col justify-center">
      <h1 class="h-full text-[40px] py-[15px] inline-block w-full text-center text-[#e43333] font-[700]">Quản lý đơn hàng</h1>
      <!-- add product -->
      <div class="w-full">
        <nuxt-link to="/Admin/LoaiSP/ThemMoi" class="w-[100px] border py-[5px] px-[8px] border-[#464545]">Thêm mới</nuxt-link>
      </div>
      <!-- arrange -->
      <div class="mt-[30px] w-[200px]">
          <select v-model="sort" class="outline-none cursor-pointer h-[50px] w-full border-2" v-on:click="sortInvoice">
            <option value="0">Default</option>
            <option class="cursor-pointer" value="1">Name: A - Z</option>
            <option class="cursor-pointer" value="2">Name: Z - A</option>
          </select>
      </div>
      <!-- table list invoice -->
      <table class="text-[20px]">
        <!-- tieu de -->
        <tr class="w-full border-b border-[#0c0c0c]">
          <th class="w-[100px] py-[15px]">Tên KH</th>
          <th class="w-[100px] py-[15px]">Email</th>
          <th class="w-[100px] py-[15px]">Điện Thoại</th>
          <th class="w-[100px] py-[15px]">Trạng thái</th>
          <th class="w-[100px] py-[15px]">Tổng tiền</th>
          <th class="w-[50px]">Edit</th>
        </tr>
        <!-- content -->
        <tr v-for="item in getInvoice"
        :key="item.id"
        class="text-center hover:bg-[#f7f6f6] w-full h-[50px] border-b">
          <td class="w-[100px] text-left">{{item.name}}</td>
          <td class="w-[100px] text-left">{{item.email}}</td>
          <td class="w-[100px] text-left">{{item.phone}}</td>
          <td v-if="item.status === false" class="w-[200px] text-center">Đang chờ xác nhận</td>
          <td v-else class="w-[200px] text-center">Đã xác nhận</td>
          <td class="w-[100px] text-center">{{item.total}} VND</td>
          <td class="">
            <nuxt-link :to="'/Admin/DonHang/' + item.id + '/update'">
              <i class="fa-solid fa-pen-to-square hover:text-[#f73737]"></i>
            </nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>
