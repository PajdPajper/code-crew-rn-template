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
import {useSelector} from "react-redux";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const InfoGraphStepOne = require('../../assets/onboarding/onboarding-1.png')

export default (props) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container style={[style.container, {backgroundColor: user.default_color}]}>
      <View style={style.content}>
        <View style={style.logoWrapper}>
          <Image
              resizeMode="contain"
              source={{uri: user.health_plan_logo}}
              style={style.logo}
          />
        </View>
        <Text style={style.onboardTitle}>
          First Health Plan
        </Text>
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  onboardTitle: {
    marginTop: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 42.19,
    color: Colors.WHITE
  },
  container: {
    padding: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 30
  },
  logo: {
    width: 32,
    height: 32
  }
})
