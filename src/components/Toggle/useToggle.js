import React, { Component, useState } from 'react';
import { useColorMode, useThemeUI } from 'theme-ui';

export function useToggle() {
  const [on, setOn] = useState(true)
  const [colorMode, setColorMode] = useColorMode()
  const toggle = () => {
    setColorMode(!on ? 'default' : 'dark')
    setOn(!on)
  }
  return {on, toggle}
}

export default {
  useToggle,
}