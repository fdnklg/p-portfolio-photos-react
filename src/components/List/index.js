/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import TableItem from './TableItem';
import { opacityFromState } from 'utils';

const isNewYear = (data, i) => {
  const l = data.length;
  const previous = data[i === 0 ? l - 1 : i - 1];
  const current = data[i];
  const next = data[i === l - 1 ? 0 : i + 1];
  return previous.year !== current.year;
};

export default p => {
  const { data } = p;
  const { projects } = data;

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
            textAlign: ['left', 'center', 'center'],
            pb: ['4', '5', '5', '6'],
            px: [ '2', '6', '7', '9'],
            mx: '0 auto',
            width: ['100vw'],
            transition: t => t.transitions[1],
            opacity: opacityFromState(state)
          }}
        >
          <table
            sx={{
              zIndex: '1',
              width: '100%',
              borderCollapse: 'collapse'
            }}
          >
            <tbody>
              {projects.map(({ title, id, path, year }, i) => {
                const newYear = isNewYear(projects, i);
                return (
                  <TableItem
                    key={`tableItem-key-${id}`}
                    activeId={id}
                    path={path}
                    isNewYear={newYear}
                  >
                    <td align="left">{title}</td>
                    <td sx={{fontFamily: 'Mier A Regular', py: '5px'}} align="right">{year}</td>
                  </TableItem>
                )
              })}
            </tbody>
          </table>
        </Flex>
      )
    }
    </Transition>
  )
}