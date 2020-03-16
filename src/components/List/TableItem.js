/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import history from "history.js";

const TableItem = ({ children, activeId, path, isNewYear }) => {
  const setHoveredProject = useStoreActions(action => action.setHoveredProject);
  const setBg = useStoreActions(action => action.setBg);

  const handleClick = path => {
    history.push(path);
    setBg(false);
  };

  return (
    <tr
      sx={{
        cursor: "pointer",
        fontSize: ["2", "3"],
        width: "100%",
        borderTop: isNewYear ? "1px solid #000" : "none",
        borderColor: "text"
      }}
      onMouseEnter={() => {
        setHoveredProject(activeId);
      }}
      onMouseLeave={() => {
        setHoveredProject(false);
      }}
      onClick={() => handleClick(`project/${path}`)}
    >
      {children}
    </tr>
  );
};

export default TableItem;
