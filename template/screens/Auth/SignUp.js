import React, { useState } from 'react'
import { Container, Form, Content, Text, Icon, Item, Picker } from 'native-base'
import {
  Dimensions,
  Image,
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import DatePicker from 'react-native-date-picker'
import {navigate} from '../../utils/utils';

const infoGraph = require('../../assets/auth/signUp.png')
const height = Dimensions.get('window').height
const MailIcon = require('../../assets/icons/mail.png')
const LockIcon = require('../../assets/icons/lock.png')

export default (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [date, setDate] = useState(new Date())
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [language, setLanguage] = useState('')

  // const { signIn } = useContext(authContext)

  const formValid = () => {
    return !!(
      firstName &&
      lastName &&
      email &&
      dateOfBirth &&
      mobileNumber &&
      language
    );
  }

  return (
    <Container>
      <Content contentContainerStyle={{ padding: 24 }}>
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
            placeholder="Enter first name"
            icon={{ type: 'MaterialIcons', name: 'person' }}
            onChangeText={(value) => setFirstName(value)}
          />
          <Input
            placeholder="Enter last name"
            icon={{ type: 'MaterialIcons', name: 'person' }}
            onChangeText={(value) => setLastName(value)}
          />
          <Input
            placeholder="Enter email address"
            icon={{ type: 'MaterialIcons', name: 'email' }}
            onChangeText={(value) => setEmail(value)}
          />
          {/* Date of birth */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              borderWidth: 1,
              borderColor: Colors.LIGHT_GREY,
              padding: 12,
              marginBottom: 15,
              borderRadius: 5,
              backgroundColor: Colors.WHITE_DARKEN
            }}>
            <View style={GlobalStyles.row}>
              <Icon
                type="MaterialIcons"
                name="event"
                style={{
                  color: Colors.DARK_GREY,
                  fontSize: 27,
                  marginRight: 22,
                }}
              />
              <Text style={{ color: Colors.GREY }}>
                {dateOfBirth || 'Date of birth'}
              </Text>
            </View>
          </TouchableOpacity>
          {/* Mobile number */}
          <Input
            placeholder="Enter mobile number"
            icon={{ type: 'MaterialIcons', name: 'phone' }}
            onChangeText={(value) => setMobileNumber(value)}
          />

          {/*  Language */}
          <Item picker regular style={style.itemContainer}>
            <Icon type="MaterialIcons" name="flag" style={style.icon} />
            {/*<Picker*/}
            {/*  mode="dropdown"*/}
            {/*  style={{ width: '80%' }}*/}
            {/*  iosIcon={*/}
            {/*    <Icon*/}
            {/*      type="EvilIcons"*/}
            {/*      name="chevron-down"*/}
            {/*      style={{ fontSize: 28 }}*/}
            {/*    />*/}
            {/*  }*/}
            {/*  placeholder="Language"*/}
            {/*  placeholderStyle={{ color: Colors.DARK_GREY }}*/}
            {/*  placeholderIconColor={Colors.DARK_GREY}*/}
            {/*  selectedValue={language}*/}
            {/*  onValueChange={setLanguage}>*/}
            {/*  <Picker.Item label="English" value="en" />*/}
            {/*  <Picker.Item label="Spanish" value="es" />*/}
            {/*</Picker>*/}
          </Item>
        </Form>

        <View style={[GlobalStyles.itemsCenter, GlobalStyles.row]}>
          <View style={style.progressBar} />
          <View
            style={[style.progressBar, { backgroundColor: Colors.LIGHT_GREY }]}
          />
          <View
            style={[style.progressBar, { backgroundColor: Colors.LIGHT_GREY }]}
          />
        </View>

        <View>
          {formValid() && (
            <Button
              {...props}
              title="Next"
              screen="Sign Up Step Two"
              payload={{
                firstName,
                lastName,
                email,
                date,
                mobileNumber,
                language
              }}
              style={{ marginTop: 30 }}
            />
          )}

          <View
            style={[
              GlobalStyles.row,
              { marginTop: 34, justifyContent: 'center' },
            ]}>
            <Text style={style.bottomText}>Do you have an account? </Text>
            <TouchableOpacity onPress={() => navigate(props, 'Sign In')}>
              <Text style={style.textLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          presentationStyle="overFullScreen"
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View>
                {/*<DatePicker*/}
                {/*  mode="date"*/}
                {/*  locale="en"*/}
                {/*  date={date}*/}
                {/*  onDateChange={(value) => {*/}
                {/*    setDate(value)*/}
                {/*    setDateOfBirth(value.toLocaleDateString())*/}
                {/*  }}*/}
                {/*/>*/}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Content>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    width: '100%',
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
  itemContainer: {
    backgroundColor: Colors.WHITE_DARKEN,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 9,
    paddingRight: 16,
  },
  icon: {
    fontSize: 27,
    color: Colors.GREY
  },
  progressBar: {
    marginTop: 10,
    marginRight: 4,
    backgroundColor: Colors.PRIMARY,
    width: 30,
    height: 4,
    borderRadius: 100
  }
})
