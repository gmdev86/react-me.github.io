import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const ComponentTest = React.lazy(() => import('./views/ComponentTest/ComponentTest'));
const MaskedInput = React.lazy(() => import('./views/Components/MaskedInput'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/componentTest', name: 'Test', component: ComponentTest },
  { path: '/components/maskedInput', name: 'MaskedInput', component: MaskedInput }
];

export default routes;
