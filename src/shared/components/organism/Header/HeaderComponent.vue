<template>
    <header>
        <nav>
            <logo-component/>
            <menu-component/>
        </nav>
    </header>
</template>

<script>
import LogoComponent from '@/shared/components/atoms/Logo/LogoComponent.vue';
import MenuComponent from '@/shared/components/molecules/Menu/MenuComponent.vue';

export default {
  components: {
    LogoComponent,
    MenuComponent,
  },
};
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    border-top: 1rem solid transparent;
    border-image: var(--linear-gradient-brand);
    border-image-slice: 1;
    width: 100%;
    z-index: 10;
    backdrop-filter: saturate(180%) blur(20px);
    height: 135px;

    nav {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 48rem;
        padding: 20px var(--padding-2);
    }
}
</style>
