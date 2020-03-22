import Vue from 'vue'
import ApolloClient from 'apollo-boost'

const apollo =  new ApolloClient({
  uri: process.env.BACKEND_URL || "http://localhost:1337/graphql"
})

Vue.prototype.$apollo = apollo