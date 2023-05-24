const initialState = false;

const DarkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeMode":
      return action.payload;
    default:
      return state;
  }
};

export default DarkModeReducer;
