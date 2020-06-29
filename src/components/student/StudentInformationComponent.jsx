import React, {Component} from 'react';
import StudentProfileImage from '../../pic/studentImg.png'
import './StudentInformation.css'

class StudentInformationComponent extends Component {

    render(){
        return(
            <div className="container emp-profile">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h2>
                                {this.props.student.fullName}
                            </h2>
                            <h4>
                                {this.props.student.facultyNumber}
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-img">
                            <img src={StudentProfileImage} alt="Student profile"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <label>E-mail:</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>ЕГН</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.egn}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Специалност</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.specialtyName}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Поток</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.stream}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Група</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.studentGroup}</p>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-md-6">
                            <label>Семестър</label>
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.student.semester}</p>
                        </div>
                    </div> 
                </div>
            </div>    
        )
    }
}

export default StudentInformationComponent;