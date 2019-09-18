import Vue from 'vue';
import Router from 'vue-router';

/**
 * Views and Layouts imports.
 */
import Home from '@/view/Home';
import Main from '@/layout/Main';
import NotFound from '@/view/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: '404',
          component: NotFound,
        },
      ],
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
