import { ThemeActionReturn } from '../types/themeTypes';

export const setDarkTheme = (isDark: boolean): ThemeActionReturn => {
  return {
    type: 'SET_DARK_THEME',
    payload: isDark,
  };
};
