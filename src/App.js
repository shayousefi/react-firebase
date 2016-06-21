import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index.js';
import SignIn from './components/SignIn.js';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <SignIn />
          <h1 style={{color: 'blue'}}>
            Hello World
          </h1>
        </div>
      </Provider>
    );
  }
}

export default App;