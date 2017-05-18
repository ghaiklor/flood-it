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

        <View style={styles.game}>
          <Grid/>
        </View>

        <View style={styles.palette}>
          <Palette/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  game: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  palette: {
    position: 'absolute',
    left: 0,
    bottom: 0
  }
});

export default App;
