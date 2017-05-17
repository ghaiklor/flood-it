import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from './Tile';

const {WIDTH} = Dimensions.get('window');

export default class Grid extends React.Component {
  generateRow(size, tileSize) {
    const tiles = Array.from({length: size}).map(() => <Tile color="red" size={tileSize}/>);

    return (
      <View style={{flexDirection: 'row'}}>
        {tiles}
      </View>
    )
  }

  render() {
    const {size} = this.props;
    const tileWidth = WIDTH / size;

    return (
      <View style={{flexDirection: 'column'}}>
        {Array.from({length: size}).fill(1).map(() => this.generateRow(size, tileWidth))}
      </View>
    );
  }
}
