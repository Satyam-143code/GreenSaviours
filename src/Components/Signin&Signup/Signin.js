import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import username from '../../Photos/username.png';
import eyeImg from '../../Photos/eye_black.png';
import password from '../../Photos/password.png';
import G from '../../Photos/G.png';
import f from '../../Photos/f.png';
import twitter from '../../Photos/twitter.png';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowPass: true,
      press: false,
    };
    this.ShowPass = this.ShowPass.bind(this);
  }

  ShowPass = e => {
    {
      this.state.press === false
        ? this.setState({
            ShowPass: false,
            press: true,
          })
        : this.setState({
            ShowPass: true,
            press: false,
          });
    }
  };

  pushSignup = () => {
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainText}>
          <Text style={styles.headerText}>Signin</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Image source={username} style={styles.inlineImg} />
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
            <Image source={password} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={this.state.ShowPass}
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.ShowPass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Button
              mode="outlined"
              onPress={() => console.log('Pressed')}
              style={styles.button}
              color="white">
              Signin
            </Button>
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.text1} onPress={this.pushSignup}>
              Create Account
            </Text>
            <Text style={styles.text2}>Forgot Password?</Text>
          </View>
          <View style={styles.horiLine} />
          <View style={styles.subcontainer}>
            <Text style={styles.text}>You can also login</Text>
          </View>
          <View style={styles.socialAction}>
            <TouchableOpacity style={styles.containIcon}>
              <Image source={G} style={styles.Icong} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containIcon}>
              <Image source={f} style={styles.Iconf} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containIcon}>
              <Image source={twitter} style={styles.Icont} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Signin;

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

  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
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
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#000',
    top: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: '#57bcff',
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
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
  socialAction: {
    top: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containIcon: {
    margin: 40,
  },
  Icong: {
    width: 30,
    height: 30,
  },
  Iconf: {
    width: 30,
    height: 45,
  },
  Icont: {
    width: 30,
    height: 30,
  },
  horiLine: {
    top: 130,
    backgroundColor: '#000',
    borderWidth: 0.5,
    marginHorizontal: 30,
  },
});
