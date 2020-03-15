/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';
import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

export default ({match}) => {
  const data = useStoreState(state => state.data);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box
      sx={{
        mx: 'auto',
        height: ['100vh'],
        width: ['100vw'],
        display: 'grid',
        zIndex: '1',
        background: 'background'
      }}
    >
      {JSON.stringify(data)}
    </Box>
  )
}