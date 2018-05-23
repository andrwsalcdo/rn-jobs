import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from '../redux/actions/authActions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.token !== prevProps.token) {
      this.onAuthComplete(this.props);
    }
  }
  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
