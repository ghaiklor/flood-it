import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {newGame} from '../actions';

const mapDispatchToProps = dispatch => ({onPress: () => dispatch(newGame())});

class NewGameButton extends React.Component {
  render() {
    const {onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={require('../../assets/icons/new-game.png')}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
});

export default connect(null, mapDispatchToProps)(NewGameButton);
