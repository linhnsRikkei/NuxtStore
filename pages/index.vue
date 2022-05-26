<script>
export default {
  name: 'IndexPage',
  layout: 'userLayout',
  beforeCreate() {
    this.$store.dispatch('Menu/getAllApi')
    this.$store.dispatch('Product/getAllApi')
  }
};
</script>
<template>
  <Tutorial />
</template>
