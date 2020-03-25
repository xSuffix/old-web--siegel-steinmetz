<template>
  <nav v-if="this.$store.state.mobileNavigation">
    <nuxt-link v-for="link in links" :key="link.url" :to="link.url"
      ><div>
        <span class="material-icons">{{ link.icon }}</span
        >{{ link.page.name }}
      </div></nuxt-link
    >
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavigationMobile",
  computed: {
    ...mapState(["routes"]),
    links() {
      return this.routes
        .filter(el => el.mobileNavigation.enabled)
        .sort((a, b) => {
          return a.mobileNavigation.order - b.mobileNavigation.order;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background: #ddd;
    position: absolute;
  }

  a {
    display: flex;
    flex-grow: 1;
    align-content: center;
    justify-content: center;
    text-align: center;    
    text-decoration: none;
    color: #5f6268;
    height: 100%;

    &.nuxt-link-exact-active {
      color: var(--color-primary);
    }

    &:active:not(.nuxt-link-exact-active) {
      color: #3c3c3c;
    }

    div {
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
}
</style>
