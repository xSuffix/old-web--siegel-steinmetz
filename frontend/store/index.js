// import gql from 'graphql-tag'
// // import apollo from './apolloClient'

// export const state = () => ({
//   pages: [{
//       name: "Home",
//       route: "/test"
//     },
//     {
//       name: "505",
//       route: "/404"
//     }
//   ]
// })

// export const mutations = {
//   setPages(state, pages) {
//     state.pages = pages;
//   },
//   addPage(state, page) {
//     state.pages.push(page);
//   }
// }

// export const actions = {
//   async getPages({
//     commit
//   }) {
//     console.time('getPages')

//     const response = await this.$apollo.query({
//       query: gql `
//       query Pages {
//         pages(where: {
//           active: true
//         }) {
//           path
//           name
//           navigation {
//             desktop_navigation
//             desktop_navigation_order
//             desktop_navigation_button
//             mobile_navigation
//             mobile_navigation_order
//             mobile_burgermenu
//             mobile_burgermenu_order
//           }
//           widgets {
//             Name
//             Content {
//               __typename
//             }
//           }
//         }
//       }
//       `
//     })

//     const {
//       pages
//     } = response.data
//     commit('setPages', pages)

//     console.timeEnd('getPages')
//   }
// }
