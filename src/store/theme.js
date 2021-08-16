import { createContext } from 'react';

export const theme = {
  background: '#fff',
  backgroundSecondary: '#e4e4e4',
  color: '#222222', // TODO #1d1d2c
  colorSecondary: '#eeeeee',
  linkColor: '#FF4634',
  heightHeader: '8rem',
  marginHeader: '14rem',
  width: '100rem',
};

const ThemeContext = createContext(theme);

export default ThemeContext;
