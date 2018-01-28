import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Editor from '@/components/Editor';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    }, {
      path: '/editor',
      name: 'Editor',
      component: Editor,
    },
  ],
});
