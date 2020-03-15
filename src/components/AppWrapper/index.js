/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';
import { useStoreState, useStoreActions } from 'easy-peasy';
import React, { useState, useEffect } from 'react';
import Theme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'
import idx from 'idx';
import { Switch, Route, withRouter } from 'react-router-dom';

import LoadingOverlay from 'components/LoadingOverlay';
import Nav from 'components/Nav';
import Preview from 'components/Preview';
import List from 'components/List';
import Project from 'components/Project';

export default withRouter(p => {
  const data = useStoreState(state => state.data);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <Box
        sx={{
          mx: 'auto',
          height: ['100vh'],
          width: ['100vw'],
          display: 'grid',
          color: 'text',
          backgroundColor: 'background',
          alignItems: 'center',
          justifyContent: 'center',
          transition: t => t.transitions[2],
        }}
      >
        <Preview inProp={true} timeout={0}/>
        <Nav/>
        {data && (
          <Switch>
              <Route
                exact path="/project/:projectId"
                render={() => (
                  <Project/>
                )}
              />
              <Route
                exact path="/"
                render={() => (
                  <List
                    data={data}
                  />
                )}
              />
          </Switch>
        )}
      </Box>
    </ThemeProvider>
  )
})