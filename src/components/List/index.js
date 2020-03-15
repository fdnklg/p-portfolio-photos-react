/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from './ListItem';

export default p => {
  const { data, setHoveredProject } = p;
  const { projects } = data;

  return (
    <ul
      sx={{
        zIndex: '1'
      }}
    >
      {projects.map(({ title, id, path }) => (
        <ListItem
          key={`listItem-key-${id}`}
          activeId={id}
          path={path}
          setHoveredProject={setHoveredProject}
        >
          {title}
        </ListItem>
      ))}
    </ul>
  )
}