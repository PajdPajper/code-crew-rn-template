import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'

const { Navigator, Screen } = createStackNavigator()

const options = {
  headerShown: false
}

export default () => (
  <Navigator>
    <Screen name="HomeScreen" component={Home} options={options} />
  </Navigator>
)
