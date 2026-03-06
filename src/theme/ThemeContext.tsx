import React, { createContext, ReactNode, useContext } from 'react';
import { Colors } from './colors';
import { useColorScheme } from 'react-native';

interface Theme {
  textColor: string;
  placeholderColor: string;
  backgroundColor: string;
}

const ThemeContext = createContext({
  textColor: Colors.black,
  placeholderColor: Colors.placeholder,
  backgroundColor: Colors.white,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const theme: Theme = {
    textColor: colorScheme === 'dark' ? Colors.white : Colors.black,
    placeholderColor:
      colorScheme === 'dark' ? Colors.placeholderDark : Colors.placeholder,
    backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
