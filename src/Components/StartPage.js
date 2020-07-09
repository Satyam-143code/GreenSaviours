import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text, View, StyleSheet, Image} from 'react-native';
import LottieView from 'lottie-react-native';

function StartPage({navigation}) {
  return (
    <Onboarding
      skipToPage={3}
      onDone={() => navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Authenticate',
          },
        ],
      })
    }
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.logoContainer}>
              <Image
                source={require('../Photos/GS-Logo.jpg')}
                style={styles.logo}
              />
            </View>
          ),

          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.container}>
              <LottieView
                style={styles.lottie}
                source={require('../Lottie/12831-plant-2.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: (
            <View>
              <Text style={styles.title}>Plantation</Text>
            </View>
          ),
          subtitle: (
            <View>
              <Text style={styles.para}>
                "A tree against the sky possesses the same interest, the same
                character, the same expression as the figure of a human."
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.container}>
              <LottieView
                style={styles.lottie}
                source={require('../Lottie/18576-woman-drawing-flower.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: (
            <View>
              <Text style={styles.title}>Observe</Text>
            </View>
          ),
          subtitle: (
            <View>
              <Text style={styles.para}>
                "By discovering nature, you discover yourself."
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.container}>
              <LottieView
                style={styles.lottie}
                source={require('../Lottie/7007-post-animation-landing-page.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: (
            <View>
              <Text style={styles.title}>Share</Text>
            </View>
          ),
          subtitle: (
            <View>
              <Text style={styles.para}>
                "Knowledge shared is knowledge squared."
              </Text>
            </View>
          ),
        },
      ]}
    />
  );
}

export default StartPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  logoContainer: {
    width: '100%',
    height: 250,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  lottie: {
    width: null,
    height: null,
  },
  title: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'GildaDisplay-Regular',
  },
  para: {
    margin: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'NotoSerif-Regular',
    textAlign: 'center',
  },
  subTitle: {
    marginLeft: 150,
    color: '#57f759',
    fontSize: 16,
  },
});
