/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from 'utils';

export default p => {
  const { timeout, bgImg, inProp } = p;
  return (
    <Transition
      in={inProp}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => {
        console.log(state, 'state');
        return (
          <Box
            sx={{
              mx: 'auto',
              height: ['100vh'],
              width: ['100%'],
              zIndex: '1',
              position: 'absolute',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              background: `url(${bgImg}) no-repeat center center fixed`,
              color: 'text',
              transition: t => t.transitions[2],
              opacity: opacityFromState(state)
            }}
          >
          </Box>
        )
      }}
      </Transition>
  )
}