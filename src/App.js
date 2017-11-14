import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from '../firebaseConfig';

class App extends Component {
  state = {
    loggedIn: null
  }
  componentWillMount(){
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user)
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={this.doLogout.bind(this)}>Log Out</Button>
            </CardSection>
          </Card>
        );

      default:
        return (
          <View  style={styles.btnStyle}>
              <Spinner size="large" />
              <Text style={{marginTop: 40}}>
                Please Wait...
              </Text>
          </View>
        )

    }
  }

  doLogout(){
    firebase.auth().signOut()
  }

  render(){
    return(
      <View>
        <Header title="AuthApp" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles={
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
}

export default App;
