import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from "easy-peasy";

import Appwrapper from 'components/';
import Store from 'state/Store';

ReactDOM.render(
  <StoreProvider store={Store}>
    <Appwrapper />
  </StoreProvider>,
  document.getElementById('root')
);
