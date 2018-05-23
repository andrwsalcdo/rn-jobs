import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';
import _ from 'lodash';

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
  state = {
    token: null
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
      </View>
    );
  }
}

export default WelcomeScreen;
