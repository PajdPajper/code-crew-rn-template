import React, { Component, useState, useContext } from 'react'
import { Container, Form, Content, Text } from 'native-base'
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import routes from '../../constants/api-routes'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { navigate } from '../../utils/utils'
import Spinner from '../../components/Spinner';
import { signUp } from '../../services';

const infoGraph = require('../../assets/auth/signUp.png')
const height = Dimensions.get('window').height
const LockIcon = require('../../assets/icons/lock.png')

export default (props) => {
  const [loading, setLoading] = useState(false)
  const [password1, setPassword1] = useState(null)
  const [password2, setPassword2] = useState(null)

  const { params } = props.route
  console.log('total params', params);

  const formValid = () => {
    return !!(password1 && password2);
  }

  const handleSignUp = async () => {
    const {
      firstName,
      lastName,
      email,
      date,
      mobileNumber,
      language,
      healthIdNumber,
      gender,
      chronicCondition,
      physicalAliments,
      exerciseGoals,
      persona,
    } = params

    console.log('firstName', firstName);
    console.log('lastname', lastName);
    console.log('email', email);
    console.log('date', date);
    console.log('phoneNumber', mobileNumber);
    console.log('language', language);
    console.log('healthIdNumber', healthIdNumber);
    console.log('gender', gender);
    console.log('chronicConditions', chronicCondition);
    console.log('physicalAilments', physicalAliments);
    console.log('exerciseGoals', exerciseGoals);
    console.log('persona', persona);
    console.log('password1', password1);
    console.log('password2', password2);
    setLoading(true)
    const result = await signUp(
      firstName,
      lastName,
      email,
      date,
      mobileNumber,
      language,
      healthIdNumber,
      gender,
      chronicCondition,
      physicalAliments,
      exerciseGoals,
      persona,
      password1,
      password2
    )
    if (result.status > 199 && result.status < 300) {
      navigate(props, 'Sign In')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Content
        contentContainerStyle={{
          padding: 24,
        }}>
        <View style={style.imageContainer}>
          <Image resizeMode="contain" source={infoGraph} style={style.image} />
        </View>

        <Text
          style={[
            GlobalStyles.h1,
            GlobalStyles.textCenter,
            { marginTop: 20, marginBottom: 40 },
          ]}>
          Sign Up
        </Text>

        <Form>
          <Input
            secureTextEntry
            placeholder="Enter password"
            icon={{ type: 'MaterialIcons', name: 'lock' }}
            onChangeText={(value) => setPassword1(value)}
          />
          <Input
            secureTextEntry
            placeholder="Confirm password"
            icon={{ type: 'MaterialIcons', name: 'lock' }}
            onChangeText={(value) => setPassword2(value)}
          />
        </Form>

        <Text style={style.description}>
          Your personal information is saved, please enter password for your
          account
        </Text>
      </Content>

      {/* Sign in button */}
      <View style={{ padding: 24 }}>
        <View style={[GlobalStyles.itemsCenter, GlobalStyles.row]}>
          <View style={style.progressBar} />
          <View style={style.progressBar} />
          <View style={style.progressBar} />
        </View>
        {loading ? (
          <Spinner style={{ bottom: 20 }} />
        ) : (
          formValid() && (
            <Button
              {...props}
              title="Sign Up"
              style={GlobalStyles.fixedBottom}
              method={() => handleSignUp()}
            />
          )
        )}
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.12
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 140,
    height: 140,
    alignItems: 'center'
  },
  button: {
    width: 200,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center'
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.32,
  },
  textLink: {
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.32,
    color: Colors.PRIMARY
  },
  forgetPassword: {
    textAlign: 'right',
    color: Colors.PRIMARY,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.32,
    lineHeight: 16.41
  },
  description: {
    color: Colors.GREY,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.1,
    marginTop: 48
  },
  progressBar: {
    marginTop: 10,
    marginRight: 4,
    backgroundColor: Colors.PRIMARY,
    width: 30,
    height: 4,
    borderRadius: 100,
    bottom: height * 0.06
  },
})
