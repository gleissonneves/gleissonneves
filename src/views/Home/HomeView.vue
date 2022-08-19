<!-- eslint-disable vue/valid-v-on -->
<template>
  <div class="home">
    <!--  -->
    <section id="home-content-title">
      <span class="home-subtitle-sm text-gradient">
        Bem-vindo, Humano!
      </span>
      <h1 class="home-title">
        Eu sou Gleisson Neves
      </h1>
      <p class="home-subtitle-md">
        Desenvolvedor Front-end na
        <a :href="empresa.link" target="_blank" rel="noopener noreferrer" class="text-gradient">
          {{ empresa.nome }}
        </a> <br>
        & Freelancer com expertises em UI e Back-end.
      </p>
    </section>
    <!--  -->

    <!--  -->
    <section id="home-content-project">
      <div class="home-content-project-content">
        <div class="home-content-project-content-title">
          <h1>Projetos</h1>
        </div>
        <div class="home-content-project-content-pesquisa">
          <label for="home-content-project-pesquisa">
            <input type="text" name="pesquisa" id="home-content-project-pesquisa"
              placeholder="Pesquisar título do projeto">
            <i id="input-for-search" class="fa-solid fa-magnifying-glass"></i>
          </label>
          <button class="home-content-project-filter">
            <i id="btn-icon" class="fa-solid fa-gear"></i>
            Filtrar
          </button>
        </div>
      </div>
    </section>
    <!--  -->

    <section id="home-content-cards">
      <tab-component
        :tabList="tabList"
        @activedTabById="declareListeningTabId($event)"
      />

      <div id="gruop-container-tab">
        <TransitionGroup tag="div" name="tab" mode="out-in">
          <div class="tab-content-card" v-if="tabIdActived === 1">
            <div class="tab-content-card-body">
              <card-component
                title="Teste"
                :badge="badge"
              />

              <card-component
                title="Teste"
                :badge="badge"
              />

              <card-component
                title="Teste"
                :badge="badge"
              />

              <card-component
                title="Teste"
                :badge="badge"
              />

              <card-component
                title="Teste"
                :badge="badge"
              />

              <card-component
                title="Teste"
                :badge="badge"
              />
            </div>
          </div>

          <div class="tab-content-card" v-else-if="tabIdActived === 2">
            <div class="tab-content-card-body">
              <card-component
                title="Teste"
                :badge="UIbadge"
              />

              <card-component
                title="Teste"
                :badge="UIbadge"
              />

              <card-component
                title="Teste"
                :badge="UIbadge"
              />

              <card-component
                title="Teste"
                :badge="UIbadge"
              />

              <card-component
                title="Teste"
                :badge="UIbadge"
              />

              <card-component
                title="Teste"
                :badge="UIbadge"
              />
            </div>
          </div>

          <div class="tab-content-card" v-else>
            <card-component
              title="Teste"
              :badge="Badgewordpress"
            />

            <card-component
              title="Teste"
              :badge="Badgewordpress"
            />

            <card-component
              title="Teste"
              :badge="Badgewordpress"
            />

            <card-component
              title="Teste"
              :badge="Badgewordpress"
            />

            <card-component
              title="Teste"
              :badge="Badgewordpress"
            />

            <card-component
              title="Teste"
              :badge="badge"
            />
          </div>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script>
import { TransitionGroup } from 'vue';
import projects from '@/shared/data/projects';
import TabComponent from '@/shared/components/atoms/Tab/TabComponent.vue';
import CardComponent from '@/shared/components/molecules/Card/CardComponent.vue';

export default {
  name: 'HomeView',
  components: {
    CardComponent,
    TabComponent,
    TransitionGroup,
  },
  data() {
    return {
      tabIdActived: [String, Number],
      empresa: {
        nome: 'Global Tecnologia',
        link: 'https://globaltecnologia.net/',
      },
      badge: ['front-end', 'Vue'],
      Badgewordpress: ['elementor', 'SEO'],
      UIbadge: ['figma', 'UI'],
      tabList: Array,
    };
  },

  created() {
    console.log(projects.data);
    this.tabList = projects.data;
  },

  methods: {
    declareListeningTabId(tabIdActived) {
      this.tabIdActived = tabIdActived;
    },
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

  @media (min-width: 768px) {
    .home-content-project-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .home-content-project-content-title {}

  .home-content-project-content-pesquisa {
    margin-top: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    min-width: 100%;

    label[for="home-content-project-pesquisa"] {
      min-width: calc(300px - 110px);
      width: 100%;
      position: relative;

      #input-for-search {
        font-size: 14px;
        position: absolute;
        left: .75rem;
        top: .85rem;
        color: var(--green-color-primary);
      }
    }

    #home-content-project-pesquisa {
      background-color: var(--white-contrast-color);
      width: 100%;
      outline: 0px;
      position: relative;
      appearance: none;
      transition: all 0.2s ease 0s;
      font-size: 1rem;
      padding-left: 2rem;
      padding-right: 1rem;
      height: 2.5rem;
      border-radius: 0.375rem;
      border-width: 1px;
      border-style: solid;

      &:focus {
        border-color: var(--primary-color);
      }
    }

    .home-content-project-filter {
      cursor: pointer;
      border: none;
      background-color: var(--primary-color);
      color: var(--white-contrast-color);
      border-radius: 0.375rem;
      padding: 0.75rem;
      user-select: none;
      white-space: nowrap;
      font-weight: 600;
      height: 2.5rem;
      font-size: 1rem;
      margin-left: 0.5rem;

      #btn-icon {
        font-size: 14px;
        margin-right: .25rem;
      }
    }
  }

  @media (min-width: 768px) {
    .home-content-project-content-pesquisa {
      min-width: 55%;
      justify-content: flex-end;

      label[for="home-content-project-pesquisa"] {
        min-width: 300px;
      }
    }
  }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
}

#gruop-container-tab,
#home-content-cards {
  margin-top: 32px;
}

#gruop-container-tab {
 .tab-content-card {
    display: grid;
    flex-wrap: wrap;
    gap: 24px;
  }

  @media (min-width: 570px) {
    .tab-content-card {
       grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .tab-content-card {
       grid-template-columns: repeat(3, 1fr);
    }
  }
}

// transition vue
.tab-enter-active {
  transition: all .7s;
}

.tab-leave-active {
  transition: all .7s ease;
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
