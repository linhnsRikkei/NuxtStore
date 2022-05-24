<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  beforeCreate() {
    this.$store.dispatch('Menu/getAllApi');
  },
  computed: {
    getDanhMuc() {
      return this.$store.getters['Menu/getAllDanhMuc']
    }
  },
  methods: {
    AddLoai() {
      try {
        const payload = {
          data: {
            content: this.content
          }
        };
        this.$store.dispatch('Menu/AddLoai', payload);
        alert('Them thanh cong');
        this.$store.dispatch('Menu/getAllApi');
        setTimeout(() => {
          this.$router.push('/Admin/LoaiSP')
        }, 500)
      } catch (error) {
        console.log(error);
      }
    },
    log() {
      console.log(this.loaiSP);
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
        Quản lý Loại Sản Phẩm
      </h1>
      <form
        class="w-full h-full flex flex-row justify-start items-start"
        @submit.prevent="AddLoai"
      >
        <table class="w-full text-[20px] text-left">
          <tr class="h-[70px]">
            <th class="w-[100px]">Content</th>
            <td class="text-left">
              <input
                type="text"
                v-model="content"
                placeholder="content category"
                class="
                  w-[300px]
                  outline-none
                  border-[1px] border-[#7c7b7b]
                  py-[10px]
                  px-[10px]
                "
                required
              />
            </td>
          </tr>
          <tr class="w-full h-[70px]">
            <th class="w-[50px] mr-[15px]"></th>
            <td class="">
              <button type="submit" class="border-[1px] px-[40px] py-[10px] bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500">ADD</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>
