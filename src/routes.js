import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Dash from './components/dash/Dash.vue';
import Newsfeed from './components/dash/Newsfeed.vue';

export const routes = [
  {
    path: '/',
    component: Dash,
    redirect: 'newsfeed',
    children: [
      {
        path: '/newsfeed',
        component: Newsfeed
      }
    ]
  },
  {
    path: '/auth',
    component: Auth,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: Login,
        meta: { requiresGuest: true }
      },
      {
        path: 'register',
        component: Register,
        meta: { requiresGuest: true }
      }
    ]
  }
];
