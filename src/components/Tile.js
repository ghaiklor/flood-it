import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export class Tile extends React.Component {
  render() {
    const {color, width, height, style, onPress} = this.props;
    const mixedStyle = {...style, backgroundColor: color, width, height};
    const tile = <View style={mixedStyle}/>;
    const touchableTile = <TouchableOpacity onPress={onPress}>{tile}</TouchableOpacity>;

    return onPress ? touchableTile : tile;
  }
}

export default Tile;
