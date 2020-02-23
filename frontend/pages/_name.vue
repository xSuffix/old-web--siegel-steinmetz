<template>
  <div>{{this.$route.params.name}}</div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$route.params.name} - Siegel Steinmetz`,
    };
  }
};
</script>

<style lang="scss" scoped>
</style>