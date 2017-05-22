import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  }
});

const mapStateToProps = state => ({
  currentLevel: state.currentLevel,
  maxMoves: state.maxMoves,
  spentMoves: state.spentMoves
});

export class Stats extends React.Component {
  render() {
    const {maxMoves, spentMoves} = this.props;

    return (
      <Text style={styles.text}>{maxMoves - spentMoves}</Text>
    );
  }
}

Stats.propTypes = {
  maxMoves: PropTypes.number.isRequired,
  spentMoves: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Stats);
