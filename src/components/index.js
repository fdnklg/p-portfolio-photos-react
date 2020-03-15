import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import history from '../history';

import AppWrapper from 'components/AppWrapper';

const NotFoundRoute = () => (
  <Redirect to="/" />
);

const App = () => {
  const loadData = useStoreActions((action) => action.loadData);
  useEffect(() => {
    loadData();
  },[]);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={['/']} component={AppWrapper} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  )
}

export default App;