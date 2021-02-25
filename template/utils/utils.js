import React from 'react'

export const navigate = (props, screen, payload) => {
  console.log('props', props);
  return props.navigation.navigate(screen, payload)
}
