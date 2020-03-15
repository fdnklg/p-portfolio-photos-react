/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({children, setHoveredProject, activeId, path}) => {

  return (
    <li
      sx={{
        cursor: 'pointer'
      }}
      onMouseEnter={() => {
        setHoveredProject(activeId);
      }}
      onMouseLeave={() => {
        setHoveredProject(false);
      }}
    >
      <Link to={`project/${path}`}>{children}</Link>
    </li>
  )
};

export default ListItem;