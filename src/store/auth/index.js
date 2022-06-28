import {createStore} from 'vuex'
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default createStore({
    state() {
      return {
        user:{},
        token:null

      };
    },
    mutations,
    actions,
    getters
  })
