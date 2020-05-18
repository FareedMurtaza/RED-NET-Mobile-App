import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Botomtab from './Navigation/navigator';
import profileReducer from './Store/Reducers/profile';
import FriendReducer from './Store/Reducers/friends';
import NotificationReducer from './Store/Reducers/notification';
import DonorReducer from './Store/Reducers/donor';
import LoginScreen from './Screens/loginScreen';
import SignupScreen from './Screens/signupScreen';

const rootReducer = combineReducers({
  profile: profileReducer, 
  friends: FriendReducer, 
  notification: NotificationReducer, 
  donorsList: DonorReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    // <SignupScreen />
     <LoginScreen />
    // <Provider store={store} >
    //   <Botomtab />
    // </Provider>
  );
}
