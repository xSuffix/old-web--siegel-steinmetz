<template>
  <div :class="{ hidden: $store.state.mobileNavigation }">
    <nuxt-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :class="[link.desktopNavigation.style]"
      >{{ link.page.name }}</nuxt-link
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavigationDesktop",
  computed: {
    ...mapState(["routes"]),
    links() {
      console.log(this.routes)
      return this.routes
        .filter(el => el.desktopNavigation.enabled)
        .sort((a, b) => {
          return a.desktopNavigation.order - b.desktopNavigation.order;
        });
    }
  },
  methods: {
    determineNavigationLayout: function(minWhiteSpace) {
      try {
        this.$store.commit(
          "setMobileNavigation",
          parseInt(
            window.getComputedStyle(this.$el).marginLeft.split("px")[0]
          ) <= minWhiteSpace
        );
      } catch (ex) {
        console.log(ex);
      }
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      this.determineNavigationLayout(610);
    });

    window.addEventListener("resize", () => {
      this.determineNavigationLayout(0);
    });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
}

.text {
  color: #3c3c3c;
  margin: 20px;
}

.button {
  color: #fff;
  background: #770019;
  margin: 20px;
  padding: 8px 22px;
  border-radius: 4px;
}

@media (max-width: 1920px) {
  a {
    font-size: calc(0.8vw + 9px);
  }
}
</style>
