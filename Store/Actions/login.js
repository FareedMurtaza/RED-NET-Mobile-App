import { BackendLink } from "../../apis/BackendLink";

export const Login = ({ PhoneNumber, Password, Role }) => async (dispatch) => {
  const response = await BackendLink.post(
    "/mobileLogin.action",
    `PhoneNumber=${PhoneNumber}&Password=${Password}&Role=${Role}`
  );
  if (response.data.JSessionId !== null) {
    dispatch({ type: "LOGIN", payload: { type: true, data: response.data } });
  } else {
    dispatch({ type: "LOGIN", payload: { type: false, data: null } });
  }
};
export const getData = () => (dispatch) => {
  dispatch({ type: "GET_DATA", payload: null });
};
