import React from 'react'
import { useEffect } from 'react';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { useDispatch, useSelector } from 'react-redux';


const Toggle = () => {

  const { theme, mount }: any = useSelector((state: any) => state.darkMode)
  const dispatch = useDispatch();
  const isLight = theme === 'light';

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      dispatch({ type: "SETSTYLE", theme: 'dark' }) :
      localTheme ?
        dispatch({ type: "SETSTYLE", theme: localTheme }) :
        dispatch({ type: "SETSTYLE", theme: 'light' })

    dispatch({ type: "SETMOUNT", mount: true })
  }, [dispatch]);


  if (!mount) {
    return <div />
  };

  return (
    <React.Fragment>
      {/* 
            <ToggleContainer lightTheme={isLight} onClick={() => { dispatch({ type: "CHANGESTYLE" }) }} >
        <SunIcon />
        <MoonIcon />
      </ToggleContainer>
      */ }
      <div className="container relative flex ">
        <button onClick={() => { dispatch({ type: "CHANGESTYLE" }) }} className="absolute  top-0  right-0 text-copy-primary hover:text-gray-600 m-10 " >
          {
            !isLight
              ? <SunIcon />
              : <MoonIcon />
          }
        </button>
      </div>

    </React.Fragment>

  );
};

export default Toggle;
