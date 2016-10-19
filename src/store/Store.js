import Vue from 'vue';
import Vuex from 'vuex';

import moviesStore from './modules/moviesStore';
import planetsStore from './modules/planetsStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moviesStore,
    planetsStore,
  },
});
