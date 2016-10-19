import { UPDATE_PLANETS, SET_CURRENT_PLANET, LOADING_PLANETS } from './../mutation-types.js';

const state = {
  loadingPlanets: false,
  planets: [],
  currentPlanet: {}
};

const mutations = {
  [UPDATE_PLANETS](state, planets) {
    state.planets = planets;
  },
  [SET_CURRENT_PLANET](state, planet) {
    state.currentPlanet = planet;
  },
  [LOADING_PLANETS](state, isLoading) {
    state.loadingPlanets = isLoading;
  }
}

export default {
  state,
  mutations
}