import React, { useState, useEffect } from 'react'
import { Container, Form, Content, Text, Icon, Item, Picker } from 'native-base'
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import GlobalStyles from '../../constants/GlobalStyles'
import Colors from '../../constants/Colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import {
  fetchChronicConditions,
  fetchExerciseGoals,
  fetchPersona,
  fetchPhysicalAilments,
} from '../../services/index';
import {navigate} from '../../utils/utils';
const infoGraph = require('../../assets/auth/signUp.png')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const MailIcon = require('../../assets/icons/mail.png')

export default (props) => {
  const [healthIdNumber, setHealthIdNumber] = useState('')
  const [gender, setGender] = useState('')
  const [chronicData, setChronicData] = useState('')
  const [physicalData, setPhysicalData] = useState('')
  const [exerciseData, setExerciseData] = useState('')
  const [personaData, setPersonaData] = useState('')
  const [chronicCondition, setChronicCondition] = useState(null)
  const [physicalAliments, setPhysicalAliments] = useState('')
  const [exerciseGoals, setExerciseGoals] = useState('')
  const [persona, setPersona] = useState('')

  let { params } = props.route

  useEffect(() => {
    fetchData()
  }, []);

  // Fetch Data
  const fetchData = async () => {
    const chronicResponse = await fetchChronicConditions()
    const physicalResponse = await fetchPhysicalAilments(params.language)
    const exerciseResponse = await fetchExerciseGoals(params.language)
    const personaResponse = await fetchPersona(params.language)

    const chronicParsed = () => {
      const result = []
      chronicResponse.forEach((e) => {
        if (e.language === params.language) {
          result.push(e)
        }
      })
      return result
    }
    const physicalParsed = () => {
      const result = []
      physicalResponse.forEach((e) => {
        if (e.language === params.language) {
          result.push(e);
        }
      })
      return result
    }
    const exerciseParsed = () => {
      const result = []
      exerciseResponse.forEach((e) => {
        if (e.language === params.language) {
          result.push(e);
        }
      })
      return result
    }
    const personaParsed = () => {
      const result = []
      personaResponse.forEach((e) => {
        if (e.language === params.language) {
          result.push(e);
        }
      })
      return result
    }

    setChronicData(chronicParsed())
    setPhysicalData(physicalParsed())
    setExerciseData(exerciseParsed())
    setPersonaData(personaParsed())
  }

  const formValid = () => {
    return !!(
      healthIdNumber &&
      gender &&
      chronicCondition &&
      physicalAliments &&
      exerciseGoals &&
      persona
    );
  }

  const _renderPicker = (data, label, value) => {
    if (data.length > 0) {
      return data.map((e) => {
        return <Picker.Item label={e[label]} value={e[value]} />
      })
    }
    return <Picker.Item label="No Data" value={null} />;
  }

  const signIn = async () => {
    const formData = {}
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
            placeholder="Health ID number"
            icon={{ type: 'MaterialIcons', name: 'favorite' }}
            onChangeText={(value) => setHealthIdNumber(value)}
          />

          {/* Gender */}
          <Item picker regular style={style.itemContainer}>
            <Icon type="MaterialIcons" name="wc" style={style.icon} />
            <Picker
              mode="dropdown"
              style={style.picker}
              iosIcon={
                <Icon
                  type="EvilIcons"
                  name="chevron-down"
                  style={{ fontSize: 28 }}
                />
              }
              placeholder="Gender"
              placeholderStyle={{ color: Colors.DARK_GREY }}
              placeholderIconColor={Colors.DARK_GREY}
              selectedValue={gender}
              onValueChange={setGender}>
              <Picker.Item label="Male" value="M" />
              <Picker.Item label="Female" value="F" />
            </Picker>
          </Item>

          {/*  Chronic Condition */}
          {!chronicData ? (
            <Spinner style={{ marginBottom: 10 }} />
          ) : (
            <Item picker regular style={style.itemContainer}>
              <Icon type="MaterialIcons" name="check" style={style.icon} />
              <Picker
                mode="dropdown"
                style={style.picker}
                iosIcon={
                  <Icon
                    type="EvilIcons"
                    name="chevron-down"
                    style={{ fontSize: 28 }}
                  />
                }
                placeholder="Chronic Condition"
                placeholderStyle={{ color: Colors.DARK_GREY }}
                placeholderIconColor={Colors.DARK_GREY}
                selectedValue={chronicCondition}
                onValueChange={setChronicCondition}>
                {_renderPicker(chronicData, 'name', 'id')}
              </Picker>
            </Item>
          )}

          {/*  Physical Ailments */}
          {!physicalData ? (
            <Spinner style={{ marginBottom: 10 }} />
          ) : (
            <Item picker regular style={style.itemContainer}>
              <Icon type="MaterialIcons" name="check" style={style.icon} />
              <Picker
                mode="dropdown"
                style={style.picker}
                iosIcon={
                  <Icon
                    type="EvilIcons"
                    name="chevron-down"
                    style={{ fontSize: 28 }}
                  />
                }
                placeholder="Physical Ailments"
                placeholderStyle={{ color: Colors.DARK_GREY }}
                placeholderIconColor={Colors.DARK_GREY}
                selectedValue={physicalAliments}
                onValueChange={setPhysicalAliments}>
                {_renderPicker(physicalData, 'name', 'id')}
              </Picker>
            </Item>
          )}

          {/*  Exercise Goals */}
          {!exerciseData ? (
            <Spinner style={{ marginBottom: 10 }} />
          ) : (
            <Item picker regular style={style.itemContainer}>
              <Icon type="MaterialIcons" name="check" style={style.icon} />
              <Picker
                mode="dropdown"
                style={style.picker}
                iosIcon={
                  <Icon
                    type="EvilIcons"
                    name="chevron-down"
                    style={{ fontSize: 28 }}
                  />
                }
                placeholder="Exercise Goals"
                placeholderStyle={{ color: Colors.DARK_GREY }}
                placeholderIconColor={Colors.DARK_GREY}
                selectedValue={exerciseGoals}
                onValueChange={setExerciseGoals}>
                {_renderPicker(exerciseData, 'name', 'id')}
              </Picker>
            </Item>
          )}

          {/*  Persona */}
          {!personaData ? (
            <Spinner style={{ marginBottom: 10 }} />
          ) : (
            <Item picker regular style={style.itemContainer}>
              <Icon type="MaterialIcons" name="check" style={style.icon} />
              <Picker
                mode="dropdown"
                style={style.picker}
                iosIcon={
                  <Icon
                    type="EvilIcons"
                    name="chevron-down"
                    style={{ fontSize: 28 }}
                  />
                }
                placeholder="Persona"
                placeholderStyle={{ color: Colors.DARK_GREY }}
                placeholderIconColor={Colors.DARK_GREY}
                selectedValue={persona}
                onValueChange={setPersona}>
                {_renderPicker(personaData, 'name', 'id')}
              </Picker>
            </Item>
          )}
        </Form>

        <View style={[GlobalStyles.itemsCenter, GlobalStyles.row]}>
          <View style={style.progressBar} />
          <View style={style.progressBar} />
          <View
            style={[style.progressBar, { backgroundColor: Colors.LIGHT_GREY }]}
          />
        </View>

        <View>
          {formValid() && (
            <Button
              {...props}
              title="Next"
              screen="Sign Up Password"
              payload={{
                ...params,
                healthIdNumber,
                gender,
                chronicCondition,
                physicalAliments,
                exerciseGoals,
                persona
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
    height: '40%',
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
  },
  picker: {
    width: width * 0.88,
    height: 50
  }
})
