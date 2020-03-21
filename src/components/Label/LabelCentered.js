/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';

export default p => {
  const {children} = p;
  return (
    <span
      sx={{
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'flex',
        fontSize: '1',
        margin: '0 auto'
      }}
    >
      {children}
    </span>
  )
}