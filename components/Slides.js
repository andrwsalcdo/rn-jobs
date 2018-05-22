import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Animated } from 'react-native';
import { Button, Text } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {
  scrollX = new Animated.Value(0);

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

  renderProgressDots(position) {
    return this.props.data.map((_, i) => {
      let opacity = position.interpolate({
        inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
        outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
        extrapolate: 'clamp'
      });
      return <Animated.View key={i} style={[styles.dots, { opacity }]} />;
    });
  }

  render() {
    // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
    let position = Animated.divide(this.scrollX, SCREEN_WIDTH);
    return (
      <View style={styles.container}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } }
            ])}
            scrollEventThrottle={16}
          >
            {this.renderSlides()}
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.renderProgressDots(position)}
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
