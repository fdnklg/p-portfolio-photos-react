/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const ListItem = ({ children, activeId, path }) => {
  const setHoveredProject = useStoreActions(action => action.setHoveredProject);
  const setBg = useStoreActions(action => action.setBg);

  const handleClick = () => {
    setBg(false);
  };

  return (
    <li
      sx={{
        cursor: "pointer"
      }}
      onMouseEnter={() => {
        setHoveredProject(activeId);
      }}
      onMouseLeave={() => {
        setHoveredProject(false);
      }}
    >
      <Link onClick={handleClick} to={`project/${path}`}>
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
