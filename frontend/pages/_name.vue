<template>
  <div>{{this.$route.params.name}}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      route: `/${this.$route.params.name}`
    }
  },
  computed: {
    ...mapState(["pages"]),
    page() {
      return true//this.pages.find(el => el.route === this.route) || this.pages.find(el => el.route === "/404") || { name: "404" }
    }
  },
  mounted() {
    console.log(this.page);
  },
  head() {
    return {
      title: `${this.page.name} - Siegel Steinmetz`,
    };
  }
};
</script>

<style lang="scss" scoped>
</style>