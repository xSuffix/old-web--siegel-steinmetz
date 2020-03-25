<template>
  <div>
    <SiegelHeaderDefault />
    <nuxt />
    <NavigationMobile />
  </div>
</template>

<script>
import gql from "graphql-tag";
import pagesQuery from "~/apollo/queries/page/pages";
import SiegelHeaderDefault from "~/components/SiegelHeaderDefault.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";

const routesQuery = gql`
  {
    routes(where: { enabled: true }) {
      url
      page {
        name
      }
      desktopNavigation {
        enabled
        order
        style
      }
      mobileNavigation {
        enabled
        order
      }
      burgerNavigation {
        enabled
        order
      }
    }
  }
`;

export default {
  data() {
    return {
      routes: []
    };
  },
  components: {
    SiegelHeaderDefault,
    NavigationMobile
  },
  apollo: {
    routes: {
      prefetch: true,
      query: routesQuery
    }
  },
  mounted() {
    this.$store.dispatch("getRoutes");
    // this.$nextTick(() => {
    //   console.log(this.routes);
    //   this.$store.commit("setRoutes", this.routes);
    // });
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --color-primary: #770019;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.hidden {
  visibility: hidden;
}
</style>
