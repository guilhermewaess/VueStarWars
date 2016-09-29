import * as mutations from './mutation-types';

export const updateFilms = ({ dispatch }) => {
  dispatch(mutations.UPDATE_MOVIES, ['a', 'ab', 'abc']);
};
