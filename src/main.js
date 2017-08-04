// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'
import Auth from './plugins/Auth'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Auth);



// configure vue-router interceptors
Vue.http.interceptors.push((request, next) => {
  if (request.url[0] === '/') {
    request.url = process.env.API + request.url;

    const token = Vue.auth.getToken();
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
  }
  next((res) => {
    if (res.status === 422) {
      res.body.errors.forEach((e) => {
        alertify.error(e);
      })
    }
  })
});

const router = new VueRouter({
  mode: 'history',
  routes
});

// configure vue-router guards
router.beforeEach((to, from , next) => {
  // prevent access to 'requiresGuest' routes
  if (to.matched.some((record) => record.meta.requiresGuest ) && Vue.auth.loggedIn()) {
    next({ path: '/newsfeed' });
  } else if (to.matched.some((record) => record.meta.requiresAuth ) && !Vue.auth.loggedIn()) {
    next({
      path: '/auth/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next(); // make sure always call next()
  }
});

Vue.config.productionTip = false;

// configure alertify defaults
alertify.defaults.notifier.position = 'top-right';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
