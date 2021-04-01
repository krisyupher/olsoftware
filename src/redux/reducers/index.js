const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALIDATE": {
      return { ...state, token: action.payload };
    }
    case "SET_USER_ACTIVE": {
      return { ...state, userActive: action.payload };
    }
    case "DELETE_USER": {
      return { ...state, userActive: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
