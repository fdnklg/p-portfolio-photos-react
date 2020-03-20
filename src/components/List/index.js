/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TableItem from './TableItem';

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
    <Flex
      sx={{ 
        textAlign: ['left', 'center', 'center'],
        pb: ['4', '5', '5', '6'],
        px: [ '2', '3', '7', '8'],
        mx: '0 auto',
        width: ['100vw'],
        fontSize: ['3', '4', '4', '2']
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
                <td align="right">{year}</td>
              </TableItem>
            )
          })}
        </tbody>
      </table>
    </Flex>
  )
}