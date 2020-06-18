import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';
import GS from '../Photos/GS-Logo.jpg'

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
            <Image source={GS} style={styles.logo}/>
            <View style={styles.buttonActions}>
            <View style={styles.buttonView}>
              <Button
                mode="outlined"
                onPress={() => this.props.navigation.push('Signin')}
                style={styles.button}
                color="white"
                >
                Signin
              </Button>
            </View>
            <View style={styles.buttonView}>
              <Button
                mode="outlined"
                onPress={() => console.log('Pressed')}
                style={styles.button}
                color="white"

               >
                Signup
              </Button>
            </View>
          </View>
        <View style={styles.formContainer}>
          
        </View>
      </View>
    );
  }
}

export default Authenticate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
      width:'100%',
      height:180,
  },
  buttonActions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 250,
    height: 60,
  },
  button: {
    marginTop:20,
    borderRadius: 15,
    backgroundColor:'#5c9630',
  },
});
