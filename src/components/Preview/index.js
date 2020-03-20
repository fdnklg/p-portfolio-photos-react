/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from 'utils';
import { useStoreState } from 'easy-peasy';

export default p => {
  const { timeout, bgImg, inProp } = p;
  const bg = useStoreState(state => state.bg);
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
              background: `url(${bg}) no-repeat center center fixed`,
              color: 'text',
            }}
          >
          </Box>
        )

}