import React, { useState } from 'react'
import { Container, Form, Content, Text } from 'native-base'
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { navigate } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import * as authActions from '../../store/actions/auth'

const infoGraph = require('../../assets/auth/signIn.png')
const height = Dimensions.get('window').height
const MailIcon = require('../../assets/icons/mail.png')
const LockIcon = require('../../assets/icons/lock.png')

export default (props) => {
  const [email, setEmail] = useState('john@doe.com')
  const [password, setPassword] = useState('signup123')

  const dispatch = useDispatch()

  const handleSignIn = async () => {
    console.log('email iz signin', email)
    try {
      await dispatch(authActions.login(email, password))
    } catch (err) {
      console.log('ERROR', err)
    }
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
          Sign In
        </Text>

        <Form>
          <Input
            keyboardType="email-address"
            placeholder="Enter email address"
            icon={{ type: 'MaterialIcons', name: 'email' }}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            secureTextEntry
            placeholder="Enter password"
            icon={{ type: 'MaterialIcons', name: 'lock' }}
            onChangeText={(value) => setPassword(value)}
          />
        </Form>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigate(props, 'Forgot Password')}>
          <Text style={style.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </Content>

      {/* Sign in button */}
      <View style={{ padding: 24 }}>
        <Button
          disabled={!(email && password)}
          {...props}
          title="Sign In"
          style={GlobalStyles.fixedBottom}
          method={() => handleSignIn()}
        />

        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.fixedBottom,
            GlobalStyles.itemsCenter,
            { marginTop: 34 },
          ]}>
          <Text style={style.bottomText}>Don't you have an account yet? </Text>
          <TouchableOpacity onPress={() => navigate(props, 'Sign Up')}>
            <Text style={style.textLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    textAlign: 'center'
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
  }
})
