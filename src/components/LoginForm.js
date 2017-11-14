import React, { Component } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Spinner } from './common';
import Input from './Input';

class LoginForm extends Component{
  state = {
    email: '',
    password: '',
    secureText: true,
    loading: null,
    error: ''
  }

  onButtonPress(){
    const {email, password} = this.state;
    this.setState({error: '', loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Your email/ password combination is wrong.', loading: null});
          })
      })
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size={'small'}/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
    )
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label={"Email"}
            email={this.state.email}
            onChangeText={ email => this.setState({email})}
            placeholder={"example@email.com"}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={this.state.secureText}
            label={"Password"}
            email={this.state.password}
            onChangeText={ password => this.setState({password})}
            placeholder={"password"}
          />
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => { this.setState({secureText: !this.state.secureText})}}
          >
            <Text>Show</Text>
          </TouchableOpacity>
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  errorStyle : {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
}

export default LoginForm;
