<template>
    <ul id="menu-content">
        <li class="menu-content-item">
            <router-link to="/" replace>Home</router-link>
        </li>
        <li class="menu-content-item">
            <router-link to="/about" replace>Sobre</router-link>
        </li>
    </ul>

    <button id="menu-button-toggle">
        <img alt="list" src="@/assets/img/icon/list.svg">
        <!-- <img alt="X" src="@/assets/img/icon/x.svg"> -->
    </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
#menu-content {
    display: block;
    position: inherit;

    .menu-content-item {
        display: inline-block;
    }

    .menu-content-item:nth-child(1n+2) {
        margin-left: 1rem;
    }

    a {
        font-weight: 500;
        color: #262626;

        &.router-link-active {
            font-weight: 700;
            color: var(--primary-color);
        }
    }
}

#menu-button-toggle {
    display: none;
    border: none;
    padding: .3rem;
    border-radius: 10px;
    background-color: var(--primary-color);

    img {
        height: 1.86rem;
    }
}

@media (min-width: 900px) {
    #menu-button-toggle {
        display: none;
    }
}
</style>
