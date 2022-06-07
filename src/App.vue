<template>
  <header-component/>
  <main class="container-app">
    <router-view/>
  </main>
</template>

<script>
import HeaderComponent from './shared/components/organism/Header/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/tokens.css';
@import '@/assets/css/reset.css';
main{
  &.container-app {
    margin-top: 135px;
    padding: 0 var(--padding-2);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem;
    padding: 20px var(--padding-2);
  }
}
</style>
