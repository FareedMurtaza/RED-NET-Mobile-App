import { LOGIN } from '../Actions/user';
import { USER } from '../../data/dummydata';

const initialState = {
  user: USER.find(usr => usr.phoneNo === '03201234567'? usr : 0)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      {
        let userPhoneno = action.phoneno;
        let userPassowrd = action.password;

        let phone, pass;
        userCredentials = USER.find(usr => usr.phoneNo === '03201234567')

        let validPhone, validPassword;
        if (userPhoneno != phone) {
          validPhone = false;
        }
        else if (userPassowrd != pass) {
          validPassword = false;
        }
        return {
          ...state,
          phoneFound: validPhone,
          passwordFound: validPassword
        }
      }

    default:
      break;
  }

  return state;
};
