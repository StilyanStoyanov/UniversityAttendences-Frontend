import React, {Component} from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default class ErrorComponent extends Component{
    render(){
        return(
            <>
                <ErrorOutlineIcon style={{color: '#FF0000', fontSize: "300px"}}></ErrorOutlineIcon>
                <h2>Ooops!</h2>	
                <h3>{this.props.location.message}</h3>
            </>
        )
    }
}