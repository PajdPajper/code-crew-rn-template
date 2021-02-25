import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/ClientSplash'

const { Navigator, Screen } = createStackNavigator()

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const options = {
  headerShown: false,
    transitionSpec: {
        open: config,
        close: config,
    },
}

export default () => (
  <Navigator>
    <Screen name="Splash" component={Splash} options={options} />
  </Navigator>
)
