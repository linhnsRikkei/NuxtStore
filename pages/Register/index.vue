<script>
import Header from '../../components/Header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      email: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.repassword
    },
    onSubmit() {
      const validPassword = this.checkValidPassword()
      if (validPassword) {
        const payload = {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
        this.$store.dispatch('Auth/Register', payload)
          .then((result) => {
            if (result.success) {
              this.$router.push('/')
            }
          })
      } else {
        console.log('Pass not confirm');
      }
    }
  }
}
</script>
<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <Header />
    <h2
      class="w-[50%] mt-[50px] text-[48px] text-center bg-[#f2f2f2] font-serif font-[700] py-[25px] px-[65px]">
      Register
    </h2>
    <div class=" w-[50%] text-[18px] text-[#828282] px-[65px] pt-[30px] pb-[60px] flex flex-col justify-start items-center">
      <form @submit.prevent="onSubmit" class="w-full flex flex-col justify-start items-center text-black">
        <input
          v-model="email"
          type="email"
          class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px]
            hover:border-[#57b30d] outline-none my-[10px]"
          placeholder="Email address *"
          required
          minlength="10"
        />
        <input
          v-model="password"
          type="password"
          class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px]
            hover:border-[#57b30d] outline-none my-[10px]"
          placeholder="Password *"
          required
          minlength="6"
        />
        <input
          v-model="repassword"
          type="password"
          class="inline-block text-[18px] leading-[44px] py-[10px] px-[2px] w-full border-b-[2px]
            hover:border-[#57b30d] outline-none my-[10px]"
          placeholder="Re-password *"
          required
          minlength="6"
        />
        <input
          type="submit"
          class="inline-block w-full bg-[#000] hover:bg-[#f70f0f] py-[20px] px-[10px] text-[18px] text-[#fff]"
          value="Register your acccount"/>
      </form>
    </div>
  </div>
</template>
