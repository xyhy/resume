import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface ThemeContextValue {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>('light');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    });

    return () => {
      darkMediaQuery.removeEventListener('change', () => {});
    };
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
