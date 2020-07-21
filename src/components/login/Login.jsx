import React, {Component} from 'react';
import './Login.css'
import logo from '../../pic/TUlogo.png'
import {Formik, Form, Field, ErrorMessage} from "formik"
import AuthenticationService from '../../service/AuthenticationService.js'

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            exception: ''
        }

        this.logUser = this.logUser.bind(this)
        this.validate = this.validate.bind(this)

    }

    render(){

        let {username, password} = this.state;

        return(
                       
            <div className="wrapper">
                <div id="formContent">
                    <img id="TULogo" src={logo} alt='Logo of the Technical University'/>
                    <Formik
                        initialValues = {{username, password}}
                        onSubmit = {this.logUser}
                        enableReinitialize={true}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name = "username" component = "div"
                                        className = "alert alert-primary"></ErrorMessage>
                                    <ErrorMessage name = "password" component = "div"
                                        className = "alert alert-primary"></ErrorMessage>
                                    {
                                        this.state.exception &&  
                                        <div className = "alert alert-danger"> {this.state.exception}</div>
                                    }
                                    <fieldset>
                                        <Field type="text" name ="username" placeholder="login"></Field>
                                    </fieldset>
                                    <fieldset>
                                        <Field type="password" name ="password" placeholder="password"></Field>
                                    </fieldset>
                                    <input type="submit" value = "Log in"/>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

    logUser(values){
        AuthenticationService.logInRequest(
            {
                username: values.username,
                password: values.password
            }
        )
        .then(response => 
            {
                let userId = response.data.id
                localStorage.setItem("authorization", response.data.token);

                setTimeout(() => {
                    if(response.data.role === "STUDENT"){
                        this.props.history.push(`/student/${userId}`)
                    }
                    else {
                        this.props.history.push(`/professor/${userId}`)
                    }
                }, 1000);

            }
        )
        .catch(error => {
                this.setState(
                    {
                        exception: error.response.data.message
                    }
                )
            }
        )
    }

    validate(values){
        let errors = {}
    
        if(!values.username){
            errors.username = "Enter a username"
        }
        if(!values.password){
            errors.password = "Enter a password"
        }

        return errors
    }
}

export default LoginComponent