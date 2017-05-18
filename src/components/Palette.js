import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from '../components/Tile';

const {width: WIDTH} = Dimensions.get('window');

export default class Palette extends React.Component {
  _onPress() {
  }

  render() {
    const {colors} = this.props;
    const tileSize = WIDTH / colors.length;
    const tiles = colors.map((color, i) => <Tile key={i} color={color} size={tileSize} onPress={this._onPress}/>);

    return <View style={{flexDirection: 'row'}}>{tiles}</View>;
  }
}
