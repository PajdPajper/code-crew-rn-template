import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import SignUpStepTwo from '../screens/Auth/SignUpStepTwo'
import SignUpPassword from '../screens/Auth/SignUpPassword'
import ForgotPassword from '../screens/Auth/ForgotPassword'

const { Navigator, Screen } = createStackNavigator()

const options = {
  headerShown: false
}

export default () => (
  <Navigator>
    <Screen name="Sign In" component={SignIn} options={options} />
    <Screen name="Sign Up" component={SignUp} options={options} />
    <Screen name="Sign Up Step Two" component={SignUpStepTwo} options={options} />
    <Screen
      name="Sign Up Password"
      component={SignUpPassword}
      options={options}
    />
    <Screen
      name="Forgot Password"
      component={ForgotPassword}
      options={options}
    />
  </Navigator>
)
