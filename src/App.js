import React from 'react';
import './App.css';
import LoginComponent from './components/login/Login'
import ErrorComponent from './components/error/Error'
import ProfessorComponent from './components/professor/ProfessorComponent';
import StudentComponent from './components/student/StudentComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/" component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/professor/:id" component={ProfessorComponent} />
              <Route path="/student/:id" component={StudentComponent} />
              <Route component={ErrorComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
