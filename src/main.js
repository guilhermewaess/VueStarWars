import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './Home.vue';
import MovieDetails from './MovieDetails.vue';
import Planets from './components/Planets.vue';


import 'jquery';


// install router
Vue.use(VueRouter);

// install VueResource
Vue.use(VueResource);
Vue.url.options.root = 'https://swapi.co/api';

// routing
const router = new VueRouter();

router.map({
  '/home': {
    name: 'home',
    component: Home,
  },
  '/movie': {
    name: 'movie',
    component: MovieDetails,
  },
  '/planets': {
    name: 'planets',
    component: Planets,
  },
});

router.redirect({
  '*': '/home',
});

router.start(App, 'app');

// new Vue(Vue.util.extend({ router, store }, App)).$mount('app');


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });
