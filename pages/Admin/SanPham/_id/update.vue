<script>
export default {
  data() {
    return {
      Name: '',
      Image: '',
      Price: '',
      Color: '',
      loaiSP: '',
      token: this.$store.state.Auth
    }
  },
  beforeCreate() {
    this.$store.dispatch('Product/getAllApi');
    this.$store.dispatch('Menu/getAllApi');
  },
  computed: {
    getSanPham() {
      return this.$store.getters['Product/getAllProduct'].find(
        el => el.id === this.$route.params.id
      )
    },
    getDanhMuc() {
      return this.$store.getters['Menu/getAllDanhMuc'];
    },
    getToken() {
      return this.$store.getters['Auth/getToken'];
    }
  },
  created() {
    if (this.getSanPham) {
      this.Name = this.getSanPham.Name;
      this.Image = this.getSanPham.Image;
      this.Price = this.getSanPham.Price;
      this.Color = this.getSanPham.Color;
      this.loaiSP = this.getSanPham.idLoai;
    }
  },
  methods: {
    updateProduct() {
      try {
        const payload = {
          id: this.$route.params.id,
          data: {
            Name: this.Name,
            Image: this.Image,
            Price: this.Price,
            Color: this.Color,
            idLoai: this.loaiSP
          },
          token: this.token
        };
        this.$store.dispatch('Product/updateProduct', payload);
        alert('Update thanh cong');
        this.$store.dispatch('Product/getAllApi');
        setTimeout(() => {
          this.$router.push('/Admin/SanPham');
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
        Quản lý sản phẩm
      </h1>
      <form
        class="w-full h-full flex flex-row justify-start items-start"
        @submit.prevent="updateProduct"
      >
        <table class="w-full text-[20px] text-left">
          <tr class="h-[70px]">
            <th class="w-[100px]">Name</th>
            <td class="w-full text-left">
              <input
                type="text"
                v-model="Name"
                placeholder="Name product"
                class="
                  w-full
                  outline-none
                  border-[1px] border-[#7c7b7b]
                  py-[10px]
                  px-[10px]
                "
                required
              />
            </td>
          </tr>
          <tr class="h-[70px]">
            <th class="w-[100px]">Image</th>
            <td class="w-[700px] flex flex-col justify-center items-center">
              <img v-bind:src="Image" class="w-[200px]" alt="">
              <input
                type="text"
                v-model="Image"
                placeholder="Image product"
                class="
                  w-full
                  outline-none
                  border-[1px] border-[#7c7b7b]
                  py-[10px]
                  px-[10px]
                "
                required
              />
            </td>
          </tr>
          <tr class="h-[70px]">
            <th class="w-[50px]">Color</th>
            <td class="">
              <input
                type="text"
                v-model="Color"
                placeholder="color product"
                class="
                  w-[200px]
                  outline-none
                  border-[1px] border-[#7c7b7b]
                  py-[10px]
                  px-[10px]
                "
                required
              />
            </td>
          </tr>
          <tr class="h-[70px]">
            <th class="w-[100px]">Price</th>
            <td class="w-[100px]">
              <input
                type="number"
                min="1"
                v-model="Price"
                placeholder="Price product"
                class="
                  w-[150px]
                  outline-none
                  border-[1px] border-[#7c7b7b]
                  py-[10px]
                  px-[10px]
                  mr-[15px]
                "
                required
                minlength="1"
              />VND
            </td>
          </tr>
          <tr class="h-[70px]">
            <th class="w-[100px]">Loai SP</th>
            <td class="">
              <select
                v-model="loaiSP"
                class="w-[200px] h-[50px] outline-none border"
                required
              >
                <option
                  v-for="item in getDanhMuc"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.content }}
                </option>
              </select>
            </td>
          </tr>
          <tr class="w-full h-[70px]">
            <th class="w-[50px] mr-[15px]"></th>
            <td class="">
              <button
                type="submit"
                class="
                  border-[1px]
                  px-[40px]
                  py-[10px]
                  bg-black
                  text-white
                  hover:bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                "
              >
                Update
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>
