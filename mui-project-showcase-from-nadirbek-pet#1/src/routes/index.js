import { Redirect } from 'react-router-dom';
import React, { lazy } from 'react';

import Error from 'layouts/Error';
import Common from 'layouts/Common';
import * as ROUTES from './constants';

const routes = [{
  path: ROUTES.ERROR,
  component: Error,
  routes: [{
    path: ROUTES.NOT_FOUND,
    exact: true,
    component: lazy(() => import('views/NotFound')),
  }, { component: () => <Redirect to={ROUTES.NOT_FOUND} /> }],
}, {
  path: ROUTES.HOME,
  component: Common,
  routes: [{
    path: ROUTES.HOME,
    exact: true,
    component: lazy(() => import('views/Home')),
  }, {
    path: ROUTES.COMPANIES,
    exact: true,
    component: lazy(() => import('views/Companies')),
  }, {
    path: `${ROUTES.COMPANIES}/:id`,
    exact: true,
    component: lazy(() => import('views/Company')),
  }, {
    path: ROUTES.REVIEW,
    exact: true,
    component: lazy(() => import('views/Review')),
  }, {
    path: `${ROUTES.REVIEW}/:id`,
    exact: true,
    component: lazy(() => import('views/Questionnaire')),
  }, {
    path: `${ROUTES.DASHBOARD}/:tab?`,
    exact: true,
    component: lazy(() => import('views/Dashboard')),
  }, {
    path: ROUTES.LOGIN,
    exact: true,
    component: lazy(() => import('views/Login')),
  }, {
    path: ROUTES.REGISTER,
    exact: true,
    component: lazy(() => import('views/Register')),
  }, {
    path: ROUTES.PASSWORD,
    exact: true,
    component: lazy(() => import('views/Password')),
  }, { component: () => <Redirect to={ROUTES.NOT_FOUND} /> }],
}];

export default routes;
