<template>
  <main>
    <section>
      hello, im a card!
    </section>
    <section>
      <h1 class="card-title">
      {{ title }}
      </h1>
      <badge-component v-for="(badgeTitle, index) in badge" :key="index" :title="badgeTitle"/>
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
.card-title {
  font-size: 24px;
  font-family: 'Nunito';
}
</style>
