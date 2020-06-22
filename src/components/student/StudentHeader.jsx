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

class StudentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : "information"
    }
    this.executeTabs = this.executeTabs.bind(this);
    this.func1 = this.func1.bind(this);
    this.func2 = this.func2.bind(this);
    this.func3 = this.func3.bind(this);
    this.func4 = this.func4.bind(this);
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
                    <Button  variant="outlined" color="inherit" size="small">
                      Моето УИСС
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button  variant="outlined" color="inherit" size="small">
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
                <Tab textColor="inherit" label="Информация" value={"information"}></Tab>/>
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
    console.log("I am inside:" + tab)
    switch(tab) {
      case "information":
        console.log("Case 1:" + this.props.student.id)
        return this.func1(this.props.student.id);
      case "attendances":
        console.log("Case 2:" + tab)
        return this.func2();
  
      case "myProfessors":
        console.log("Case 3:" + tab)
        return this.func3();
       
      case "allProfessors":
        console.log("Case 4:" + tab)
        return this.func4(); 
      default:
        console.log("Default:" + tab)
    }
  }

  func1 (studentId) {
    console.log("Called 1");
    return (
      <div>
        <h1>I am at the first function</h1>
      </div>
    )
    // this.props.history.push(`/student/${studentId}/professors`)
  }
  
  func2 () {
    console.log("Called 2");
    return (
      <div>
        <h1>I am at the second function</h1>
      </div>
    )
  }
  
  func3 () {
    console.log("Called 3");
    return (
      <div>
        <h1>I am at the third function</h1>
      </div>
    )
  }
  
  func4 () {
    console.log("Called 4");
    return (
      <div>
        <h1>I am at the fourth function</h1>
      </div>
    )
  }
  
}

// export default StudentHeader;
export default withRouter(StudentHeader);
