import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Animated } from 'react-native';
import { Button, Text } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {
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

  renderProgressDots() {
    return this.props.data.map((_, i) => {
      return <Animated.View key={i} style={[styles.dots]} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {this.renderSlides()}
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.renderProgressDots()}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  },
  dots: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    margin: 8,
    borderRadius: 5
  }
};

export default Slides;
