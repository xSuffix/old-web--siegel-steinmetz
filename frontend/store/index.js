import gql from 'graphql-tag'

export const state = () => ({
  mobileNavigation: false,
  routes: []
})

export const mutations = {
  setMobileNavigation(state, bool) {
    state.mobileNavigation = bool;
  },
  setRoutes(state, routes) {
    state.routes = routes
  }
}

export const actions = {
  async getRoutes({
    commit
  }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql `
      query Pages {
        routes(where: { enabled: true }) {
          url
          icon
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
      `
    })

    const {
      routes
    } = response.data
    commit('setRoutes', routes)
  }
}
