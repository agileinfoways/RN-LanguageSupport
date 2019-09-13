/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import SelectionScreen from './js/screen/selection.screen';
import HomeScreen from './js/screen/home.screen';

import { CONST } from './js/global/constants.global';

const AppNavigator = createStackNavigator({
  SelectionScreen:{
    screen:SelectionScreen,
    navigationOptions: ({ navigation }) => ({
      title: CONST.LANG_SELECTION
    })
  },
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: CONST.HOME
    })
  }
})

 

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return(
        <AppContainer />
    )
  }
}
