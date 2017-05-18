import React from 'react';
import {StyleSheet, View} from 'react-native';
import MovesCounter from './components/MovesCounter';
import NewGameButton from './components/NewGameButton';
import Grid from './components/Grid';
import Palette from './components/Palette';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MovesCounter/>
          <NewGameButton/>
        </View>

        <Grid/>
        <Palette/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {},
  game: {},
  palette: {}
});

export default App;
