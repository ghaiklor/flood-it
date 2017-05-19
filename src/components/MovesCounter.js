import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import calculateMaxMoves from '../common/calculateMaxMoves';

const mapStateToProps = state => ({
  fieldSize: state.fieldSize,
  colorsCount: state.colorsCount,
  spentMoves: state.spentMoves,
  done: state.done
});

class MovesCounter extends React.Component {
  render() {
    const {spentMoves, fieldSize, colorsCount, done} = this.props;
    const maxMoves = calculateMaxMoves(fieldSize, colorsCount);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{spentMoves}</Text>
        <Text style={styles.text}>\</Text>
        <Text style={styles.text}>{maxMoves}</Text>
        <Text style={styles.text}> ({done}%)</Text>
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
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  }
});

export default connect(mapStateToProps)(MovesCounter);


