import React from 'react';
import {View} from 'react-native';
import Tile from '../components/Tile';

export default class Palette extends React.Component {
  render() {
    const {colors} = this.props;
    const tiles = colors.map(color => <Tile color={color} onPress={this._onPress}/>);

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {tiles}
      </View>
    );
  }
}
