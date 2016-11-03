import * as mutations from './mutation-types';
import getMovies from './../services/moviesService';
import getPlanets from './../services/planetsService';


export const updateMovies = ({ dispatch }) => {
  getMovies().then((response) => {
    dispatch(mutations.UPDATE_MOVIES, response.body.results);
  });
};

export const setCurrentMovie = ({ dispatch }, movie) => {
  dispatch(mutations.SET_CURRENT_MOVIE, movie);
};

export const updatePlanets = ({ dispatch }) => {
  dispatch(mutations.LOADING_PLANETS, true);
  getPlanets()
    .then((response) => {
      dispatch(mutations.UPDATE_PLANETS, response.body.results);
    })
    .finally(() => {
      dispatch(mutations.LOADING_PLANETS, false);
    })
};

export const setCurrentPlanet = ({ dispatch }, planet) => {
  dispatch(mutations.SET_CURRENT_PLANET, planet);
};
