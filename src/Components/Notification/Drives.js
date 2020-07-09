import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import { StyleSheet, View, Text} from 'react-native';
import {Surface, Appbar} from 'react-native-paper';
class Drives extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <Appbar></Appbar>
         <Text style={styles.time}>
            12.00
          </Text>
        <Surface style={styles.surface}>
          <Text>
            Sunday drive..

          </Text>
        </Surface>
      </ScrollView>
    );
  }
}

export default Drives;

const styles = StyleSheet.create({
  scrollContsiner: {},
  surface: {
    padding: 20,
    height: '100%',
    width: '100%',
    elevation: 2,
  },
  time:{
    fontSize:10,
    padding:5,
    textAlign:"center"

  }
});
