import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const mapStateToProps = state => ({
  field: state.field
});

class Grid extends React.Component {
  makeRow(index, tiles) {
    const size = Math.sqrt(tiles.length);

    return (
      <View key={index} style={{flexDirection: 'row'}}>
        {tiles.slice(index * size, index * size + size)}
      </View>
    )
  }

  render() {
    const {field} = this.props;
    const size = Math.sqrt(field.length);
    const tileWidth = WINDOW_WIDTH / size;
    const tiles = field.map((colorIndex, i) => <Tile key={i} color={COLORS[colorIndex]} size={tileWidth}/>);

    return (
      <View style={{flexDirection: 'column'}}>
        {Array.from({length: size}).map((_, i) => this.makeRow(i, tiles))}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Grid);
