import React, { Component } from 'react';
import {Text, View, TextInput } from 'react-native';
import {Card, CardSection} from './common';

class Input extends Component{

  render(){

    const {textInputStyle, inputLabelStyle, container} = styles;
    return(
      <View style={container}>
        <Text style={inputLabelStyle}>{this.props.label}: </Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          style={textInputStyle}
          value={this.props.email}
          onChangeText={this.props.onChangeText}
        />
      </View>
    )
  }
}


const styles = {
  inputLabelStyle:{
    fontSize: 14
  },
  textInputStyle : {
    fontSize: 18
  },
  container: {
    flex: 1,
    // flexDirection: 'row'
  }
}

export default Input;
