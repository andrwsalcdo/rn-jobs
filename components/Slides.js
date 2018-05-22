import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Button, Text } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          rounded
          success
          large
          style={styles.button}
          onPress={this.props.onComplete}
        >
          <Text>Onwards!</Text>
        </Button>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, idx) => (
      <View key={slide.text} style={styles.slide}>
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(idx)}
      </View>
    ));
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  button: {
    alignSelf: 'center',
    marginTop: 15
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    textAlign: 'center'
  }
};

export default Slides;
