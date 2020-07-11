export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state);
      if (action.payload.type === true)
        return {
          ...state,
          isLogin: action.payload.type,
          JSessionID: action.payload.JSessionID,
          data: action.payload.data,
          isCancelClicked: true,
        };
      else
        return {
          ...state,
          isLogin: action.payload.type,
          data: action.payload.data,
          error: state.error === undefined ? 0 : state.error + 1,
        };
    default:
      return state;
  }
};
