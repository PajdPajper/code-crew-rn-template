import React from 'react'
import { Container, Text, Footer } from 'native-base'
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
const InfoGraph = require('../../assets/onboarding/onboarding-2.png')

export default (props) => {
  return (
    <Container style={style.container}>
      <View style={style.content}>
        <Text style={GlobalStyles.onboardTitle}>
          Structured content{'\n'}delivery
        </Text>
        <Image resizeMode="contain" source={InfoGraph} style={style.logo} />

        {/*  Description */}
        <Text style={GlobalStyles.onboardDescription}>
          Members receive regular surveys to track progress towards physical and
          mental health improvement.
        </Text>

        <Button
          {...props}
          style={{ marginTop: 24 }}
          title="Next"
          color={Colors.WHITE}
          textColor={Colors.PRIMARY}
          screen="Onboard Step Three"
        />

        <View style={[GlobalStyles.footerProgress, GlobalStyles.row]}>
          <View style={GlobalStyles.circleProgress} />
          <View style={GlobalStyles.circleProgressActive} />
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
