<template>
  <ul id="menu-content" :class="{ 'display-block': !toggleState }">
    <li class="menu-content-item">
      <router-link to="/" replace>Home</router-link>
    </li>
    <li class="menu-content-item">
      <router-link to="/about" replace>Sobre</router-link>
    </li>
    <li class="menu-content-item">
      <router-link to="/criando-um-projeto" replace>Criando um projeto</router-link>
    </li>
  </ul>

  <button id="menu-button-toggle" @click="toggleMenu()">
    <i class="fa-solid fa-bars color-writh bar-list" v-if="toggleState"></i>
    <i class="fa-solid fa-x color-writh close-list" v-else></i>
  </button>
</template>

<script>

export default {
  data() {
    return {
      showMenu: String,
      toggleState: {
        type: Boolean,
        default: false,
      },
    };
  },

  methods: {
    toggleMenu() {
      this.toggleState = !this.toggleState;
    },
  },
};
</script>

<style lang="scss">
#menu-content {
  display: none;
  position: absolute;
  right: var(--stack-2);
  background-color: var(--light-thema);
  width: 225px;
  bottom: -75px;
  border-radius: var(--border-radius);
  padding: .5rem .75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 1px,
    rgb(0 0 0 / 20%) 0px 5px 10px,
    rgb(0 0 0 / 40%) 0px 15px 40px;

  .menu-content-item {
    display: block;
  }

  .menu-content-item {
    margin-bottom: .5rem;
  }

  @media (min-width: 700px) {
    .menu-content-item {
      margin-bottom: 0;
    }

    .menu-content-item:nth-child(1n+2) {
      margin-left: 1rem;
    }
  }

  a {
    font-weight: 500;
    color: var(--black-contrast-color);

    &.router-link-active {
      font-weight: 700;
      color: var(--primary-color);
    }
  }
}

@media (min-width: 700px) {
  #menu-content {
    display: block;
    position: inherit;
    right: auto;
    background-color: transparent;
    width: auto;
    bottom: auto;
    border-radius: 0;
    padding: 0;
    box-shadow: none;

    .menu-content-item {
      display: inline-block;
    }

    .menu-content-item {
      margin-bottom: .5rem;
    }

    @media (min-width: 700px) {
      .menu-content-item {
        margin-bottom: 0;
      }

      .menu-content-item:nth-child(1n+2) {
        margin-left: 1rem;
      }
    }

    a {
      font-weight: 500;
      color: var(--black-contrast-color);

      &.router-link-active {
        font-weight: 700;
        color: var(--primary-color);
      }
    }
  }
}

#menu-button-toggle {
  display: block;
  border: none;
  padding: .4rem;
  min-width: 32px;
  text-align: center;
  border-radius: var(--border-radius);
  background-color: var(--primary-color);

  &:active {
    background-color: #45AEFF;
  }

  .bar-list {
    font-size: 1.4rem;
  }

  .close-list {
    font-size: 1.4rem;
  }
}

@media (min-width: 700px) {
  #menu-button-toggle {
    display: none;
  }
}

.display-block {
  display: block !important;
}
</style>
