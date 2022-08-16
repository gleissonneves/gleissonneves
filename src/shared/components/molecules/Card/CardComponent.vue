<template>
  <main class="card">
    <section class="card-img">
      asd
    </section>
    <section class="card-body">
      <section>
        <h1 class="card-title">
        {{ title }}
        </h1>
        <badge-component v-for="(badgeTitle, index) in badge" :key="index" :title="badgeTitle"/>
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
  border: 1px solid var(--green-color-primary);
  border-radius: var(--border-radius);

  .card-body {
    padding: .75rem;

    .card-title {
      font-size: 24px;
      font-family: 'Nunito';
    }

    .card-describle {
      margin-top: .5rem;
      font-size: 14px;
    }
  }
}
</style>
