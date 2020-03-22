<template>
  <div>
    <nuxt-link v-for="link in links" :key="link.url" :to="link.url" :class="[link.DesktopNavigation.style]">{{link.page.name}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NavigationDesktop",
  props: {
    links: Array
  },
}
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

@media (max-width: 900px) {
  div {
    /* display: none !important; */
  }
}
</style>