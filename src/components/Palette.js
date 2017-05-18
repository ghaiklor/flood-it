import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {runColor} from '../actions';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const MAX_HEIGHT = 80;
const {width: WINDOWS_WIDTH} = Dimensions.get('window');

const mapStateToProps = state => ({
  colorsCount: state.colorsCount,
  currentColorIndex: state.currentColorIndex
});

const mapDispatchToProps = dispatch => ({
  onPress: colorIndex => dispatch(runColor(colorIndex))
});

class Palette extends React.Component {
  createTile(size, color, colorIndex) {
    const {currentColorIndex, onPress} = this.props;

    if (currentColorIndex === colorIndex) return <Tile key={colorIndex} color={color} size={size}/>;

    return <Tile key={colorIndex} color={color} size={size} onPress={onPress.bind(this, colorIndex)}/>;
  }

  render() {
    const {colorsCount} = this.props;
    const colors = COLORS.slice(0, colorsCount);
    const tileSize = Math.min(MAX_HEIGHT, WINDOWS_WIDTH / colors.length);
    const tiles = colors.map(this.createTile.bind(this, tileSize));

    return <View style={{flexDirection: 'row'}}>{tiles}</View>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
