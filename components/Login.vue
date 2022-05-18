<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
      <h2 class="w-full text-[48px] bg-[#f2f2f2] font-serif font-[700] py-[25px] px-[65px]">Log in</h2>
      <div class="w-full text-[18px] text-[#828282] px-[65px] pt-[30px] pb-[60px] flex flex-col justify-start items-center">
          <form @submit.prevent="" class="w-full flex flex-col justify-start items-center">
              <input type="email" class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px] hover:border-[#57b30d] outline-none my-[10px]" placeholder="Email address *" required minlength="2"/>
              <input type="password" class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px] hover:border-[#57b30d] outline-none my-[10px]" placeholder="Password *" required minlength="6"/>
              <div class="w-full flex flex-row justify-between items-center h-[50px]">
                <div class="w-[200px]">
                  <button>Remember me</button>
                </div>
                <div class="w-[200px] text-right">
                  <button class="hover:border-b-[2px] hover:border-[#9e9c9c]">Forgot the password?</button>
                </div>
              </div>
              <input type="submit" class="inline-block w-full bg-[#000] hover:bg-[#4f4f4f] py-[20px] px-[10px] text-[18px] text-[#fff]" value="Login in to your acccount"/>
          </form>
      </div>
  </div>
</template>
