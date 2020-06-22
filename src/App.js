import React from 'react';
import './App.css';
import LoginComponent from './components/login/Login'
import ErrorComponent from './components/error/Error'
import ProfessorComponent from './components/professor/ProfessorComponent';
import ProfessorListComponent from './components/professor/ProfessorComponent';
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
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/professor/:id" component={ProfessorComponent} />
              <Route exact path="/student/:id" component={StudentComponent} />
              <Route exact path="/student/:id/professors" component={ProfessorListComponent}/>
              <Route exact path="/student/:id/all/professors" component={ProfessorListComponent}/>
              <Route component={ErrorComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
