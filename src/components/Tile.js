import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export default class Tile extends React.Component {
  render() {
    const {color, onPress} = this.props;
    const style = {backgroundColor: color};
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
