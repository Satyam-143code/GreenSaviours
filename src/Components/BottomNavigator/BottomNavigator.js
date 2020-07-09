import React, {Component} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Drives from '../Notification/Drives';

const HomeRoute = () => <Text>Music</Text>;

const DrivesRoute = () => <Drives />;

const RecentsRoute = () => <Text>Recents</Text>;

class BottomNavigator extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'home', title: 'Home', icon: 'home'},
      {key: 'drives', title: 'Drives', icon: 'car'},
      {key: 'recents', title: '', icon: ''},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    drives: DrivesRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={styles.bottomNavigation}
      />
    );
  }
}

export default BottomNavigator;

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
