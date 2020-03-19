/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { Link, Switch, Route } from 'react-router-dom';

import { useToggle } from 'components/Toggle/useToggle';
import Icon from 'components/Icon';

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
        zIndex: '1',
        position: 'absolute'
      }}
    >
      <Switch>
        <Route path="/project" render={BackButton}/>
      </Switch>
      <Button
        variant='primary'
        onClick={toggle}
        sx={{ border: 'none', '&:hover': { background: 'none', opacity: '.5' } }}
      >
        <Icon mode={on} />
      </Button>
    </nav>
  )
}