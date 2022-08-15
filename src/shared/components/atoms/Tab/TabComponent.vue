<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="tab-container">
    <ul>
      <li v-for="item in tabList"
        :key="item.id"
        :class="isActivedTab(item.id) ? 'actived' : ''"
        @click="setActivedTab(item.id)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  props: {
    tabList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activedTab: [String, Number],
    };
  },

  created() {
    this.activedTab = this.tabList[0].id;
  },

  methods: {
    isActivedTab(id) {
      return this.activedTab === id;
    },

    setActivedTab(id) {
      this.activedTab = id;
    },
  },
};
</script>

<style lang="scss">
.tab-container {
  width: 100%;

  ul {
    display: flex;
    border-bottom: 1px solid var(--green-color-primary);
    width: 100%;
    padding-bottom: 16px;

    li {
      color: var(--black-contrast-color);
      cursor: pointer;
      position: relative;
      font-weight: 600;
      font-size: 14px;
      padding-left: 4px;
      padding-right: 4px;

      &:nth-child(1n+1) {
        margin-right: 24px;
      }

      &.actived {
        font-weight: bold;

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -17px;
          border-radius: 2px;
          background: var(--linear-gradient-brand);
        }
      }
    }
  }
}
</style>
