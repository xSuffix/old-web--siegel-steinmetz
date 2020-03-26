<template>
  <div>{{this.page}}</div>
</template>

<script>
import { mapState } from "vuex";
import pageByRouteQuery from "@/apollo/queries/page/pageByRoute.gql"

export default {
  data() {
    return {
      route: `/${this.$route.params.name || ""}`,
      pages: ["test"]
    }
  },
  computed: {
    page() {
      return this.pages[0]
    }
  },
  mounted() {
    console.log(this.route);
  },
  head() {
    return {
      title: `${this.page} - Siegel Steinmetz`,
    };
  },
  apollo: {
    pages: {
      query: pageByRouteQuery,
      variables() {
        return {
          URL: this.route
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>