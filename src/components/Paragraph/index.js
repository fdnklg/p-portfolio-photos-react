/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { Component, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Transition from "react-transition-group/Transition";
import { opacityFromState } from "utils";

export default p => {
  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <Flex
          sx={{
            textAlign: ["left"],
            pb: ["4", "5", "5", "6"],
            px: ["2", "6", "7", "9"],
            fontSize: ["4", "5"],
            mx: "0 auto",
            width: ["100vw"],
            fontFamily: "Mier A Regular",
            transition: t => t.transitions[3],
            opacity: opacityFromState(state)
          }}
        >
          <p>
            My name is Fabian Dinklage, and I'm an Interaction Designer with a
            passion for Data Visualization located in Berlin. Photography has
            been with me for many years, and this site is a visual diary of
            experiences and moments I'd like to share with you. If you're
            interested in my other work visit{" "}
            <a sx={{
              color: 'text',
              textDecoration: 'none',
              transition: t => t.transitions[0],
              borderBottom: '1px solid white',
              borderColor: 'text',
              '&:hover': { opacity: '.5' }
            }}target="_blank" href="https://fabiandinklage.com">
              fabiandinklage.com
            </a>
            .
          </p>
        </Flex>
      )}
    </Transition>
  );
};
