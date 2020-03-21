/** @jsx jsx */
import { jsx, Box, ThemeProvider, Flex } from "theme-ui";
import { useStoreState, useStoreActions } from "easy-peasy";
import React, { useState, useEffect } from "react";
import Theme from "styles/Theme";
import GlobalStyles from "styles/GlobalStyles";
import idx from "idx";
import { Switch, Route, withRouter } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";

import LoadingOverlay from "components/LoadingOverlay";
import Nav from "components/Nav";
import Label from "components/Label";

import Paragraph from "components/Paragraph";
import List from "components/List";
import Project from "components/Project";

export default withRouter(p => {
  const data = useStoreState(state => state.data);
  const selectedProject = useStoreState(state => state.selectedProject);
  const currentSlide = useStoreState(state => state.currentSlideState);
  const activeImage = useStoreState(state => state.activeImage);
  const projectTitle = selectedProject ? selectedProject.title : "";
  const projectYear = selectedProject ? selectedProject.year : "";
  const imagesTotal = selectedProject ? selectedProject.media.length : 0;
  const imageCount = `${parseInt(currentSlide) + 1} / ${imagesTotal}`;

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
          transition: t => t.transitions[0],
          padding: "0"
        }}
      >
        <Nav />
        {data && (
          <Switch>
            <Route
              exact
              path="/project/:projectId"
              render={() => <Project data={data} />}
            />
            <Route exact path="/" render={() => <List data={data} />} />
            <Route exact path="/about" render={() => <Paragraph />} />
          </Switch>
        )}
        <Box
          sx={{
            alignSelf: "end",
            display: "flex",
            zIndex: "2",
            justifyContent: "space-between",
            px: [2, 3, 4, 4],
            py: [2, 2, 2, 3]
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: ['60px'],
              display: 'flex',
              alignItems: 'flex-end',
              textAlign: "start",
              alignSelf: "start",
              lineHeight: '100%',
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
                path="/about"
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
              height: ['60px'],
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              textAlign: "center",
              alignSelf: "start",
              lineHeight: '100%',
            }}
          >
            <Switch>
              <Route
                exact
                path="/project/:projectId"
                render={() => <Label><TextTransition
                        noOverflow={true}
                        springConfig={presets.stiff}
                        text={activeImage.title}
                      /></Label>}
              />
            </Switch>
          </Box>

          <Box
            sx={{
              width: "300px",
              height: ['60px'],
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              textAlign: "center",
              alignSelf: "start",
              lineHeight: '100%',
            }}
          >
            <Switch>
              <Route
                exact
                path="/project/:projectId"
                render={() => {
                  return (
                    <Label>
                      <TextTransition
                        noOverflow={true}
                        springConfig={presets.stiff}
                        text={`${parseInt(currentSlide) + 1}`}
                      />
                      { }
                      <TextTransition
                        noOverflow={true}
                        springConfig={presets.stiff}
                        text={` /${imagesTotal}`}
                      />
                    </Label>
                  )
                }}
              />
              <Route exact path="/" render={() => <Label>© 2020</Label>} />
              <Route exact path="/about" render={() => <Label>© 2020</Label>} />
            </Switch>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
});
