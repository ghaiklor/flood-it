import Expo from 'expo';
import React from 'react';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from './src/reducers';
import App from './src/App';

const store = createStore(reducer, undefined, compose(applyMiddleware(), autoRehydrate()));
persistStore(store, {storage: AsyncStorage});

class FloodIt extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(FloodIt);
