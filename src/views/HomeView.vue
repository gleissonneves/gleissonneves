<template>
  <div class="home">
    <section id="home-content-title">
      <span class="home-subtitle-sm text-gradient">
        Bem-vindo Humano!
      </span>
      <h1 class="home-title">
        Eu sou Gleisson Neves
      </h1>
      <p class="home-subtitle-md">
        Desenvolvedor Front-end na
        <a :href="empresa.link" target="_blank" rel="noopener noreferrer" class="text-gradient">
          {{   empresa.nome }}
        </a> <br>
        & Freelancer com expertises em UI e Back-end.
      </p>
    </section>

    <section id="home-content-project">
      <div class="home-content-project-content">
        <div class="home-content-project-content-title">
          <h1>Projetos</h1>
        </div>
        <div class="home-content-project-content-pesquisa">
          <label for="home-content-project-pesquisa">
            <input type="text" name="pesquisa" id="home-content-project-pesquisa">
          </label>
          <button class="home-content-project-filter">
            Filtros
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      empresa: {
        nome: 'Global Tecnologia',
        link: 'https://globaltecnologia.net/',
      },
    };
  },
};
</script>

<style lang="scss">
#home-content-title {
  padding-top: 1.25rem;
}

.home-title {
  color: var(--black-contrast-color);

}
.home-subtitle-sm {
  font-weight: 600;
  font-size: 1.2rem;
}

.home-subtitle-md {
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--black-contrast-color);

  a {
    color: var(--primary-color);
    font-weight: 700;
  }
}

#home-content-project {
  padding-top: 3rem;
  color: var(--black-contrast-color);

  .home-content-project-content {
    display: flex;
    flex-direction: column;

  }

  .home-content-project-content-title {}
  .home-content-project-content-pesquisa {
    margin-top: .5rem;
    display: flex;
    flex-direction: row;

    #home-content-project-pesquisa {
      width: 100%;
      outline: 0px;
      position: relative;
      appearance: none;
      transition: all 0.2s ease 0s;
      font-size: 1rem;
      padding-left: 2.5rem;
      padding-right: 1rem;
      height: 2.5rem;
      border-radius: 0.375rem;
      border-width: 1px;
      border-style: solid;
    }

    .home-content-project-filter {
      cursor: pointer;
      border: none;
      background: var(--linear-gradient-brand);
      color: var(--white-contrast-color);
      border-radius: 0.375rem;
      padding: 0.75rem;
      user-select: none;
      white-space: nowrap;
      font-weight: 600;
      height: 2.5rem;
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
}
</style>
