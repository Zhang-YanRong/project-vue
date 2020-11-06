<template>
  <svg v-else class="icon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: { type: String, required: true },
  },
  mounted() {},
  computed: {
    iconName() {
      return `#${this.iconClass}`;
    },
  },
};
</script>