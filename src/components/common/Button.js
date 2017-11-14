import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({children, onPress, disabledBtn}) =>{
  const { buttonWrapStyle, buttonTextStyle } = styles;
  return(
    <TouchableOpacity style={buttonWrapStyle} onPress={onPress} disabled={disabledBtn}>
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonWrapStyle:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth:1,
    borderRadius: 5,
    borderColor: '#3d3d3d'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#3d3d3d',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export {Button};
