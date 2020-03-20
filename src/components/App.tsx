import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { Stats } from './Stats'
import { useSelector, useDispatch } from 'react-redux';
import { fetchStats } from '../store/actions/fetch';
import { CountySelector } from './CountrySelector';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './DarkModeComponent/styles/themes/styles';
import { GlobalStyles } from '../styles/global';
import Toggle from './DarkModeComponent/Toggle';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

function App() {
  const { theme } = useSelector((state: any) => state.darkMode)
  const { stats }: any = useSelector((state: any) => state.stats)

  const dispatch = useDispatch();

  useEffect(() => {
    fetchStats(dispatch, "FETCH_STATSGLOBAL", API_ENDPOINT)
  }, [dispatch])



  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle />

      <React.Fragment >
        <main className="container mx-auto px-8 lg:px-56">
          <Hero />
          <Stats stats={stats} title="global cases" />
          <CountySelector />
        </main>
      </React.Fragment>
    </ThemeProvider>

  );
}

export default App;
