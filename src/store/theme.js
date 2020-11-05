import { createContext } from 'react';

export const theme = {
  background: '#eeeeee',
  backgroundSecondary: '#222222',
  color: '#222222',
  colorSecondary: '#eeeeee',
};

const ThemeContext = createContext(theme);

export default ThemeContext;
