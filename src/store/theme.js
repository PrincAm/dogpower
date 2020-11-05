import { createContext } from 'react';

export const theme = {
  foreground: '#000000',
  background: '#eeeeee',
  color: '#222222',
  colorSecondary: '#eeeeee',
};

const ThemeContext = createContext(theme);

export default ThemeContext;
