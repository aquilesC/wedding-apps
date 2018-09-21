import React from 'react';
import { Platform, View, StyleSheet, StatusBar, Icon, Button, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialBottomTabNavigator
} from "react-navigation";
import { Constants } from "expo";
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CoupleScreen from './screens/CoupleScreen';
import GalleryScreen from './screens/GalleryScreen';
import EventScreen from './screens/EventScreen';
import LocationScreen from './screens/LocationScreen';



class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render(){
    StatusBar.setBarStyle('dark-content', true)
    const MainNavigator = createBottomTabNavigator({
      Couple: HomeScreen,
      Gallery: createStackNavigator({
        screen: GalleryScreen
      }, {
        navigationOptions: ({navigation}) => ({
          title: 'Our Gallery',
          headerLeft: <Button title="Back" style={styles.backButton} onPress={()=>navigation.navigate('Couple')}/>
        })
      }),
      Location: createStackNavigator({
        screen: LocationScreen
      }, {
        navigationOptions: ({navigation}) => ({
          title: 'Wedding Reception',
          headerLeft: <Button title="Back" style={styles.backButton} onPress={()=>navigation.navigate('Couple')}/>
        })
      })
    }, {
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: true,
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Couple') {
            iconName = `ios-contacts${focused ? '' : '-outline'}`;
          } else if (routeName === 'Gallery') {
            iconName = `ios-photos${focused ? '' : '-outline'}`;
          } else if (routeName === 'Location') {
            iconName = `ios-map${focused ? '' : '-outline'}`;
          }
  
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      lazy: true,
      tabBarOptions: {
        activeTintColor: '#222',
        inactiveTintColor: '#aaa',
        style: {
          backgroundColor: '#f8f8f8'
        }
      },
    })

    return (
      <MainNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight
      }
    })
  },
  stackHeaderStyle: {
    ...Platform.select({
      android: {
        marginTop: -Constants.statusBarHeight
      }
    })
  }
});
 
export default App;