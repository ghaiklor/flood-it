import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export default class Tile extends React.Component {
  render() {
    const {color, size, onPress} = this.props;
    const style = {backgroundColor: color, width: size, height: size};
    const tile = <View style={style}/>;
    const touchableTile = <TouchableOpacity onPress={onPress}>{tile}</TouchableOpacity>;

    return onPress ? touchableTile : tile;
  }
}
