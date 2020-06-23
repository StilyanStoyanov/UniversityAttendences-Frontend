import React, {Component} from 'react';
import AttendanceService from '../../service/AttendanceService.js'

class StudentAttendances extends Component {

    constructor(props){
        super(props)

        this.state = {
            attendances: []
        }
    }

    
    componentDidMount(){
        this.refreshAttendances();
    }

    refreshAttendances() {
        AttendanceService.getStudentAttendances(this.props.student.id, this.props.student.semester)
        .then(response => 
            {
                this.setState({
                    attendances: response.data
                })
            })
        .catch(
            error => console.log(error.response.message)
        )
    }
    
    render(){
        return(
            <>
            {
                this.state.attendances.map(
                    attendance => 
                    <div className = "table-responsive col-md-12" key = {attendance.id}>
                        <table className = "table" >
                            <thead>
                                <tr>
                                    <th>Студент:</th>
                                        <td>{attendance.studentName}</td>
                                    <th >Предмет:</th>
                                        <td>{attendance.subjectName}</td>
                                    <th>Семестър:</th>
                                        <td>{attendance.semester}</td>
                                    <th>Присъствия:</th>
                                        <td>{attendance.countOfAttendances}</td>
                                </tr>
                            </thead>                
                        </table>
                    </div>
                )
            }
            </>
        )
    }

}

export default StudentAttendances;