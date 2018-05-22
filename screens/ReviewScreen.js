import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });
  render() {
    return (
      <View>
        <Text>This is the ReviewScreen</Text>
        <Text>This is the ReviewScreen</Text>
        <Text>This is the ReviewScreen</Text>
        <Text>This is the ReviewScreen</Text>
        <Text>This is the ReviewScreen</Text>
        <Text>This is the ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
