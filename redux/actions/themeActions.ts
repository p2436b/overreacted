interface IThemeActionReturn {
  type: 'SET_DARK_THEME';
  payload: boolean;
}
export const setDarkTheme = (isDark: boolean): IThemeActionReturn => {
  return {
    type: 'SET_DARK_THEME',
    payload: isDark,
  };
};
