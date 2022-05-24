<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  beforeCreate() {
    this.$store.dispatch('Menu/getAllApi');
  },
  computed: {
    getDanhMuc() {
      return this.$store.getters['Menu/getAllDanhMuc'].find(
        el => el.id === this.$route.params.id
      );
    }
  },
  created() {
    if (this.getDanhMuc) {
      this.content = this.getDanhMuc.content
    }
  },
  methods: {
    updateLoai() {
      try {
        const payload = {
          id: this.$route.params.id,
          data: {
            content: this.content
          }
        };
        this.$store.dispatch('Menu/updateLoai', payload);
        alert('Update thanh cong');
        this.$store.dispatch('Menu/getAllApi');
        setTimeout(() => {
          this.$router.push('/Admin/LoaiSP');
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
        Quản lý Loại Sản Phẩm
      </h1>
      <form
        class="w-full h-full flex flex-row justify-start items-start"
        @submit.prevent="updateLoai"
      >
        <table class="w-full text-[20px] text-left">
          <tr class="h-[70px]">
            <th class="w-[100px]">Content</th>
            <td class="w-full text-left flex flex-row justify-center items-center">
              <input
                type="text"
                v-model="content"
                placeholder="Content category"
                class="
                  w-[90%]
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
                ADD
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>
