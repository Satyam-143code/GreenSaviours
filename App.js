
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {View, Text} from 'react-native';
import Container from './src/Components/Container/Container';

const App: () => React$Node = () => {
  return (
    <>
      <StackNavigation />
      {/* <Container/> */}
    </>
  );
};

export default App;
