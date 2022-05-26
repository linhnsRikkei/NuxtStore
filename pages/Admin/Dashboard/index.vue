<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }
      this.$store.dispatch('Auth/Login', payload)
        .then((result) => {
          if (result.success) {
            this.$toast.success('Successfully authenticated')
            this.email = ''
            this.password = ''
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
<template>
  <div class="w-full flex flex-row justify-center items-center">
      <div class="w-[50%] h-full flex flex-col justify-center items-center">
        <h2 class="w-full text-[48px] bg-[#f2f2f2] font-serif font-[700] py-[25px] px-[65px]">Log in</h2>
        <div class="w-full text-[18px] text-[#050505] px-[65px] pt-[30px] pb-[60px] flex flex-col justify-start items-center">
            <form @submit.prevent="onSubmit" class="w-full flex flex-col justify-start items-center">
                <input v-model="email"
                type="email"
                class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px] hover:border-[#57b30d] outline-none my-[10px]"
                placeholder="Email address *"
                required
                minlength="2"/>
                <input v-model="password"
                type="password"
                class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px] hover:border-[#57b30d] outline-none my-[10px]"
                placeholder="Password *"
                required
                minlength="6"/>
                <div class="w-full flex flex-row justify-between items-center h-[50px]">
                  <div class="w-[200px]">
                    <nuxt-link to="">Remember me</nuxt-link>
                  </div>
                  <div class="w-[200px] text-right">
                    <nuxt-link to="" class="hover:border-b-[2px] hover:border-[#9e9c9c]">Forgot the password?</nuxt-link>
                  </div>
                </div>
                <input type="submit" class="inline-block w-full bg-[#000] hover:bg-[#4f4f4f] py-[20px] px-[10px] text-[18px] text-[#fff]" value="Login in to your acccount"/>
            </form>
            <nuxt-link to="/Register" class="my-[20px] flex flex-row justify-start items-center"> You haven't account? <p class="pl-[10px] italic hover:text-[#f04949]">Create account</p> </nuxt-link>
        </div>
    </div>
  </div>
</template>
