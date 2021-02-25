import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {Icon, Input, Item} from 'native-base';
import Colors from '../constants/Colors'

export default (props) => {
  return (
    <Item regular style={style.itemContainer}>
      {/*<Image resizeMode="contain" source={props.icon} style={style.icon} />*/}
      <Icon type={props.icon.type} name={props.icon.name} style={style.icon} />
      <Input
        {...props}
        placeholderTextColor={Colors.GREY}
        style={style.input}
        placeholder={props.placeholder}
        // onBlur={props.onBlur}
        // onFocus={props.onFocus}
        // onChangeText={props.onChangeText}
      />
    </Item>
  )
}

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.WHITE_DARKEN,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  icon: {
    color: Colors.GREY,
    marginLeft: -13,
    fontSize: 27
  },
  input: {
    color: Colors.GREY,
  }
})
