import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentLevel: state.currentLevel,
  maxMoves: state.maxMoves,
  spentMoves: state.spentMoves,
});

class Stats extends React.Component {
  render() {
    const {maxMoves, spentMoves} = this.props;

    return (
      <Text style={styles.text}>{maxMoves - spentMoves}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  }
});

export default connect(mapStateToProps)(Stats);


