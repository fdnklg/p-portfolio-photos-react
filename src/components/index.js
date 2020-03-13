import React, { useEffect } from 'react';
import { useStoreActions } from "easy-peasy";
import { ThemeProvider } from 'theme-ui';
import Theme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'

const AppWrapper = () => {
  const loadData = useStoreActions((action) => action.loadData);
  useEffect(() => {
    loadData();
    console.log('loading data')
  });
  return (
    <>
      <ThemeProvider theme={Theme}></ThemeProvider>
      <GlobalStyles/>
    </>
  )
}

export default AppWrapper;