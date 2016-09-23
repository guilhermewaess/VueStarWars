import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import App2 from './App-1.vue';

import 'jquery';
import './assets/semantic/semantic.css';
import './assets/semantic/semantic.js';

// install router
Vue.use(VueRouter);

// routing
const router = new VueRouter();

router.map({
  '/home': {
    component: App2,
  },
});

router.redirect({
  '*': '/home',
});

router.start(App, 'app');


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });
