import React, {Component} from 'react';
import StudentService from '../../service/StudentService.js'
import StudentHeader from './StudentHeader.jsx'
import StudentDetails from '../student/StudentDetails.jsx'
import StudentInoformationComponent from './StudentInformationComponent.jsx'


class StudentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    
    componentDidMount(){
        this.refreshStudents();
    }

    refreshStudents() {
        StudentService.getStudentById(this.state.id)
        .then(response => 
                this.setState({
                    student: response.data
                })
            )
        .catch(
            error => console.log(error.response.message)
        )
    }
    
    render(){
        return(
            <>
                <StudentHeader student={this.state.student}/>
                {/* <StudentDetails student={this.state.student}/>
                <StudentInoformationComponent student={this.state.student}/> */}
            </>
        )
    }

}

export default StudentComponent;