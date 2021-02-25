import React from 'react'
import GlobalStyles from '../constants/GlobalStyles'
import { navigate } from '../utils/utils'
import { Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

export default (props) => {
  return (
    <TouchableOpacity
        disabled={props.disabled}
      style={[
        GlobalStyles.button,
        { backgroundColor: props.color || Colors.PRIMARY },
        props.style
      ]}
      onPress={() => {
        if (props.method) {
          props.method()
        } else {
          navigate(props, props.screen, props.payload)
        }
      }}>
      <Text
        style={[
          GlobalStyles.buttonText,
          { color: props.textColor || Colors.WHITE }
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
};
