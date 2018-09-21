import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CoupleScreen extends Component {

  render() {
    return (
      <View style={styles.home}>
        <Text>Couple</Text>
      </View>
    )
  }
}
const styles = {
  home: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default CoupleScreen;