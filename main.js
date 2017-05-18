import Expo from 'expo';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';
import App from './src/App';

const store = createStore(reducer);

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
