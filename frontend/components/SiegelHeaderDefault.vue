<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <img src="../assets/favicon_padding.svg" height="80%" />
        <LogoClaim />
      </nuxt-link>
      <NavigationDesktop />
      <BurgerMenu />
    </nav>
  </header>
</template>

<script>
import LogoClaim from "@/components/LogoClaim.vue";
import NavigationDesktop from "@/components/NavigationDesktop.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";

export default {
  name: "SiegelHeaderDefault",
  components: {
    LogoClaim,
    NavigationDesktop,
    BurgerMenu
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
  overflow: hidden;
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
</style>
