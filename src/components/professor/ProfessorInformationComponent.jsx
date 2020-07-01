import React, {Component} from 'react';
import ProfessorProfileImage from '../../pic/professorImage.jpg'
import './ProfessorInformation.css'

class ProfessorInformationComponent extends Component {

    render(){
        return(
            <div className="container emp-profile">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h2>
                                {this.props.professor.fullName}
                            </h2>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-img">
                            <img src={ProfessorProfileImage} alt="Student profile"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Кабинет</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.professor.cabinet}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Телефон</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.professor.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>E-mail:</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.professor.email}</p>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default ProfessorInformationComponent;