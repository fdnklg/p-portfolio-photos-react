/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { Link, Switch, Route } from 'react-router-dom';

import { useToggle } from 'components/Toggle/useToggle';

const BackButton = p => {
  return (
    <Link to="/">
      <Button variant="primary">Back</Button>
    </Link>
  )
}

export default p => {
  const {on, toggle} = useToggle()
  return (
    <nav
      sx={{
        zIndex: '1'
      }}
    >
      <Switch>
        <Route path="/project" render={BackButton}/>
      </Switch>
      <Button
        variant='primary'
        onClick={toggle}
      >
        {on ? 'Bright': 'Dark'}
      </Button>
    </nav>
  )
}