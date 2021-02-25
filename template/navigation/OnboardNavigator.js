import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StepOne from '../screens/Onboard/StepOne'
import StepTwo from '../screens/Onboard/StepTwo'
import StepThree from '../screens/Onboard/StepThree'

const { Navigator, Screen } = createStackNavigator()

const options = {
  headerShown: false
}

export default () => (
  <Navigator>
    <Screen name="Onboard Step One" component={StepOne} options={options} />
    <Screen name="Onboard Step Two" component={StepTwo} options={options} />
    <Screen name="Onboard Step Three" component={StepThree} options={options} />
  </Navigator>
)
