import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {newGame} from '../actions';

const mapDispatchToProps = dispatch => ({onPress: () => dispatch(newGame())});

class NewGameButton extends React.Component {
  render() {
    const {onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text>NEW GAME</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20
  }
});

export default connect(null, mapDispatchToProps)(NewGameButton);
