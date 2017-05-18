import React from 'react';
import {StyleSheet, View} from 'react-native';
import Grid from './components/Grid';
import MovesCounter from './components/MovesCounter';
import NewGameButton from './components/NewGameButton';
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
    backgroundColor: '#EEE4DA',
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  game: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  palette: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default App;
