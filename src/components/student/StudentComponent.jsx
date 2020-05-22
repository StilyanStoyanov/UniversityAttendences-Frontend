import React, {Component} from 'react';
import StudentService from '../../service/StudentService.js'
import Header from '../../components/header/Header.jsx'
import StudentInoformationComponent from './StudentInformationComponent.jsx'
import StudentHeader from './StudentHeader.js'

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
                <StudentHeader/>
                <StudentInoformationComponent student={this.state.student}/>
            </>
        )
    }

}

export default StudentComponent;