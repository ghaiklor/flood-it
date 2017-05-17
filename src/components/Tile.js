import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export default class Tile extends React.Component {
  render() {
    const {color, size, onPress} = this.props;
    const style = {backgroundColor: color, width: size, height: size};
    const tile = <View style={style}/>;

    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>{tile}</TouchableOpacity>
      )
    } else {
      return tile;
    }
  }
}
