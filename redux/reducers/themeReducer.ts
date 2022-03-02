const themeReducer = (state = false, action: any): boolean => {
  switch (action.type) {
    case 'SET_DARK_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
