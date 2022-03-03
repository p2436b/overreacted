import { ThemeActionReturn } from '../types/themeTypes';

const themeReducer = (state = false, action: ThemeActionReturn): boolean => {
  switch (action.type) {
    case 'SET_DARK_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
