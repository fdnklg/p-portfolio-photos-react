/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from 'utils';

export default p => {
  const { timeout } = p;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => {
        return (
          <Box
            sx={{
              mx: 'auto',
              height: ['100vh'],
              width: ['100vw'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background',
              color: 'text',
              transition: t => t.transitions[1],
              opacity: opacityFromState(state)
            }}
          >
            Lade Daten ...
          </Box>
        )
      }}
      </Transition>
  )
}