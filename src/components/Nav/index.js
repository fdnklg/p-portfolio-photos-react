/** @jsx jsx */
import { jsx, Button } from 'theme-ui';

import { useToggle } from 'components/Toggle/useToggle';

export default p => {
  const {on, toggle} = useToggle()
  return (
    <nav>
      <Button 
        variant='primary'
        onClick={toggle}
      >
        {on ? 'Bright': 'Dark'}
      </Button>
    </nav>
  )
}