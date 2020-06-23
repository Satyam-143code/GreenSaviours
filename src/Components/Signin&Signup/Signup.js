import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
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
      fullName: '',
      email: '',
      username: '',
      newPassword: '',
      rePassword: '',
      fullNameLimits: false,
      emailLimits: false,
      newPasswordLimits: false,
      rePasswordLimits: false,
      isMount: false,
    };
  }

  onChangeFullName = text => {
    if (text.length < 5) {
      this.setState({fullNameLimits: true});
    } else {
      this.setState({
        fullName: text,
      });
      this.setState({fullNameLimits: false});
    }
  };

  onChangeEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({emailLimits: true});
    } else {
      this.setState({
        email: text,
      });
      this.setState({emailLimits: false});
    }
  };

  onChangeUsername = text => {
    this.setState({
      username: text,
    });
  };

  onChangeNewPassword = text => {
    let passw = /^[A-Za-z]\w{7,14}$/;
    if (text.match(passw)) {
      this.setState({newPasswordLimits: true});
    } else {
      this.setState({
        newPassword: text,
      });
      this.setState({newPasswordLimits: false});
    }
  };

  onChangeRePassword = text => {
    if(text!=this.state.newPassword){
      this.setState({rePasswordLimits: true});
    }else{
    this.setState({
      rePassword: text,
    });
    this.setState({rePasswordLimits: false});
  }
  };

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

  componentDidMount = () => {
    this.setState({
      isMount: true,
    });
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
              nativeID="fullName"
              style={styles.input}
              placeholder="Full Name"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeFullName}
            />
            {this.state.fullNameLimits === true ? (
              <Text style={styles.alertText}>Name can not be bla bla!!</Text>
            ) : null}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              nativeID="email"
              style={styles.input}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeEmail}
            />
            {this.state.emailLimits === true ? (
              <Text style={styles.alertText}>email can not be bla bla!!</Text>
            ) : null}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              nativeID="username"
              style={styles.input}
              placeholder="Username"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeUsername}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              nativeID="newPassword"
              style={styles.input}
              secureTextEntry={this.state.newpass}
              placeholder="Enter Password"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeNewPassword}
            />
            {this.state.newPasswordLimits === true ? (
              <Text style={styles.alertText}>Password should  be bla bla!!</Text>
            ) : null}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.newPass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              nativeID="rePassword"
              style={styles.input}
              secureTextEntry={this.state.repass}
              placeholder="Re-enter Password"
              autoCorrect={false}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              placeholderTextColor="rgba(0,0,0,0.5)"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeRePassword}
            />
            {this.state.rePasswordLimits === true ? (
              <Text style={styles.alertText}>Not matching to the password!!</Text>
            ) : null}
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
  alertText: {
    marginHorizontal: 20,
    paddingLeft: 15,
    color: 'red',
    fontSize:10,
    fontWeight:'100'
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
