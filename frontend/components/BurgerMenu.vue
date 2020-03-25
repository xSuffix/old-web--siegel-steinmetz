<template>
  <svg
    v-if="$store.state.mobileNavigation"
    @click="$store.commit('invertBurgerMenu')"
    :class="{ active: $store.state.openBurgerMenu }"
    xmlns="http://www.w3.org/2000/svg"
    fill="#3c3c3c"
    viewBox="0 0 48 31"
  >
    <rect width="48" height="5" y="26" rx="2" />
    <rect width="48" height="5" y="13" rx="2" />
    <rect width="48" height="5" rx="2" />
  </svg>
</template>

<script>
export default {
  name: "NavigationBurger",
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
  flex-shrink: 0;
  height: 40%;
  margin: auto 0;
  transition: transform 0.2s ease-in-out;

  rect {
    transition: width 0.2s ease-in-out;
  }
}

.active {
  transform: rotate(30deg);

  :nth-child(2) {
    width: 80%;
  }

  :nth-child(3) {
    width: 60%;
  }
}
</style>
