import Vue from 'vue';

export default function getPlanets() {
  return Vue.http.get('planets/');
}