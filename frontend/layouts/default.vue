<template>
  <div>
    <!-- <div v-for="route in this.routes" :key="route.url">{{route}}</div> -->
    <SiegelHeaderDefault />
    <nuxt />
  </div>
</template>

<script>
import gql from "graphql-tag";
import pagesQuery from "~/apollo/queries/page/pages";
import SiegelHeaderDefault from "~/components/SiegelHeaderDefault.vue";

import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

// export const pages = gql`
//   type Page {
//     id: ID!
//     name: String
//   }
// `;

// export const routes = gql`
//   type Route {
//     url: String!
//     page: Page(name: String)
//   }
// `;

const apolloClient = new ApolloClient({
  cache,
  // pages,
  // routes,
  resolvers: {}
});

cache.writeData({
  data: {
    routes: [
      {
        url: "blablub",
        __typename: "Route",
        page: {
          name: "testpage",
          __typename: "Page"
        }
      }
    ]
  }
})

// const routesQuery = gql`
//   {
//     routes @client {
//       url
//       page {
//         name
//       }
//     }
//   }
// `

export default {
  data() {
    return {
      // routes: []
    };
  },
  components: {
    SiegelHeaderDefault
  },
  // apollo: {
  //   routes: {
  //     prefetch: true,
  //     query: routesQuery
  //   }
  // }
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
</style>
