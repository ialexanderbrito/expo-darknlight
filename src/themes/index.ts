import { DefaultTheme } from 'styled-components';
import darkTheme from './dark';
import lightTheme from './light';

export default function (isDark = false): DefaultTheme {
  if (isDark) {
    return darkTheme;
  }

  return lightTheme;
}
