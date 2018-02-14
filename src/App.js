import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD1hRCNjrdudKH9x-LYD1JqzY10RWzJfIk',
      authDomain: 'manager-a0ad2.firebaseapp.com',
      databaseURL:'https://manager-a0ad2.firebaseio.com',
      projectId: 'manager-a0ad2',
      storageBucket: 'manager-a0ad2.appspot.com',
      messagingSenderId: '773792400023'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
