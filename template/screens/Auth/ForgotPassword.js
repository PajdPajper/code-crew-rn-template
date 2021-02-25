import React, { Component, useState, useContext } from 'react'
import { Container, Form, Content, Text } from 'native-base'
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { navigate } from '../../utils/utils'
import { forgotPassword } from '../../services';

const infoGraph = require('../../assets/auth/forgotPassword.png')
const height = Dimensions.get('window').height
const MailIcon = require('../../assets/icons/mail.png')

export default (props) => {
  const [email, setEmail] = useState(null)

  // const { signIn } = useContext(authContext)

  const handlePasswordReset = async () => {
    const res = await forgotPassword(email)
    if (res.status > 199 && res.status < 300) {
      navigate(props, 'Sign In')
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
          Forgot Password
        </Text>

        <Form>
          <Input
            keyboardType="email-address"
            placeholder="Enter email address"
            icon={{ type: 'MaterialIcons', name: 'lock' }}
            onChangeText={(value) => setEmail(value)}
          />
        </Form>
      </Content>

      {/* Sign in button */}
      <View style={{ padding: 24 }}>
        <Button
          {...props}
          method={() => handlePasswordReset()}
          title="Send reset code"
          style={GlobalStyles.fixedBottom}
        />
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
  }
})
