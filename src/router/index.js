import React from 'react';
import Home from '../views/Home';
import Login from '../views/Login';

export default [
  {
    path: '/',
    component: Home,
    // exact: true,
    loadData: () => Home.loadData(),
    key: 'home',
    routes: [{
      path: '/test',
      component: Login,
      exact: true,
      key: 'test'
    }]
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  },
];
