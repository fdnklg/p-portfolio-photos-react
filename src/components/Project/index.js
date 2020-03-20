/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

import Label from "components/Label";
import Carousel from "./Carousel";

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

  useEffect(() => {
    setActiveImage(activeImage);
    setSelectedProject(selectedProject);
    setCurrentSlideState(currentSlide);
  })

  return (
    <Box
      sx={{ 
        px: [ '2', '6', '7', '8'],
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
