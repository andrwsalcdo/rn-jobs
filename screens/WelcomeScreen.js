import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: 'Welcome to JobApp'
  },
  {
    text: 'Use this to find the job you really want'
  },
  { text: 'Set your location, and swipe away' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} />
      </View>
    );
  }
}

export default WelcomeScreen;
