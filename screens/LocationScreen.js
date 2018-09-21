import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../helper'
import { Thumbnail } from 'native-base';

class LocationScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.home}>
        <View style={styles.container}>
          <View style={styles.bgImageContainer}>
            <Image style={styles.imageHeading} 
              source={{uri: 'https://wedding-invitation-ez.netlify.com/static/media/bg3.f99a5eb9.jpg'}}
              style={styles.bgImage}
              resizeMode="repeat"
            />
          </View>
          <View style={styles.reception}>
            <Thumbnail large source={{uri: 'http://edyintan.com/static/media/eddie.bfb1ac53.jpg'}} style={styles.coupleImg}/>
            <Text style={styles.headingReseption}>Resepsi Pernikahan Pihak Lelaki</Text>
            <Text style={styles.date}>Kamis, 4 Oktober 2018</Text>
            <Text style={styles.time}>17.00 Wib - selesai</Text>
            <Text style={styles.address}>{`Jl. Petai No. 56 \nPasar 2 Tionghoa \nTandam`}</Text>
          </View>

          <View style={styles.reception}>
            <Thumbnail large source={{uri: 'http://edyintan.com/static/media/intan.ffb118c9.jpg'}} style={styles.coupleImg}/>
            <Text style={styles.headingReseption}>Resepsi Pernikahan Pihak Perempuan</Text>
            <Text style={styles.date}>Senin, 1 Oktober 2018</Text>
            <Text style={styles.time}>17.00 Wib - selesai</Text>
            <Text style={styles.address}>{`Gedung Garuda Mas \nPasar 5 Tionghoa \nTandam`}</Text>
          </View>
          
        </View>
      </ScrollView>
    )
  }
}
const styles = {
  home: {
    flex:1,
  }, 
  reception: {
    flex:1,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16
  },
  coupleImg: {
    marginBottom: 8,
    borderColor: '#999',
    borderWidth: 0.5
  },
  headingReseption: {
    textAlign: 'center', 
    textDecorationLine: 'underline',
    marginBottom: 16
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16
  },
  time: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8
  },
  address: {
    fontSize: 18,
    textAlign: 'center'
  },
  container: {
    flex:1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bgImageContainer: {
    position: 'absolute',
    top: 0,
    right:0,
    bottom:0,
    left:0
  },
  bgImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
}

export default LocationScreen;