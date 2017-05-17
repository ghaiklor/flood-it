import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from './Tile';

const {WIDTH, HEIGHT} = Dimensions.get('window');

export default class Grid extends React.Component {
  generateRow(size, tileWidth) {
    return (
      <View style={{flexDirection: 'row'}}>
        {Array.from({length: size}).map(() => <Tile color="red" size={tileWidth}/>)}
      </View>
    )
  }

  render() {
    const {size} = this.props;
    const tileWidth = WIDTH / size;

    return (
      <View style={{flexDirection: 'column'}}>
        {Array.from({length: size}).map(() => this.generateRow(size, tileWidth))}
      </View>
    );
  }
}
