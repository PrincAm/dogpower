import { createContext } from 'react';

export const theme = {
  background: '#eeeeee',
  backgroundSecondary: '#222222',
  color: '#222222',
  colorSecondary: '#eeeeee',
  heightHeader: '8rem',
  marginHeader: '14rem',
  width: '100rem',
};

const ThemeContext = createContext(theme);

export default ThemeContext;
