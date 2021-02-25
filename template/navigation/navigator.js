import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage'
import BottomTabs from '../components/BottomTabs'
import * as authActions from '../store/actions/auth';

// Import screens
import HomeStack from './HomeNavigator';
import OnboardNavigator from './OnboardNavigator'
import AuthNavigator from './AuthNavigator'
import SplashStack from './SplashNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => {
  return (
    <BottomTabs route={state.routeNames[state.index]} navigation={navigation} />
  )
}

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeStack} />
  </Navigator>
)

export const AppNavigator = () => {
  const isAuth = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSignout = useSelector((state) => state.auth.isSignout);
  const user = useSelector((state) => state.auth.user);
  const onBoardCompleted = useSelector((state) => state.auth.onBoardCompleted);
  const showSplash = useSelector((state) => state.auth.showSplash);
  const dispatch = useDispatch()


  const handleOnboarding = async () => {
    // await AsyncStorage.removeItem('onBoardCompleted')
    const result = await AsyncStorage.getItem('onBoardCompleted')
    console.log('da li je onboard completed', result);
    if (result !== null) {
      dispatch(authActions.handleOnboarding(true))
    } else {
      dispatch(authActions.handleOnboarding(false))
    }
  }

  handleOnboarding()

  const navigateUser = () => {
    if (!onBoardCompleted) {
      return <OnboardNavigator />
    } else if (isAuth) {
      // Show splash for three seconds
      if (showSplash) {
        setTimeout(() => {
          dispatch(authActions.handleSplash(false))
        }, 2000)
        return <SplashStack />
      }
      return <TabNavigator />
    }
    return <AuthNavigator />
  }

  return (
    <NavigationContainer>
      {navigateUser()}
      {/*{onboardCompleted ? <AuthNavigator /> : <OnboardNavigator />}*/}
    </NavigationContainer>
  )
}
