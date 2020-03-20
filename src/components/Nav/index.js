/** @jsx jsx */
import { jsx, Button, Box, useColorMode } from "theme-ui";
import { Link, Switch, Route } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

import { useToggle } from "components/Toggle/useToggle";
import Label from "components/Label";
import Icon from "components/Icon";

const BackButton = p => {
  return (
    <Link
     to="/"
     sx={{
       fontSize: ['1'],
       verticalAlign: 'super',
       color: 'text',
       textDecoration: 'none',
       '&:hover': {
         opacity: '.5',
         transition: t => t.transitions[0]
       }
     }}
     >
     CLOSE
    </Link>
  );
};

const AboutButton = p => {
  return (
    <Link
     to="/about"
     sx={{
       fontSize: ['1'],
       verticalAlign: 'super',
       color: 'text',
       textDecoration: 'none',
       '&:hover': {
         opacity: '.5',
         transition: t => t.transitions[0]
       }
     }}
     >
     ABOUT
    </Link>
  );
};

export default p => {
  const { on, toggle } = useToggle();
  const activeImage = useStoreState(s => s.activeImage);
  const [colorMode, setColorMode] = useColorMode();

  const toggled = colorMode === 'default' ? false : true;

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
      sx={{
        alignSelf: "start",
        width: '100vw',
        display: "flex",
        zIndex: '1',
        justifyContent: "space-between",
        px: [2, 3, 4, 4],
        py: [1, 2, 2, 3]
      }}
    >
      <Box
        sx={{
          width: "300px",
          display: 'flex',
          textAlign: "left",
        }}
      >
      <Link
        to="/"
        sx={{
          color: 'text',
          textDecoration: 'none',
          '&:hover': {
            opacity: '.5',
            transition: t => t.transitions[0]
          }
        }}
      >
        <span sx={{
          display: ['none', 'block', 'block'],
          textTransform: 'uppercase',
          letterSpacing: '1px',
          alignSelf: "start",
          fontSize: '1',
        }}>
          FABIAN DINKLAGE
        </span>
        <span sx={{
          display: ['block', 'none'],
          textTransform: 'uppercase',
          alignSelf: "start",
          letterSpacing: '1px',
          fontSize: '1',
        }}>F.D.</span>
      </Link>
        <Button
          variant="primary"
          onClick={toggle}
          sx={{
            border: "none",
            ml: 3,
            alignSelf: "start",
            background: "none",
            padding: '0',
            "&:hover": { background: "none", opacity: ".5" }
          }}
        >
          <Icon mode={toggled} />
        </Button>
      </Box>

      <Route exact path="/project/:projectId" render={() => {
        return (
          <Box
            sx={{
                px: [1, 3, 3, 3],
                textAlign: "center",
                alignSelf: "start",
                display: "flex",
                flexDirection: ['column', 'row'],
                width: "300px",
                justifyContent: "space-between"
            }}
          >
            <Label>{`${focalLength}MM`}</Label>
            <Label>{`f/${aperture}`}</Label>
            <Label>{`${exposureFraction}s`}</Label>
            <Label>{`ISO${iso}`}</Label>
          </Box>
        )
      }} />

      <Box
        sx={{
          width: "300px",
          textAlign: "end",
          alignSelf: "start",
        }}
      >
        <Switch>
          <Route path="/project" render={BackButton} />
          <Route path="/about" render={BackButton} />
          <Route exact path="/" render={AboutButton} />
        </Switch>
      </Box>
    </Box>
  );
};
