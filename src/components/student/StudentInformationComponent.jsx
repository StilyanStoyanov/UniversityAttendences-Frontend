import React, {Component} from 'react';

class StudentInformationComponent extends Component {

    render(){
        return(
            <div className="row">
                <div className = "table-responsive col-md-6">
                    <table className = "table">
                        <thead>
                            <tr>
                            <th>Име:</th>
                                <td>{this.props.student.fullName}</td>
                            </tr>
                            <tr>
                            <th >Специалност:</th>
                                <td>{this.props.student.specialtyName}</td>
                            </tr>
                            <tr>
                            <th>Факултет:</th>
                                <td>{this.props.student.facultyNumber}</td>
                            </tr>
                            <tr>
                            <th>ЕГН:</th>
                                <td>{this.props.student.egn}</td>
                            </tr>
                        </thead>                
                    </table>
                </div>
                <div className = "table-responsive col-md-6">         
                    <table className = "table">
                        <thead>
                            <tr>
                            <th>e-mail:</th>
                                <td>{this.props.student.email}</td>
                            </tr>
                            <tr>
                            <th>Поток:</th>
                                <td>{this.props.student.stream}</td>
                            </tr>
                            <tr>
                            <th>Група:</th>
                                <td>{this.props.student.studentGroup}</td>
                            </tr>
                            <tr>
                            <th>Семестър:</th>
                                <td>{this.props.student.semester}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>    
        )
    }
}

export default StudentInformationComponent;