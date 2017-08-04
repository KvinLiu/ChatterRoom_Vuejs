import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export const routes = [
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
