import React, {Component} from 'react';
import {View, Text,StyleSheet,Dimensions,TextInput} from 'react-native';
import { Button } from "react-native-paper";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainText}>
          <Text style={styles.headerText}>Signup</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placholderStyle={styles.placeholder}
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placholderStyle={styles.placeholder}
              secureTextEntry={this.state.ShowPass}
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
            />
            </View>
        </View>
       
        <View style={styles.socialAction}>

        </View>
      </View>
    );
  }
}

export default Signup;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 26,
      fontFamily: 'Ubuntu-Bold',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: DEVICE_WIDTH - 40,
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: '#000',
    },
    inputWrapper: {
      marginTop: 25,
    },
  
  });
  