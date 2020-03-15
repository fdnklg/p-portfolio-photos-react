/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';
import { useStoreState } from 'easy-peasy';
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

export default p => {
  const [hoveredProject, setHoveredProject] = useState(false);
  const data = useStoreState(state => state.data);
  const bgImg = idx(data, _ => _.projects[hoveredProject].media[0].path);
  const inProp = typeof bgImg === 'string' ? true : false;

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
        <Preview inProp={inProp} timeout={0} bgImg={bgImg}/>
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
                    setHoveredProject={setHoveredProject}
                    data={data}
                  />
                )}
              />
          </Switch>
        )}
      </Box>
    </ThemeProvider>
  )
}