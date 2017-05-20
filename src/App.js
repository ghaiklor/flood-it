import React from 'react';
import {StyleSheet, View} from 'react-native';
import Grid from './components/Grid';
import Stats from './components/Stats';
import NewGameButton from './components/NewGame';
import Palette from './components/Palette';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Stats/>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  game: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  palette: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default App;
