import React from 'react';
import {View, Dimensions} from 'react-native';
import Tile from './Tile';

const {WIDTH, HEIGHT} = Dimensions.get('window');

export default class Grid extends React.Component {
  render() {
    const {size} = this.props;
    const tileWidth = WIDTH / size;

    return null;
  }
}
