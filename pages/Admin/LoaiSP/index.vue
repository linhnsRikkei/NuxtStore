<script>
export default {
  middleware: ['check_auth', 'auth'],
  head: {
    title: 'Admin | LoaiSP | Sach Linh Store'
  },
  data() {
    return {
      searchName: '',
      sort: '0',
      token: this.$store.state.Auth
    }
  },
  beforeCreate() {
    this.$store.dispatch('Menu/getAllApi');
  },
  computed: {
    getDanhMuc() {
      return this.$store.getters['Menu/getAllDanhMuc'];
    },
    getToken() {
      return this.$store.getters['Auth/getToken']
    },
    searchMenu() {
      const search = this.searchName
      return this.$store.getters['Menu/getAllDanhMuc'].filter(function (item) {
        return item.content.toLowerCase().includes(search.toLowerCase())
      })
    }
  },
  methods: {
    deleteLoai(id) {
      const payload = {
        idItem: id,
        token: this.token
      };
      console.log(payload);
      this.$store.dispatch('Menu/deleteLoai', payload)
      alert('Xoa thanh cong')
      this.$store.dispatch('Menu/getAllApi')
    },
    sortMenu() {
      if (this.sort === '2') {
        this.$store.dispatch('Menu/sortNameIncrease');
      }
      if (this.sort === '1') {
        this.$store.dispatch('Menu/sortNameDecline');
      }
      if (this.sort === '0') {
        this.$store.dispatch('Menu/getAllApi')
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
      <h1 class="h-full text-[40px] py-[15px] inline-block w-full text-center text-[#e43333] font-[700]">Quản lý loại sản phẩm</h1>
      <!-- add product -->
      <div class="w-full">
        <nuxt-link to="/Admin/LoaiSP/ThemMoi" class="w-[100px] border py-[5px] px-[8px] border-[#464545]">Thêm mới</nuxt-link>
      </div>
      <!-- input search -->
      <div class="w-full h-[120px] text-[20px] pt-[60px] px-[20px] pb-5 border-b-[1px] border-[#030303]">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="ml-[10px] w-[90%] h-full py-[15px] pl-[30px] border-2 outline-none bg-[#fcfcfc]" v-model="searchName" type="text" placeholder="Name what you are looking for ...">
      </div>
      <!-- arrange -->
      <div class="mt-[30px] w-[200px]">
          <select v-model="sort" class="outline-none cursor-pointer h-[50px] w-full border-2" v-on:click="sortMenu">
            <option value="0">Default</option>
            <option class="cursor-pointer" value="1">Name: A - Z</option>
            <option class="cursor-pointer" value="2">Name: Z - A</option>
          </select>
      </div>
      <!-- table list menu -->
      <table class="text-[20px]">
        <!-- tieu de -->
        <tr class="w-full border-b border-[#0c0c0c]">
          <th class="w-[100px] py-[15px]">Content</th>
          <th class="w-[50px]">Edit</th>
          <th class="w-[50px]">Delete</th>
        </tr>
        <!-- content -->
        <tr v-for="item in searchMenu"
        :key="item.id"
        class="text-center hover:bg-[#f7f6f6] w-full h-[50px]">
          <td class="w-[100px] text-left">{{item.content}}</td>
          <td class="">
            <nuxt-link :to="'/Admin/LoaiSP/' + item.id + '/update'">
              <i class="fa-solid fa-pen-to-square hover:text-[#f73737]"></i>
            </nuxt-link>
          </td>
          <td>
            <i class="fa-solid fa-trash hover:text-[#613bec]" @click="deleteLoai(item.id)"></i>
          </td>
        </tr>
      </table>
      <!-- Phan trang -->
    </div>
  </main>
</template>
