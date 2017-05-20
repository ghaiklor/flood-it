import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  maxMoves: state.maxMoves,
  spentMoves: state.spentMoves,
});

class Stats extends React.Component {
  render() {
    const {maxMoves, spentMoves} = this.props;

    return (
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{maxMoves - spentMoves}</Text>
    )
  }
}

export default connect(mapStateToProps)(Stats);


