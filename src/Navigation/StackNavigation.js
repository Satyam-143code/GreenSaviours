import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartPage from '../Components/StartPage';
import Authenticate from '../Components/Authenticate';
import Signin from '../Components/Signin&Signup/Signin';
import Signup from '../Components/Signin&Signup/Signup';
import Container from '../Components/Container/Container';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => {
            null;
          },
        }}
        initialRouteName="StartPage">
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Authenticate" component={Authenticate} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Container" component={Container} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
