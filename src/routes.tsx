/* eslint-disable linebreak-style */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import LoginPage from './pages/Login';
import NewProfyPage from './pages/NewProfy';
import DescriptionPage from './pages/Description';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={LoginPage} path="/" exact />
      <Route component={NewProfyPage} path="/profy" />
      <Route component={DescriptionPage} path="/description/:id" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
