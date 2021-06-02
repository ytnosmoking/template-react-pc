import { asyncComponent } from './loadable';
import Loadable from 'react-loadable';
import Loading from 'routes/loadable';
import { lazy } from 'react';

// import Home from 'views/Home';
export const getView = (view) =>
  Loadable({
    loader: () => import(`views/${view}`),
    loading: Loading,
  });

export const getLazy = (view) => lazy(() => import(`views/${view}`));

// baseRoute (layout login)
export const routes = [
  {
    to: '/login',
    title: 'Login',
    // children: import('views/Login')
    // children: Login
    // children: getView('Login')
    // children: getLazy('Login')
    view: asyncComponent('Login'),
    children: [],
  },
  {
    to: '/',
    title: 'layout',
    view: asyncComponent('Layout'),
    children: [],
  },
];

// configRoute(all other routes)
export const otherRoutes = [
  {
    to: '/home',
    title: 'Home',
    view: asyncComponent('ChildView', false),
    children: [
      {
        to: '/home/test',
        title: 'Test',
        view: asyncComponent('Home/Test'),
      },
      {
        to: '/home/index',
        title: 'index',
        view: asyncComponent('Home'),
      },
    ],
  },
  {
    to: '/base',
    title: 'Base',
    view: asyncComponent('Base'),
    children: [],
  },
  {
    to: '/hooks',
    title: 'Hooks',
    view: asyncComponent('ChildView', false),
    children: [
      {
        to: '/hooks/memo',
        title: 'memo',
        view: asyncComponent('Hooks/memo'),
      },
    ],
  },
];
