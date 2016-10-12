import { UPDATE_MOVIES, SET_CURRENT_MOVIE } from './../mutation-types';

const state = {
  movies: [],
  currentMovie: {},
};

const mutations = {
  [UPDATE_MOVIES](state, movies) {
    state.movies = movies;
  },
  [SET_CURRENT_MOVIE](state, movie) {
    state.currentMovie = movie;
  }
};

export default {
  state,
  mutations,
};
