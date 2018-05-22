import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    )
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
