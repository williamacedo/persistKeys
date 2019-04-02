import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen'
import { PersistGate } from 'redux-persist/integration/react'
import _ from 'lodash';
import Routes from './Routes';
import { store, persistor } from './Store';
export default class App extends Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}
