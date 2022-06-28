export default {
  setUser(state, payload) {
    console.log('payload: ',payload.user)
    state.user = payload.user;
    state.token = payload.token
  },

}; 