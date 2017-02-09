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
        <Text>24°</Text>
        </View>
        <View style={styles.body}>
        <Text>Build a Fucking Weather App</Text>
        <Text>Let's make it rain</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1,
    backgroundColor: 'blue'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:5,
    backgroundColor: 'red'
  }
})

AppRegistry.registerComponent('FishingWeather', () => App)