import React from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {runColor} from '../actions';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';

const MAX_HEIGHT = 80;
const {width: WINDOWS_WIDTH} = Dimensions.get('window');

const mapStateToProps = state => ({
  level: state.configuration.level,
  currentColor: state.game.currentColor
});

const mapDispatchToProps = dispatch => ({
  onPress: color => dispatch(runColor(color))
});

class Palette extends React.Component {
  createTile(size, color, i) {
    const {currentColor, onPress} = this.props;

    if (currentColor === color) return <Tile key={i} color={color} size={size}/>;

    return <Tile key={i} color={color} size={size} onPress={onPress.bind(this, color)}/>;
  }

  render() {
    const {level} = this.props;
    const colors = COLORS.slice(0, level);
    const tileSize = Math.min(MAX_HEIGHT, WINDOWS_WIDTH / colors.length);
    const tiles = colors.map(this.createTile.bind(this, tileSize));

    return <View style={{flexDirection: 'row'}}>{tiles}</View>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
