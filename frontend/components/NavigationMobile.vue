<template>
  <nav v-if="this.$store.state.mobileNavigation">
    {{this.$store.routes}}
  </nav>
</template>

<script>
export default {
  name: "NavigationMobile",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  background: #fff;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background: #ddd;
    position: absolute;
  }
}
</style>