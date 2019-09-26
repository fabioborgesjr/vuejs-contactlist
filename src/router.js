import Vue from 'vue';
import Router from 'vue-router';

/**
 * Views and Layouts imports.
 */
import Home from '@/view/Home';
import Create from '@/view/Create';
import Edit from '@/view/Edit';
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
        {
          path: 'create',
          component: Create,
        },
        {
          path: '/:contato_id/edit',
          component: Edit
        }
      ],
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
