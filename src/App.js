import React from 'react';
import './App.css';
import LoginComponent from './components/login/Login'
import NotFoundComponent from './components/error/NotFoundComponent'
import ProfessorComponent from './components/professor/ProfessorComponent';
import ProfessorListComponent from './components/professor/ProfessorComponent';
import StudentComponent from './components/student/StudentComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import interceptors from "../src/auth/Interecptor.js";
import 'bootstrap/dist/css/bootstrap.css';
import ErrorComponent from './components/error/ErrorComponent';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/" component={LoginComponent} />
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/professor/:id" component={ProfessorComponent} />
              <Route exact path="/student/:id" component={StudentComponent} />
              <Route exact path="/student/:id/professors" component={ProfessorListComponent}/>
              <Route exact path="/student/:id/all/professors" component={ProfessorListComponent}/>
              <Route exact path="/error" component={ErrorComponent}/>
              <Route component={NotFoundComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
