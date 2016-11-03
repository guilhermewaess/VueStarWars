import Vue from 'vue';

export default function getMovies() {
  return Vue.http.get('films/');
}
