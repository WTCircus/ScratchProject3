import React, { Fragment, Component } from 'react';
//import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import '@babel/polyfill';

// importing different pages for routing
import CompanyProfile from './src/layout/CompanyProfile';
import Home from './src/layout/Home';
import Login from './src/layout/Login';
import Register from './src/layout/Register';
import Settings from './src/layout/Settings';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }

// const persistedState = loadFromLocalStorage();
// console.log('This is persistedState   ', persistedState);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('In the App check    ', localStorage.companyListArray);
    this.state = {
      depthLevel: 1,
      companyListArray: localStorage.companyListArray.split(',')
        ? localStorage.companyListArray.split(',')
        : ['Initial Hard Code Company', 'Second fake', 'Third hardcode fake'],
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    console.log(
      'JSON stringify  this.state.companyListArray:   ',
      JSON.stringify(this.state.companyListArray)
    );
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              companyListArray={this.state.companyListArray}
              onSearchClick={this.onSearchClick}
            />
          )}
        />
        <Route exact path="/companyprofile" component={CompanyProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/settings" component={Settings} />
      </Router>
    );
  }

  onSearchClick(e) {
    e.preventDefault();
    console.log('This is e.target:  ', e.target.company.value);
    const output = this.state.companyListArray;
    if (output.includes(e.target.company.value)) {
      alert('Company has already been added.');
      return;
    }
    output.push(e.target.company.value);
    this.setState((state, props) => ({ companyListArray: output }));
    console.log('This change after setState:  ', this.state.companyListArray);
    localStorage.setItem('companyListArray', output);
    console.log('This is local storage:   ', localStorage.companyListArray);
  }

  // subscribe() {
  //   saveToLocalStorage(store.getState());
  // }
}

export default App;
