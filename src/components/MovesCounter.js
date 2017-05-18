import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => ({moves: state.game.moves, maxMoves: state.configuration.maxMoves});

class MovesCounter extends React.Component {
  render() {
    const {moves, maxMoves} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{moves}</Text>
        <Text style={styles.text}>/</Text>
        <Text style={styles.text}>{maxMoves}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  }
});

export default connect(mapStateToProps)(MovesCounter);


