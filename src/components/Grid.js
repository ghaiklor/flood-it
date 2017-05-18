import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from './Tile';
import COLORS from '../constants/colors';

const {width: WIDTH} = Dimensions.get('window');

export default class Grid extends React.Component {
  state = {
    field: Array.from({length: 14 * 14}).map(() => COLORS[Math.floor(Math.random() * COLORS.length)])
  };

  makeRow(index, tiles) {
    const {size} = this.props;

    return (
      <View key={index} style={{flexDirection: 'row'}}>
        {tiles.slice(index * size, index * size + size)}
      </View>
    )
  }

  render() {
    const {size} = this.props;
    const {field} = this.state;
    const tileWidth = WIDTH / size;
    const tiles = field.map((color, i) => <Tile key={i} color={color} size={tileWidth}/>)

    return (
      <View style={{flexDirection: 'column'}}>
        {Array.from({length: size}).map((_, i) => this.makeRow(i, tiles))}
      </View>
    );
  }
}
