import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from '../components/Tile';

const {width: WIDTH} = Dimensions.get('window');

export default class Palette extends React.Component {
  _onPress(color) {
    console.log(color);
  }

  createTile(size, color, i) {
    return <Tile key={i} color={color} size={size} onPress={this._onPress.bind(this, color)}/>;
  }

  render() {
    const {colors} = this.props;
    const tileSize = WIDTH / colors.length;
    const tiles = colors.map(this.createTile.bind(this, tileSize));

    return <View style={{flexDirection: 'row'}}>{tiles}</View>;
  }
}
