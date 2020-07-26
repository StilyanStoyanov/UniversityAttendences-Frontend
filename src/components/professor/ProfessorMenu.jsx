import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import imgLogo from '../../pic/tuLogo3.png'
import { withRouter } from "react-router-dom";
import ProfessorInoformationComponent from './ProfessorInformationComponent.jsx'
import ProfessorProgram from './ProfessorProgram.jsx'
import './ProfessorMenu.css'

class ProfessorMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : "information",
    }
    this.executeTabs = this.executeTabs.bind(this);
    this.professorInformation = this.professorInformation.bind(this);
    this.getProfessorProgram = this.getProfessorProgram.bind(this);
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

      let theme = createMuiTheme();
      theme = responsiveFontSizes(theme);

      return (
          <>
            <AppBar style={{backgroundColor: '#2B7CD9'}} position="sticky" elevation={4}>
              <Toolbar>
                <img className="tuLogoImg" src = {imgLogo} alt = "logo" />
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs />
                  <Grid item>
                    <Tooltip title="Изход" href="/login">
                      <IconButton style={{color: "#08349c"}} onClick={() => localStorage.removeItem("authorization")} size = 'medium'>
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
                    <ThemeProvider theme={theme}>
                      <Typography style={{color: "white",  fontWeight: "normal"}} variant="h5" component="h1">
                        Университетска портал за вписане на присъствия
                      </Typography>
                    </ThemeProvider>
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
              <Tabs TabIndicatorProps={{style: {background:'#08349c'}}} variant="scrollable" scrollButtons="auto" textColor="inherit" onChange={this.handleChange} value={this.state.tab}>
                <Tab textColor="inherit" label="Информация" value={"information"}/>
                <Tab textColor="inherit" label="Програма" value={"program"}/>
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
        return this.professorInformation(this.props.professor);

      case "program":
        return this.getProfessorProgram(this.props.professor);

      default:
        console.log("Default:" + tab)
    }
  }

  professorInformation (professor) {
    return (
      <div>
        <ProfessorInoformationComponent professor={professor}/>
      </div>
    )
  }
  
  getProfessorProgram (professor) {
    return (
      <div>
        <ProfessorProgram professor={professor}/>
      </div>
    )
  }

}

export default withRouter(ProfessorMenu);
