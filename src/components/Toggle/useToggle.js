import React, { Component, useState } from 'react';
import { useColorMode, useThemeUI } from 'theme-ui';

export function useToggle(initialOn = false) {
  const [on, setOn] = useState(initialOn)
  const [colorMode, setColorMode] = useColorMode()
  const toggle = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
    setOn(!on)
  }
  return {on, toggle}
}

export default {
  useToggle,
}