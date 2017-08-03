// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  if (request.url[0] === '/') {
    request.url = process.env.API + request.url;
  }
  next((res) => {
    if (res.status === 422) {
      res.body.errors.forEach((e) => {
        alertify.error(e);
      })
    }
  })
})

Vue.config.productionTip = false;

alertify.defaults.notifier.position = 'top-right';

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
