/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class Home extends React.Component {
 
  render() {
    return (<View style={styles.container}>
      <Text>Home</Text>
      <Text onPress={
        () => {
          this.props.navigation.navigate('About')
        }
      }> About</Text>
    </View>
    )
  }
}
const Header = () =>(
  <Image style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
)

Home.navigationOptions = {
  headerTitle: <Header />,
}



const About = (props) => (
  <View style={styles.container}>
    <Text>About</Text>
  </View>
)
const RouteConfig = {
  Home: { screen: Home },
  About: { screen: About }
}

const Routes = TabNavigator(RouteConfig)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'flex-end'
  }
});

AppRegistry.registerComponent('testApp', () => Routes);
