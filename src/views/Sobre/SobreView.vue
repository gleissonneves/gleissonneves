<template>
  <main id="sobre">
    <section id="info">
      <div class="info-container">
        <div id="info-photo">
          <img src="@/assets/img/eu.png" alt="eu" />
        </div>
      </div>
      <div class="info-container info-container-details">
        <h1 class="h1">Ei, Olá pessoa 👋 </h1>

        <p class="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo totam enim architecto sunt
          consequuntur corrupti ipsum cum libero! Vitae voluptas asperiores itaque eaque
          exercitationem sequi, rem maiores blanditiis expedita! Dolorem?
        </p>
      </div>
    </section>
  </main>
</template>

<script>
// import data from '@/shared/util/lang/data';

export default {
  name: 'SobreView',
  data() {
    return {
      langIdInPage: 'pt-br',
      langApp: {},
    };
  },

  created() {
    // this.langApp = data.lang.filter((item) => item.id === this.langIdInPage);
  },
};
</script>

<style lang="scss">
#sobre {
  #info {
    display: grid;

    #info-photo {
      height: 350px;
      width: 100%;
      background: var(--linear-gradient-brand-to-bottom);
      border-radius: 50px;
      border-top-left-radius: 0px;
      position: relative;
      background-size: contain;
      overflow: hidden;
      display: flex;
      justify-content: center;

      box-shadow: -20px 20px 83px #aaaaaa, 20px -20px 83px #ffffff;

      img {
        position: absolute;
        bottom: 0;
        height: 350px;
      }
    }

    .info-container-details {
      padding-top: 24px;
    }

    .p {
      font-size: 18px;
      margin-top: 34px;
    }
  }

  @media (min-width: 790px) {
    #info {
      grid-template-columns: repeat(2, 1fr);

      #info-photo {
        max-width: 400px;
      }

      .h1,
      .p {
        margin-left: 64px;
      }
    }
  }
}
</style>
