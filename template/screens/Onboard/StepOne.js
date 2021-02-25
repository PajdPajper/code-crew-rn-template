import React from 'react'
import { Container, Text, Footer, Content } from 'native-base'
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import Button from '../../components/Button'
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import { navigate } from '../../utils/utils'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const InfoGraphStepOne = require('../../assets/onboarding/onboarding-1.png')

export default (props) => {
  return (
    <Container style={style.container}>
      <View style={style.content}>
        <Text style={GlobalStyles.onboardTitle}>
          For a healthy{'\n'}mind & body
        </Text>
        <Image
          resizeMode="contain"
          source={InfoGraphStepOne}
          style={style.logo}
        />

        {/*  Description */}
        <Text style={GlobalStyles.onboardDescription}>
          Pathlyte delivers to members engaging and instructional exercise
          videos designed to improve the members’ overall health.
        </Text>

        <Button
          {...props}
          style={{ marginTop: 24 }}
          title="Next"
          color={Colors.WHITE}
          textColor={Colors.PRIMARY}
          screen="Onboard Step Two"
        />

        <View style={[GlobalStyles.footerProgress, GlobalStyles.row]}>
          <View style={GlobalStyles.circleProgressActive} />
          <View style={GlobalStyles.circleProgress} />
          <View style={GlobalStyles.circleProgress} />
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
