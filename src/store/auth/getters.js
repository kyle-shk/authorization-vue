export default {
  userId(state) {
    return state.user;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};