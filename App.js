import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Botomtab from './Navigation/navigator';
import profileReducer from './Store/Reducers/profile';
import FriendReducer from './Store/Reducers/friends';
import NotificationReducer from './Store/Reducers/notification';

const rootReducer = combineReducers({
  profile: profileReducer, 
  friends: FriendReducer, 
  notification: NotificationReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store} >
      <Botomtab />
    </Provider>
  );
}
