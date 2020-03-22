<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <img src="../assets/favicon_padding.svg" height="80%" />
        <LogoClaim />
      </nuxt-link>
      <NavigationDesktop
        :links="this.desktopLinks"
        id="desktop"
        ref="desktop"
        :class="{hidden: this.whiteSpace == '0px'}"
      />
      <NavigationBurger v-if="this.whiteSpace == '0px'"></NavigationBurger>
    </nav>
  </header>
</template>

<script>
import gql from "graphql-tag";

import LogoClaim from "@/components/LogoClaim.vue";
import NavigationDesktop from "@/components/NavigationDesktop.vue";
import NavigationBurger from "@/components/NavigationBurger.vue";

const routesQuery = gql`
  {
    routes(where: { enabled: true }) {
      url
      page {
        name
      }
      DesktopNavigation {
        enabled
        order
        style
      }
      MobileNavigation {
        enabled
        order
      }
      BurgerNavigation {
        enabled
        order
      }
    }
  }
`;

export default {
  name: "SiegelHeaderDefault",
  components: {
    LogoClaim,
    NavigationDesktop,
    NavigationBurger
  },
  data() {
    return {
      routes: [],
      whiteSpace: "1px"
    };
  },
  computed: {
    desktopLinks: function() {
      return this.routes
        .filter(el => el.DesktopNavigation.enabled)
        .sort((a, b) => {
          return a.DesktopNavigation.order - b.DesktopNavigation.order;
        });
    }
  },
  apollo: {
    routes: {
      prefetch: true,
      query: routesQuery
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      try {
        this.whiteSpace = parseInt(window.getComputedStyle(
          document.getElementById("desktop")
        ).marginLeft.split("px")[0]) < 610 ? "0px" : "1px";
      } catch (ex) {}
    });
    window.addEventListener("resize", () => {
      try {
        this.whiteSpace = window.getComputedStyle(
          document.getElementById("desktop")
        ).marginLeft;
      } catch (ex) {}
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/banner.jpg") center 35% no-repeat;
  background-size: cover;
  height: calc(128px + 30vw);
  max-height: 768px;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
}

nav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: calc(38.4px + 3vw);
  max-height: 96px;
  background: rgba(228, 229, 221, 0.75);
  bottom: 0;
  backdrop-filter: blur(6px);
  padding: 0 4%;
  box-sizing: border-box;
  user-select: none;

  > a {
    height: 100%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  > div {
    display: flex;
    align-items: center;
    min-width: 1px;
    margin-left: auto;
  }
}

.hidden {
  visibility: hidden;
}
</style>