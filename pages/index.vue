<script>
export default {
  name: 'IndexPage',
  beforeCreate() {
    this.$store.dispatch('Menu/getAllApi')
    this.$store.dispatch('Product/getAllApi')
  }
};
</script>
<template>
  <Tutorial />
</template>
