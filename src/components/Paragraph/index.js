/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from 'utils';

export default p => {

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      { state => (
        <Flex
          sx={{ 
            textAlign: ['left'],
            pb: ['4', '5', '5', '6'],
            px: [ '2', '6', '7', '9'],
            fontSize: ["4", "5"],
            mx: '0 auto',
            width: ['100vw'],
            fontFamily: 'Mier A Regular',
            transition: t => t.transitions[3],
            opacity: opacityFromState(state)
          }}
        >
          <p>
            My name is Fabian Dinklage and I'm a Data Visualization Designer located in Berlin. Photography helps me to slow down and contemplate in the present moment. If you're interested other projects I'm involved check out my portfolio or leave me a message.
          </p>
         </Flex>
       )
    }
    </Transition>
  )
}