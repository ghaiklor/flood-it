import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const mapStateToProps = state => ({
  field: state.field
});

export class Grid extends React.Component {
  makeRow(rowIndex, tiles) {
    const size = Math.sqrt(tiles.length);

    return (
      <View key={rowIndex} style={{flexDirection: 'row'}}>
        {tiles.slice(rowIndex * size, rowIndex * size + size)}
      </View>
    );
  }

  makeGrid(size, tiles) {
    return Array
      .from({length: size})
      .map((_, i) => this.makeRow(i, tiles));
  }

  render() {
    const {field} = this.props;
    const size = Math.sqrt(field.length);
    const tileSize = Math.ceil(WINDOW_WIDTH / size);
    const tiles = field.map((cell, i) => <Tile key={i} color={COLORS[cell]} width={tileSize} height={tileSize}/>);

    return <View style={{flexDirection: 'column'}}>{this.makeGrid(size, tiles)}</View>;
  }
}

Grid.propTypes = {
  field: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Grid);
