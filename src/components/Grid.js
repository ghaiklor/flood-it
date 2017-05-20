import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const mapStateToProps = state => ({
  field: state.field
});

class Grid extends React.Component {
  makeRow(rowIndex, tiles) {
    const size = Math.sqrt(tiles.length);

    return (
      <View key={rowIndex} style={{flexDirection: 'row'}}>
        {tiles.slice(rowIndex * size, rowIndex * size + size)}
      </View>
    )
  }

  render() {
    const {field} = this.props;
    const size = Math.sqrt(field.length);
    const width = Math.ceil(WINDOW_WIDTH / size);
    const height = Math.ceil(WINDOW_HEIGHT / size / 2);
    const tiles = field.map((cell, i) => <Tile key={i} color={COLORS[cell]} width={width} height={height}/>);

    return (
      <View style={{flexDirection: 'column'}}>
        {Array.from({length: size}).map((_, i) => this.makeRow(i, tiles))}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Grid);
