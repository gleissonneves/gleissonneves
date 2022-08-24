<template>
  <main class="card">
    <section class="card-img"></section>
    <section class="card-body">
      <section>
        <badge-component v-for="(badgeTitle, index) in badge" :key="index" :title="badgeTitle"/>

        <h1 class="card-title">
        {{ title }}
        </h1>
      </section>

      <section class="card-describle">
        <span>asdad</span>
      </section>
    </section>
  </main>
</template>

<script>
import BadgeComponent from '../../atoms/Badge/BadgeComponent.vue';

export default {
  name: 'CardComponent',
  components: {
    BadgeComponent,
  },
  props: {
    title: {
      require: true,
      type: String,
    },
    badge: {
      require: false,
      type: Array,
    },
  },
  data() {
    return {
    };
  },

  computed() {
    console.log(this.badge);
  },

  methods: {},
};
</script>

<style lang="scss">
.card {
  position: relative;
  background-clip: border-box;
  border: 1px solid var(--green-color-primary);
  border-radius: var(--border-radius);
  padding: .75rem;

  .card-img {
    border-radius: var(--border-radius);
    width: 100%;
    min-height: 115px;
    margin-bottom: .25rem;
    background-color: #c244fc;
    background-repeat: no-repeat;
    background-position: center;
  }

  .card-body {
    .card-title {
      font-size: 24px;
      font-family: 'Nunito';
    }

    .card-describle {
      font-size: 14px;
    }
  }
}
</style>
