import Expo from 'expo';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import COLORS from './src/constants/colors';

import Grid from './src/components/Grid';
import Palette from './src/components/Palette';
import Tile from './src/components/Tile';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Palette colors={COLORS}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

Expo.registerRootComponent(App);
