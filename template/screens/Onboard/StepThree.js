import React from 'react'
import { Container, Text, Footer } from 'native-base'
import { Image, StyleSheet, View, Dimensions } from 'react-native'
import Button from '../../components/Button'
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'

const InfoGraph = require('../../assets/onboarding/onboarding-3.png')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default (props) => {
  const dispatch = useDispatch()

  const handleNext = async () => {
    await AsyncStorage.setItem('onBoardCompleted', 'true')
    dispatch(authActions.handleOnboarding(true))
  }
  return (
    <Container style={style.container}>
      <View style={style.content}>
        <Text style={GlobalStyles.onboardTitle}>
          Chronic conditions{'\n'}and gaps in care
        </Text>
        <Image resizeMode="contain" source={InfoGraph} style={style.logo} />

        {/*  Description */}
        <Text style={GlobalStyles.onboardDescription}>
          BasicHealth has created six unique personas to ensure messaging is
          delivered in a manner that’s meaningful and effective
        </Text>

        <Button
          {...props}
          method={() => handleNext()}
          style={{ marginTop: 24 }}
          title="Next"
          color={Colors.WHITE}
          textColor={Colors.PRIMARY}
          screen="Onboard Step Two"
        />

        <View style={[GlobalStyles.footerProgress, GlobalStyles.row]}>
          <View style={GlobalStyles.circleProgress} />
          <View style={GlobalStyles.circleProgress} />
          <View style={GlobalStyles.circleProgressActive} />
        </View>
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    padding: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.9,
    height: height * 0.5
  }
})
