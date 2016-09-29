import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './Home.vue';


import 'jquery';
import './assets/semantic/semantic.css';
import './assets/semantic/semantic.js';

// install router
Vue.use(VueRouter);
Vue.use(VueResource);

// routing
const router = new VueRouter();

router.map({
  '/home': {
    component: Home,
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
