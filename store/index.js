// In Nuxt apps using vuex, cannot export `Store` object, 
// instead must export `state`, `getters`, et al. (as needed) as constants
export const state = () => ({
  // `state` is special case which must be function that returns an Object
})
export const getters = {}
// export const actions = {}
// export const mutations = {}