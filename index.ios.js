import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
  } from 'react-native'

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
        <Text>icon</Text>
        <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.body}>
        <Text style={styles.title}>Build a Fucking Weather App</Text>
        <Text style={styles.subtitle}>Lets make it rain</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD017'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1,
    // backgroundColor: 'blue'
  },
  temp:{
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 78,
    color: 'white',
    marginBottom: 5
  },
  subtitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
    color: 'white'
  },
  body: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex:5,
    // backgroundColor: 'red',
    margin: 10
  }
})

AppRegistry.registerComponent('FishingWeather', () => App)