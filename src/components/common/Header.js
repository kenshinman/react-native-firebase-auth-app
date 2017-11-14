import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    shadowColor: '#000',//ios
    shadowOffset: { width: 0, height: 2},//ios
    shadowOpacity: 0.2,//ios
    elevation: 2,
    position: 'relative'
  }
}

export {Header};
