<template>
  <img alt="GN logo" src="@/assets/img/logo.svg" :height="height">
</template>

<script>
export default {
  name: 'LogoComponent',
  props: {
    height: {
      type: Number,
      required: false,
      default: 59,
    },
  },
};
</script>

<style lang="scss">
</style>
