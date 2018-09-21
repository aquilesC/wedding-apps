import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../helper'
import { Button } from 'native-base';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <LinearGradient
          colors={['#ffe4c4', '#ff69b4']}
          style={{ padding: 15, alignItems: 'center', justifyContent: 'flex-end', flex:1, width: SCREEN_WIDTH}}>
          <View style={styles.bg}>
            <Image 
              source={require('../assets/images/bg.png')}
              style={styles.bgImage}
            />
          </View>
          <Text style={styles.headingStyle}>Edy Syahputra & Intan Pelangi</Text>
          <Text style={styles.textStyle}>04 October 2018</Text>
          {/* <View style={styles.buttonContainer}>
            <Button block style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Visit</Text>
            </Button>
          </View> */}
        </LinearGradient>
      </View>
    )
  }
}
const styles = {
  bg: {
    position: 'absolute',
    top:0,
    right:0,
    bottom:0,
    left:0,
  },
  bgImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  backgroundStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingStyle: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 12
  },
  textStyle: {
    color: '#222',
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: 'center'
  },
  buttonStyle: {
    padding: 16,
  },
  buttonTextStyle: {
    color: '#fff'
  }
}

export default HomeScreen;