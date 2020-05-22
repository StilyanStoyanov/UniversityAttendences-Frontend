import React, {Component} from 'react';
import './Header'
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render(){
        return(
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                             <li><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

export default withRouter(HeaderComponent);