import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import imgLogo from '../../pic/tuLogo3.png'
import { withRouter } from "react-router-dom";
import StudentInoformationComponent from './StudentInformationComponent.jsx'
import StudentAttenndancesComponent from './StudentAttendances.jsx'
import ProfessorsListComponent from '../professor/ProfessorListComponent.jsx'

class StudentMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : "information",
    }
    this.executeTabs = this.executeTabs.bind(this);
    this.studentInformation = this.studentInformation.bind(this);
    this.studentAttendances = this.studentAttendances.bind(this);
    this.myProfessors = this.myProfessors.bind(this);
    this.allProfessors = this.allProfessors.bind(this);
  }

  componentDidCatch(){
    this.handleChange()
  }

  handleChange = (event, value) => {
    this.setState(
      {
        tab: value
      }
    )
  };

  render(){
      return (
          <>
            <AppBar style={{backgroundColor: '#2B7CD9'}} position="sticky" elevation={12}>
              <Toolbar>
                <img src = {imgLogo} alt = "logo" />
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs />
                  <Grid item>
                    <Tooltip title="Изход" href="/login">
                      <IconButton color="inherit" size = 'medium'>
                        <DirectionsRunIcon/>
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <AppBar
              component="div"
              style={{backgroundColor: '#2B7CD9'}}
              position="static"
              elevation={0}
            >
              <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs>
                    <Typography color="inherit" variant="h5" component="h1">
                      Университетска система за проверка на присъствия
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button href="https://student.tu-sofia.bg/" target="_blank" variant="outlined" color="inherit" size="small">
                      Моето УИСС
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href="https://tu-sofia.bg/" target="_blank" variant="outlined" color="inherit" size="small">
                      ТУ-София
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <AppBar
              component="div"
              style={{backgroundColor: '#2B7CD9'}}
              position="static"
              elevation={0}
            >
              <Tabs textColor="inherit" onChange={this.handleChange} value={this.state.tab}>
                <Tab textColor="inherit" label="Информация" value={"information"}/>
                <Tab textColor="inherit" label="Присъствия" value={"attendances"}/>
                <Tab textColor="inherit" label="Моите преподаватели" value={"myProfessors"} />
                <Tab textColor="inherit" label="Всички преподаватели" value={"allProfessors"}/>
              </Tabs>
            </AppBar>
            {
              this.executeTabs(this.state.tab)
            }
          </>
        );     
  }

  executeTabs(tab) {
    switch(tab) {
      case "information":
        return this.studentInformation(this.props.student);

      case "attendances":
        return this.studentAttendances(this.props.student);

      case "myProfessors":
        return this.myProfessors(this.props.student);

      case "allProfessors":
        return this.allProfessors(); 

      default:
        console.log("Default:" + tab)
    }
  }

  studentInformation (student) {
    return (
      <div>
        <StudentInoformationComponent student={student}/>
      </div>
    )
  }
  
  studentAttendances (student) {
    return (
      <div>
        <StudentAttenndancesComponent student={student}/>
      </div>
    )
  }
  
  myProfessors (student) {
    return (
      <ProfessorsListComponent student = {student}/>
    )
  }
  
  allProfessors () {
    return (
      <ProfessorsListComponent/>
    )
  }
  
}


// export default StudentMenu;
export default withRouter(StudentMenu);
