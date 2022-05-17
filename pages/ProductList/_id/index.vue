<script>
import Header from '../../../components/Header.vue';
export default {
  data() {
    return {
      item: this.$store.state.Product.products.find(el => el.id === this.$route.params.id),
      commentContent: ''
    }
  },
  components: {
    Header
  },
  computed: {
    getProduct() {
      console.log('item', this.item);
      return this.$store.getters['Product/getAllProduct'].find(el => el.id === this.$route.params.id)
    },
    getComment() {
      return this.$store.getters['Comments/getAllComment'].filter(el => el.idProduct === this.$route.params.id)
    }
  },
  methods: {
    addToFavority() {
      this.$store.dispatch('Favority/AddFavorite', 'data')
    },
    submitContent() {
      const payload = {
        content: this.commentContent,
        idProduct: this.$route.params.id
      }
      this.$store.dispatch('Comments/addComment', payload)
      this.commentContent = ''
      setTimeout(() => {
        this.$store.dispatch('Comments/getAllApi')
      }, 1000)
    }
  },
  watch: {
    item: {
      deep: true,
      handler(items) {
        localStorage.setItem('DataLocal', JSON.stringify(items))
      }
    }
  }
};
</script>
<template>
  <div class="">
    <Header />
    <div
      class="w-full pb-[50px] pt-[100px] bg-[#f2f2f2] flex flex-col justify-center items-center"
    >
      <!-- Thông tin  -->
      <div
        class="w-[1180px] flex flex-row justify-between items-start font-sans"
      >
        <div class="w-[50%]">
          <img
            v-bind:src="item.Image"
            alt=""
            class="w-[90%]"
          />
        </div>
        <div class="w-[50%] flex flex-col justify-start items-start">
          <h2 class="text-[50px] pb-[20px]">{{item.Name}}</h2>
          <p class="text-[30px] py-[10px]">Price: {{item.Price}}</p>
          <p class="text-[30px] py-[10px]">Color: {{item.Color}}</p>
          <div class="text-[35px]">
            <p>Size</p>
            <div class="">
              <button class="border p-[5px]">32</button>
              <button class="border p-[5px]">33</button>
              <button class="border p-[5px]">34</button>
              <button class="border p-[5px]">35</button>
            </div>
          </div>
          <div class="mt-[20px] text-[20px]">
            <p>Quantity (100 avaiable)</p>
            <input type="number" class="w-[50px] outline-none" min="0"/>
          </div>
          <button class="mt-[30px] text-[30px] border py-[5px] px-[15px] bg-[#080808] text-[#fff] hover:bg-[#fff] hover:text-[#000] transition-all duration-300">Add to cart</button>
          <button class="mt-[30px] text-[20px] text-[#535252] hover:text-[#000] transition-all duration-300" @click="addToFavority">Add to favorite</button>
        </div>
      </div>
      <!-- Review -->
      <div class="w-[1180px] mt-[50px] flex flex-col justify-center items-center text-[25px] font-sans">
        <h2 class="text-[35px]">Add review</h2>
        <div class="mt-[15px]">
          <div class="py-[20px]">
            <label for="" class="inline-block w-[100px]">Review</label>
            <input class="w-full ml-[30px] outline-none" type="text" required ="commentContent" v-model="commentContent" />
          </div>
          <button type="submit" class="border py-[10px] px-[20px] bg-[#080808] text-[#fff] hover:bg-[#fff] hover:text-[#000] transition-all duration-300" @click="submitContent">Add Review</button>
        </div>
      </div>
      <!-- Comment -->
      <div
        class="text-[25px] w-[700px] border-b py-[10px] flex flex-col justify-start items-start"
        v-for="comment in getComment"
        :key="comment.content + new Date()"
      >
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>
