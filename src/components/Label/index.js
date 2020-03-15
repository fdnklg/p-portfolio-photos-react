/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';

export default p => {
  const {children} = p;
  return (
    <span
      sx={{
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '1',

      }}
    >
      {children}
    </span>
  )
}





// import React from 'react';
// import styled from 'styled-components';

// const StyledLabel = styled.p`
//  text-transform: uppercase;
//  letter-spacing: ${p => p.theme.letterSpacing[4]};
//  font-size: ${p => p.theme.fontSizes[2]}

//   @media (max-width: ${p => p.theme.sizes.tablet}) {
//     margin: 0 !important;
//   }
// `;

// const Label = (props) => {
//   const { title } = props;
//   return <StyledLabel>{title}</StyledLabel>
// }

// export default Label;