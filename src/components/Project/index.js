/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

import Label from "components/Label";
import Carousel from "./Carousel";

import useWindowDimensions from 'components/UseWindowDimensions';

export default withRouter(p => {
  const { data } = p;
  const { projects } = data;
  const projectId = p.match.params.projectId;
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedProject = projects.find(project => project.path === projectId);
  const activeImage = selectedProject.media[currentSlide];
  const setActiveImage = useStoreActions(a => a.setActiveImage);
  const setSelectedProject = useStoreActions(a => a.setSelectedProject);
  const setCurrentSlideState = useStoreActions(a => a.setCurrentSlideState);
  const { height, width } = useWindowDimensions();
  const format = (width / height) * .9;

  console.log(format)

  useEffect(() => {
    setActiveImage(activeImage);
    setSelectedProject(selectedProject);
    setCurrentSlideState(currentSlide);
  })

  return (
    <Box
      sx={{ 
        px: [ format > 1.1 ? '7' : '2', format > 1.25 ? '7' : '6', format > 1.25 ? '8' : '7', width > 1000 && format > 1.6 ? '9' : '8'],
        mx: '0 auto',
      }}
    >
        <Carousel
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          content={selectedProject}
        />
        </Box>

  );
});
