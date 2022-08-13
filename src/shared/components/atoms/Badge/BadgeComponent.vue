<template>
  <div class="badge">
   {{ title }}
  </div>
</template>

<script>

export default {
  name: 'BadgeComponent',
  props: {
    title: {
      require: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
.badge {
    margin: 2px;
    font-family: 'Nunito';
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    border-radius: 0.125rem;
    font-weight: 700;
    background-color: var(--secundary-color);
    color: var(--white-contrast-color);
    opacity: .7;
}
</style>
