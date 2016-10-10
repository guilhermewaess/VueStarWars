import * as mutations from './mutation-types';
import getFilms from './../services/moviesService';

export const updateFilms = ({ dispatch }) => {
  getFilms().then((response) => {
    dispatch(mutations.UPDATE_MOVIES, response.body.results);
  });
};

export const setCurrentMovie = ({ dispatch}, movie) => {
  dispatch(mutations.SET_CURRENT_MOVIE, movie);
};
