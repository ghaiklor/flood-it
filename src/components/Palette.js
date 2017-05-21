import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {runColor} from '../actions';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const PALETTE_HEIGHT = 80;
const TILE_STYLE = {borderTopLeftRadius: 15, borderTopRightRadius: 15};
const PALETTE_STYLE = {flexDirection: 'row'};
const {width: WINDOWS_WIDTH} = Dimensions.get('window');

const mapStateToProps = state => ({
  colorsCount: state.colorsCount,
  currentColorIndex: state.currentColorIndex
});

const mapDispatchToProps = dispatch => ({
  onPress: colorIndex => dispatch(runColor(colorIndex))
});

export class Palette extends React.Component {
  createTile(width, height, color, colorIndex) {
    const {currentColorIndex, onPress} = this.props;
    const props = {key: colorIndex, style: TILE_STYLE, color, width, height};
    const tile = <Tile {...props}/>;
    const touchableTile = <Tile {...props} onPress={onPress.bind(this, colorIndex)}/>;

    return currentColorIndex === colorIndex ? tile : touchableTile;
  }

  render() {
    const {colorsCount} = this.props;
    const colors = COLORS.slice(0, colorsCount);
    const tileWidth = Math.ceil(WINDOWS_WIDTH / colors.length);
    const tiles = colors.map(this.createTile.bind(this, tileWidth, PALETTE_HEIGHT));

    return <View style={PALETTE_STYLE}>{tiles}</View>;
  }
}

Palette.propTypes = {
  colorsCount: PropTypes.number.isRequired,
  currentColorIndex: PropTypes.number,
  onPress: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
