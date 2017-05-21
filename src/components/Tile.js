import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export class Tile extends React.Component {
  render() {
    const {color, width, height, style, onPress} = this.props;
    const mixedStyle = {...style, backgroundColor: color, width, height};
    const tile = <View style={mixedStyle}/>;
    const touchableTile = <TouchableOpacity onPress={onPress}>{tile}</TouchableOpacity>;

    return onPress ? touchableTile : tile;
  }
}

Tile.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func
};

export default Tile;
