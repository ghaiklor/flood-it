import Expo from 'expo';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';
import App from './src/App';
import COLORS from './src/constants/colors';

const SIZE = 14;
const initialField = Array.from({length: SIZE * SIZE}).map(() => COLORS[Math.floor(Math.random() * COLORS.length)]);
const initialState = {
  colors: COLORS,
  currentColor: initialField[0],
  field: initialField
};

const store = createStore(reducer, initialState);

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
