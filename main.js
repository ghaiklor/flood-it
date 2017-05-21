import Expo from 'expo';
import React from 'react';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import App from './src/App';

const store = createStore(reducer, undefined, compose(applyMiddleware(thunk), autoRehydrate()));
persistStore(store, {storage: AsyncStorage});

class FloodIt extends React.Component {
  componentWillMount() {
    return this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const localImages = [
      require('./assets/icons/app.png'),
      require('./assets/icons/new-game.png')
    ].map(image => Expo.Asset.fromModule(image).downloadAsync());

    await Promise.all([...localImages]);

    this.setState({appIsReady: true});
  }

  state = {
    appIsReady: false
  };

  render() {
    if (!this.state.appIsReady) return <Expo.AppLoading/>;

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(FloodIt);
