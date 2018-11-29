import React from 'react';

import App from '../App';
import Home from '../views/Home';
import Login from '../views/Login';

const router = [{
  path: '/',
  component: App,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    },
  ]

}];

export default router;
