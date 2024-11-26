import { createContext, useContext,useEffect,useState } from "react";

const ThemeContext = createContext();

import React from 'react'

export const useTheme = ()=> useContext(ThemeContext)

export const ThemeProvider = ({children})=> {
  const [theme, settheme] = useState(()=> localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme)
  }, [theme])

  const toggleTheme = ()=>{
    settheme((prev)=> (prev === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
     {children}
    </ThemeContext.Provider>
  )
}

