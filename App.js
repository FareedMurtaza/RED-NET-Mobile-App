import React from 'react';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import MainNavigator from './Navigation/navigator';
import rootReducer from "./Store/Reducers";
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://58a4d42baf78497db94d4740ea7c054e@o418840.ingest.sentry.io/5324542',
  enableInExpoDevelopment: true,
  debug: true,
});
Sentry.enableInExpoDevelopment = true;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store} >
        <MainNavigator />
    </Provider>
  );
}
