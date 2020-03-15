import React, { Component, useState } from 'react';
import { useColorMode, useThemeUI } from 'theme-ui';

// returns a function which calls all the given functions
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

export function useToggle(initialOn = false) {
  const [on, setOn] = useState(initialOn)
  const [colorMode, setColorMode] = useColorMode()
  const toggle = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
    setOn(!on)
  }
  return {on, toggle}
}

export function useToggleWithPropGetter(initialOn) {
  const {on, toggle} = useToggle(initialOn)
  const getTogglerProps = (props = {}) => ({
    'aria-expanded': on,
    tabIndex: 0,
    ...props,
    onClick: callAll(props.onClick, toggle),
  })
  return {on, toggle, getTogglerProps}
}

export default {
  useToggle,
  useToggleWithPropGetter
}