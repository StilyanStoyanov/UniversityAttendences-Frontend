import React, {Component} from 'react';
import SubjectService from '../../service/SubjectService.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AttendanceService from '../../service/AttendanceService.js'
// import './StudentsList.css'

class StudentsList extends Component {

    constructor(props){
        super(props)
        this.state = {
           subjectInformation: {},
           studentsAttendances: [],
           loading: true
        }

        this.renderRow = this.renderRow.bind(this)
    }

    componentDidMount(){
        this.refreshSubjectInformation();
        this.prepareStudentsAttendances(this.props.students)
    }

    refreshSubjectInformation(){
        SubjectService.getSubjectById(this.props.subject)
        .then(response => {
            this.setState(
                {
                    subjectInformation: response.data
                }
            )
        })
        .catch(
            error => console.log(error.response)
        )
    }
        
    prepareStudentsAttendances(students){
        let studentsAttednacesArray = []
        students.map( 
            student => 
                AttendanceService.getStudentAttendancesBySubject(student.id, student.semester, this.props.subject)
                .then(
                    response =>  {
                        const record = {
                            id: student.id,
                            facultyNumber: student.facultyNumber,
                            name: student.fullName,
                            attendances: response.data.attendances
                        }
                        studentsAttednacesArray.push(record)
                    }
                )  
                .catch(
                    error => console.log(error.response.message)
                )
        )
        setTimeout(() => {
            this.setState({
                studentsAttendances: studentsAttednacesArray,
                loading: false
            })
        }, 300);
    }

    renderColumns(){
        var columns = [];

        for (var i = 0; i < this.state.subjectInformation.exercises; i++) {
            columns.push(<TableCell key = {i}>Упр {i+1}</TableCell>);
        }

        return columns;
    }

    renderRow(){
        const iconsMap = 
            { 
                "YES": "check",
                "NO": "circle-o"
            };
       
        return(
            <>
                {
                    
                    this.state.studentsAttendances.map((record) =>
                        <TableRow key={record.id}>
                            <TableCell component="th" scope="row">{record.name}</TableCell>
                            <TableCell component="left">{record.facultyNumber}</TableCell>
                            {
                                Object.entries(record.attendances).map(
                                ([key, value]) => 
                                    <TableCell align="left" key = {key}>
                                        <i className={`fa fa-${iconsMap[{value}.value]}`} aria-hidden="true"></i>
                                    </TableCell>  
                                )
                            }  
                        </TableRow>  
                    )
                }
                   
            </>
        )
    }

    render(){
        return(
            <>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Студент</TableCell>
                                <TableCell >Фак №</TableCell>
                                {this.renderColumns()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderRow()}
                        </TableBody>
                    </Table>
                </TableContainer>    
                {
                    this.state.loading &&
                    <>
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div> 
                    </> 
                }
       
            </>
        )
    }

}

export default StudentsList;

