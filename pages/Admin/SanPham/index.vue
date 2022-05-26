<script>
export default {
  middleware: 'auth',
  head: {
    title: 'Admin | SanPham | Sach Linh Store'
  },
  data() {
    return {
      searchName: '',
      sort: '0',
      category: '',
      token: this.$store.state.Auth
    }
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi')
    this.$store.dispatch('Menu/getAllApi');
  },
  computed: {
    getSanPham() {
      return this.$store.getters['Product/getAllProduct']
    },
    getDanhMuc() {
      return this.$store.getters['Menu/getAllDanhMuc'];
    },
    getToken() {
      return this.$store.getters['Auth/getToken'];
    },
    searchProduct() {
      const search = this.searchName
      const category = this.category
      return this.$store.getters['Product/getAllProduct'].filter(function (item) {
        return item.Name.toLowerCase().includes(search.toLowerCase())
      }).filter(function (i) {
        return i.idLoai.includes(category)
      })
    }
  },
  methods: {
    deleteProduct(id) {
      const payload = {
        idItem: id,
        token: this.token
      }
      this.$store.dispatch('Product/deleteProduct', payload)
      alert('Xoa thanh cong')
      this.$store.dispatch('Product/getAllApi')
    },
    sortPrice() {
      if (this.sort === '1') {
        this.$store.dispatch('Product/sortPriceIncrease');
      }
      if (this.sort === '2') {
        this.$store.dispatch('Product/sortPriceDecline');
      }
      if (this.sort === '3') {
        this.$store.dispatch('Product/sortNameIncrease');
      }
      if (this.sort === '4') {
        this.$store.dispatch('Product/sortNameDecline');
      }
      if (this.sort === '0') {
        this.$store.dispatch('Product/getAllApi')
      }
    },
    clickCallback (pageNum) {
      this.page = pageNum
    }
  }
}
</script>
<template>
  <main class="w-full h-full  flex flex-col justify-center items-center">
    <div class="w-[70%] h-full flex flex-col justify-center">
      <h1 class="h-full text-[40px] py-[15px] inline-block w-full text-center text-[#e43333] font-[700]">Quản lý sản phẩm</h1>
      <!-- add product -->
      <div class="w-full">
        <nuxt-link to="/Admin/SanPham/ThemMoi" class="w-[100px] border py-[5px] px-[8px] border-[#464545]">Thêm mới</nuxt-link>
      </div>
      <!-- input search -->
      <div class="w-full h-[120px] text-[20px] pt-[60px] px-[20px] pb-5 border-b-[1px] border-[#030303]">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="ml-[10px] w-[90%] h-full py-[15px] pl-[30px] border-2 outline-none bg-[#fcfcfc]" v-model="searchName" type="text" placeholder="Name what you are looking for ...">
      </div>
      <!-- arrange -->
      <div class="mt-[30px] w-[200px]">
          <select v-model="sort" class="outline-none cursor-pointer h-[50px] w-full border-2" v-on:click="sortPrice">
            <option value="0">Default</option>
            <option class="cursor-pointer" value="1">Price: Low to high</option>
            <option class="cursor-pointer" value="2">Price: High to low</option>
            <option class="cursor-pointer" value="3">Name: A - Z</option>
            <option class="cursor-pointer" value="4">Name: Z - A</option>
          </select>
      </div>
      <!-- table list product -->
      <table class="text-[20px]">
        <!-- tieu de -->
        <tr class="w-full border-b border-[#0c0c0c]">
          <th class="w-[100px] py-[15px]">Name</th>
          <th class="w-[100px]">Image</th>
          <th class="w-[100px]">
            <select
                v-model="category"
                class="w-[200px] h-[50px] outline-none border"
              >
              <option value="">All Category</option>
              <option>*** Chose ***</option>
                <option
                  v-for="itemDanhMuc in getDanhMuc"
                  :key="itemDanhMuc.id"
                  :value="itemDanhMuc.id"
                >
                  {{ itemDanhMuc.content }}
                </option>
              </select>
          </th>
          <th class="w-[50px]">Color</th>
          <th class="w-[50px]">Price</th>
          <th class="w-[50px]">Edit</th>
          <th class="w-[50px]">Delete</th>
        </tr>
        <!-- content -->
        <tr v-for="item in searchProduct"
        :key="item.id"
        class="text-center hover:bg-[#f7f6f6] w-full">
          <td class="w-[100px] text-left">{{item.Name}}</td>
          <td class="flex flex-col justify-center items-center"> <img v-bind:src="item.Image" alt="" class="w-[100px] h-[100px]"/></td>
          <td class="">
              <select
                v-model="item.idLoai"
                class="w-[200px] h-[50px] outline-none bg-inherit text-black"
                required
                disabled
              >
                <option
                  v-for="itemDanhMuc in getDanhMuc"
                  :key="itemDanhMuc.id"
                  :value="itemDanhMuc.id"
                  class="text-black"
                >
                  {{ itemDanhMuc.content }}
                </option>
              </select>
          </td>
          <td class="w-[100px]">{{item.Color}}</td>
          <td>{{item.Price}} VND</td>
          <td class="">
            <nuxt-link :to="'/Admin/SanPham/' + item.id + '/update'">
              <i class="fa-solid fa-pen-to-square hover:text-[#f73737]"></i>
            </nuxt-link>
          </td>
          <td>
            <i class="fa-solid fa-trash hover:text-[#613bec]" @click="deleteProduct(item.id)"></i>
          </td>
        </tr>
      </table>
      <!-- Phan trang -->
    </div>
  </main>
</template>
