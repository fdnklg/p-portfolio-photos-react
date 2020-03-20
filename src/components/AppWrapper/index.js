/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode, Flex } from "theme-ui";
import { useStoreState, useStoreActions } from "easy-peasy";
import React, { useState, useEffect } from "react";
import Theme from "styles/Theme";
import GlobalStyles from "styles/GlobalStyles";
import idx from "idx";
import { Switch, Route, withRouter } from "react-router-dom";

import LoadingOverlay from "components/LoadingOverlay";
import Nav from "components/Nav";
import Label from "components/Label";
import Preview from "components/Preview";
import List from "components/List";
import Project from "components/Project";

export default withRouter(p => {
  const data = useStoreState(state => state.data);
  const selectedProject = useStoreState(state => state.selectedProject);
  const currentSlide = useStoreState(state => state.currentSlideState);
  const activeImage = useStoreState(state => state.activeImage);
  const projectTitle = selectedProject ? selectedProject.title : "";
  const imagesTotal = selectedProject ? selectedProject.media.length : 0;
  const imageCount = `${parseInt(currentSlide) + 1} OF ${imagesTotal}`;

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Box
        sx={{
          mx: "auto",
          height: ["100vh"],
          width: ["100vw"],
          display: "grid",
          color: "text",
          backgroundColor: "background",
          alignItems: "center",
          justifyContent: "center",
          padding: "0"
        }}
      >
        <Preview inProp={true} timeout={0} />
        <Nav />
        {data && (
          <Switch>
            <Route
              exact
              path="/project/:projectId"
              render={() => <Project data={data} />}
            />
            <Route exact path="/" render={() => <List data={data} />} />
          </Switch>
        )}
        <Box
          sx={{
            alignSelf: "end",
            display: "flex",
            zIndex: "2",
            justifyContent: "space-between",
            px: [3, 3, 4, 4],
            py: [1, 2, 2, 3]
          }}
        >
          <Box
            sx={{
              width: "300px",
              textAlign: "left",
              alignSelf: "center"
            }}
          >
            <Switch>
              <Route
                exact
                path="/project/:projectId"
                render={() => <Label>{projectTitle}</Label>}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <a
                    sx={{
                      textDecoration: "none",
                      color: "text",
                      transition: t => t.transitions[1],
                      "&:hover": { opacity: ".5" }
                    }}
                    href="https://fabiandinklage.com/legal"
                    target="_blank"
                  >
                    <Label>Legal notes</Label>
                  </a>
                )}
              />
            </Switch>
          </Box>

          <Box
            sx={{
              width: "300px",
              textAlign: "center",
              alignSelf: "start"
            }}
          >
            <Switch>
              <Route
                exact
                path="/project/:projectId"
                render={() => <Label>{activeImage.title}</Label>}
              />
            </Switch>
          </Box>

          <Box
            sx={{
              width: "300px",
              textAlign: "end",
              alignSelf: "start"
            }}
          >
            <Switch>
              <Route
                exact
                path="/project/:projectId"
                render={() => <Label>{imageCount}</Label>}
              />
              <Route exact path="/" render={() => <Label>© 2020</Label>} />
            </Switch>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
});
