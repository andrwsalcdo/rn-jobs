import React from 'react';
import { MainNavigator } from './config/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
