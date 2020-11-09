import { createContext } from 'react';

export const theme = {
  background: '#eeeeee',
  backgroundSecondary: '#222222',
  color: '#222222',
  colorSecondary: '#eeeeee',
  colorLight: '#f7f4e9',
  colorDark: '#1d1d2c',
  heightHeader: '8rem',
  marginHeader: '14rem',
  width: '100rem',
};

const ThemeContext = createContext(theme);

export default ThemeContext;
