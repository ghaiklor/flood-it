import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import Grid from './components/Grid';
import NewGameButton from './components/NewGame';
import Palette from './components/Palette';
import Stats from './components/Stats';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#EEE4DA'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10
  },
  game: {
    flex: 8
  },
  palette: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export class App extends React.Component {
  componentDidMount() {
    Animated.timing(this.state.opacity, {toValue: 1, duration: 1000, useNativeDriver: true}).start();
  }

  state = {
    opacity: new Animated.Value(0)
  };

  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
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
      </Animated.View>
    );
  }
}

export default App;
