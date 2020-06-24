import React, {Component} from 'react';
import StudentProfileImage from '../../pic/studentImg.png'
import './StudentInformation.css'

class StudentInformationComponent extends Component {

    render(){
        return(
            <div class="container emp-profile">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h2>
                                {this.props.student.fullName}
                            </h2>
                            <h4>
                                {this.props.student.facultyNumber}
                            </h4>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-img">
                            <img src={StudentProfileImage} alt="Student profile"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="profile-tab">
                    <div class="row">
                        <div class="col-md-6">
                            <label>E-mail:</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.email}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>ЕГН</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.egn}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Специалност</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.specialtyName}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Поток</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.stream}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Група</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.studentGroup}</p>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-md-6">
                            <label>Семестър</label>
                        </div>
                        <div class="col-md-6">
                            <p>{this.props.student.semester}</p>
                        </div>
                    </div> 
                </div>
            </div>    
        )
    }
    
    // render(){
    //     return(
    //         <div className="row">
    //             <div className = "table-responsive col-md-6">
    //                 <table className = "table">
    //                     <thead>
    //                         <tr>
    //                         <th>Име:</th>
    //                             <td>{this.props.student.fullName}</td>
    //                         </tr>
    //                         <tr>
    //                         <th >Специалност:</th>
    //                             <td>{this.props.student.specialtyName}</td>
    //                         </tr>
    //                         <tr>
    //                         <th>Факултет:</th>
    //                             <td>{this.props.student.facultyNumber}</td>
    //                         </tr>
    //                         <tr>
    //                         <th>ЕГН:</th>
    //                             <td>{this.props.student.egn}</td>
    //                         </tr>
    //                     </thead>                
    //                 </table>
    //             </div>
    //             <div className = "table-responsive col-md-6">         
    //                 <table className = "table">
    //                     <thead>
    //                         <tr>
    //                         <th>e-mail:</th>
    //                             <td>{this.props.student.email}</td>
    //                         </tr>
    //                         <tr>
    //                         <th>Поток:</th>
    //                             <td>{this.props.student.stream}</td>
    //                         </tr>
    //                         <tr>
    //                         <th>Група:</th>
    //                             <td>{this.props.student.studentGroup}</td>
    //                         </tr>
    //                         <tr>
    //                         <th>Семестър:</th>
    //                             <td>{this.props.student.semester}</td>
    //                         </tr>
    //                     </thead>
    //                 </table>
    //             </div>
    //         </div>    
    //     )
    // }
}

export default StudentInformationComponent;