import React from 'react'
import { ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors'

export default (props) => (
  <ActivityIndicator
    {...props}
    color={props.color || Colors.PRIMARY}
    size={props.size || 40}
  />
)
