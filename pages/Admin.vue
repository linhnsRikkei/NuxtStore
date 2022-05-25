<script>
export default {
  head: {
    title: 'Admin | SanPham | Sach Linh Store'
  }
}
</script>
<template>
  <div class="w-full h-screen flex flex-row justify-start items-start">
    <div class="w-full h-full flex flex-row justify-start items-start">
      <ul class="w-[15%] h-full border-r bg-[#fdfafa] text-[#000]">
        <li class="w-full py-[15px] px-[20px] border-t-2 border-[#0f0f0f] hover:text-[#3c29a8] bg-[#fff] hover:bg-[#c7c6c6]">
          <nuxt-link to="/Admin/Dashboard" class="w-full h-full text-[20px] cursor-pointer font-sans">
            Dashboard
          </nuxt-link>
        </li>
        <li class="w-full py-[15px] px-[20px] border-t-2 border-[#0f0f0f] hover:text-[#3c29a8] bg-[#fff] hover:bg-[#c7c6c6]">
          <nuxt-link to="/Admin/LoaiSP" class="w-full h-full text-[20px] cursor-pointer font-sans">
            Loại SP
          </nuxt-link>
        </li>
        <li class="w-full py-[15px] px-[20px] border-t-2 border-[#0f0f0f] hover:text-[#3c29a8] bg-[#fff] hover:bg-[#c7c6c6]">
          <nuxt-link to="/Admin/SanPham" class="w-full text-[20px] cursor-pointer font-sans">
            Sản Phẩm
          </nuxt-link>
        </li>
        <li class="w-full py-[15px] px-[20px] border-t-2 border-[#0f0f0f] hover:text-[#3c29a8] bg-[#fff] hover:bg-[#c7c6c6]">
          <nuxt-link to="" class="w-full text-[20px] cursor-pointer font-sans">
            Đơn hàng
          </nuxt-link>
        </li>
      </ul>
      <div class="w-[85%]">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>
