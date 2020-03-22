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
    const response = await this.$apollo.query({
      query: gql `
      query Pages {
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
      `
    })

    const {
      pages
    } = response.data
    commit('setRoutes', pages)
  }
}
