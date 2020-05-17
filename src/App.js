import React from 'react';
import './App.css';
import LoginComponent from './components/login/Login'
import ErrorComponent from './components/error/Error'
import Header from './components/header/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route component={ErrorComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
