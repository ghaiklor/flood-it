import React from 'react';
import {StyleSheet, View} from 'react-native';
import MovesCounter from './components/MovesCounter';
import Grid from './components/Grid';
import Palette from './components/Palette';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid/>
        <MovesCounter/>
        <Palette/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

export default App;
