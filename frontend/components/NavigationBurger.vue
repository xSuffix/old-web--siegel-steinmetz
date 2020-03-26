<template>
  <nav v-if="$store.state.openBurgerMenu">
    test
  </nav>
</template>

<script>
export default {
  name: "NavigationBurger",
}
</script>

<style lang="scss" scoped>
nav {
  background: blueviolet;
  width: 100%;
  // height: 
}
</style>