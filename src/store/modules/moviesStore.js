import { UPDATE_MOVIES } from './../mutation-types';

const state = {
  movies: [{ name: 'Filme1' }],
  currentFilm: {},
};

const mutations = {
  [UPDATE_MOVIES](state, movies) {
    state.movies = movies;
  },
};

export default {
  state,
  mutations,
};
