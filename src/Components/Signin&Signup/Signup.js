import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
import eyeImg from '../../Photos/eye_black.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpass: true,
      repass: true,
      newPress: false,
      rePress: false,
    };
  }

  newPass = () => {
    {
      this.state.newPress === false
        ? this.setState({
            newpass: false,
            newPress: true,
          })
        : this.setState({
            newpass: true,
            newPress: false,
          });
    }
  };

  rePass = () => {
    {
      this.state.rePress === false
        ? this.setState({
            repass: false,
            rePress: true,
          })
        : this.setState({
            repass: true,
            rePress: false,
          });
    }
  };

  pushSignin = () => {
    this.props.navigation.navigate('Signin');
  };

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
              placeholder="Full Name"
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
              placeholder="Email"
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
              placeholder="Username"
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
              secureTextEntry={this.state.newpass}
              placeholder="Enter Password"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.newPass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.repass}
              placeholder="Re-enter Password"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.rePass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Button
            mode="outlined"
            onPress={() => console.log('Pressed')}
            style={styles.button}
            color="white">
            Signup
          </Button>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Already have an Account? </Text>
          <Text style={styles.text1} onPress={this.pushSignin}>
            Signin
          </Text>
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
    paddingLeft: 15,
    borderRadius: 20,
    color: '#000',
  },
  inputWrapper: {
    marginTop: 25,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  subcontainer: {
    top: 30,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#000',
  },
  text1: {
    color: 'blue',
    fontWeight: 'bold',
  },
  button: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    color: 'blue',
    backgroundColor: '#000',
  },
});
