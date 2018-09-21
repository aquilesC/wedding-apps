import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../helper'

const gallery = [
  {
    "src": "http://edyintan.com/medias/wide1.jpg",
    "thumbnail": "http://edyintan.com/medias/wide1.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 1",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/wide2.jpg",
    "thumbnail": "http://edyintan.com/medias/wide2.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 2",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/wide3.jpg",
    "thumbnail": "http://edyintan.com/medias/wide3.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 3",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/wide4.jpg",
    "thumbnail": "http://edyintan.com/medias/wide4.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 4",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/wide5.jpg",
    "thumbnail": "http://edyintan.com/medias/wide5.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 5",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/wide6.jpg",
    "thumbnail": "http://edyintan.com/medias/wide6.jpg",
    "w": 859,
    "h": 573,
    "title": "Image 6",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/pot1.jpg",
    "thumbnail": "http://edyintan.com/medias/pot1.jpg",
    "w": 573,
    "h": 858,
    "title": "Image 7",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/pot2.jpg",
    "thumbnail": "http://edyintan.com/medias/pot2.jpg",
    "w": 573,
    "h": 858,
    "title": "Image 8",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/pot3.jpg",
    "thumbnail": "http://edyintan.com/medias/pot3.jpg",
    "w": 573,
    "h": 858,
    "title": "Image 9",
    "class": "wide"
  },
  {
    "src": "http://edyintan.com/medias/pot4.jpg",
    "thumbnail": "http://edyintan.com/medias/pot4.jpg",
    "w": 573,
    "h": 858,
    "title": "Image 10",
    "class": "wide"
  }
]

class GalleryScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.home}>
        <View style={styles.bgImageContainer}>
          <Image style={styles.imageHeading} 
            source={{uri: 'https://wedding-invitation-ez.netlify.com/static/media/bg3.f99a5eb9.jpg'}}
            style={styles.bgImage}
            resizeMode="repeat"
          />
        </View>
        <View style={styles.galleryContainer}>
        
        { gallery.map((img, index) => {
          return (
            <View key={index} style={styles.item}>
              <Image
                source={{uri: img.src}}
                style={styles.itemImg}
              ></Image>
            </View>
          )
        })}
        </View>
      </ScrollView>
    )
  }
}
const styles = {
  home: {
    flex:1,
    backgroundColor: '#fff'
  },
  galleryContainer: {
    paddingTop: 0,
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16
  },
  galleryHeading: {
    fontSize: 16,
    color: '#222',
    marginBottom: 8,
    marginTop: 8,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  },
  item: {
    width: '50%',
    flexBasis: '50%',
    padding: 4

  },
  itemImg: {
    height: 200
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

export default GalleryScreen;