/** @jsx jsx */
import { jsx, Box, ThemeProvider, useColorMode } from 'theme-ui';
import { useStoreState } from 'easy-peasy';
import Theme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'

import LoadingOverlay from 'components/LoadingOverlay';
import Nav from 'components/Nav';

export default p => {
  const data = useStoreState(state => state.data);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <Box
        sx={{
          mx: 'auto',
          height: ['100vh'],
          width: ['100vw'],
          display: 'flex',
          color: 'text',
          backgroundColor: 'background',
          alignItems: 'center',
          justifyContent: 'center',
          transition: t => t.transitions[0],
        }}
      >
        <Nav/>
        {!data && (
          <LoadingOverlay timeout={250}></LoadingOverlay>
        )}
      </Box>
    </ThemeProvider>
  )
}