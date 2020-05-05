import React, {Component} from 'react';
import './Login.css'
import logo from '../../pic/TUlogo.png'


export default class Login extends Component{
    render(){
        return(
            <div className = "Login">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}

class LoginComponent extends Component{
    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                    <img id="TULogo" src={logo} alt='Logo of the Technical University'/>
                    <form>
                        <input type="text" id="login" placeholder="login"/>
                        <input type="text" id="password"  placeholder="password"/>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        )
    }
}
