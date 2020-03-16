/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from "theme-ui";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import Label from "components/Label";
import Carousel from "./Carousel";

export default withRouter(p => {
  const { data } = p;
  const { projects } = data;
  const projectId = p.match.params.projectId;
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedProject = projects.find(project => project.path === projectId);
  const activeImage = selectedProject.media[currentSlide];
  const projectTitle = selectedProject.title;
  const imageCount = `${parseInt(currentSlide) + 1} OF ${
    selectedProject.media.length
  }`;

  const {
    iso,
    aperture,
    focalLength,
    exposure,
    exposureFraction,
    title
  } = activeImage;

  return (
    <Box
      id="ref"
      sx={{
        mx: "auto",
        height: ["100vh"],
        width: ["100vw"],
        display: "grid"
      }}
    >
      <Box
        sx={{
          width: ["100vw"],
          display: "flex",
          justifyContent: "center",
          px: [1, 2, 2, 4],
          py: [1, 2, 2, 3]
        }}
      >
        <Box
          sx={{
            px: [1, 3, 3, 3],
            textAlign: "center",
            alignSelf: "start",
            display: "flex",
            width: "300px",
            justifyContent: "space-between"
          }}
        >
          <Label>{`ISO${iso}`}</Label>
          <Label>{`${exposureFraction}s`}</Label>
          <Label>{`f/${aperture}`}</Label>
          <Label>{`${focalLength}MM`}</Label>
        </Box>
      </Box>

      <Box
        sx={{
          px: [2, 2, 7, 8]
        }}
      >
        <Carousel
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          content={selectedProject}
        />
      </Box>
      <Box
        sx={{
          alignSelf: "end",
          display: "flex",
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
          <Label>{projectTitle}</Label>
        </Box>

        <Box
          sx={{
            width: "300px",
            textAlign: "center",
            alignSelf: "start"
          }}
        >
          <Label>{title}</Label>
        </Box>

        <Box
          sx={{
            width: "300px",
            textAlign: "end",
            alignSelf: "start"
          }}
        >
          <Label>{imageCount}</Label>
        </Box>
      </Box>
    </Box>
  );
});
