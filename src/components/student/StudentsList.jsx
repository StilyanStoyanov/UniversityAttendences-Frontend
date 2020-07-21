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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './StudentsList.css'

class StudentsList extends Component {

    constructor(props){
        super(props)
        this.state = {
           subjectInformation: {},
           studentsAttendances: [],
           loading: true,
           hasChanged: false,
           openDialog: false
        }

        this.renderRow = this.renderRow.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.openDialog = this.openDialog.bind(this)
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
            error => this.props.history.push({pathname: '/error', message: error.response.data.message})
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
                            studentId: student.id,
                            facultyNumber: student.facultyNumber,
                            name: student.fullName,
                            semester: response.data.semester,
                            attendanceId: response.data.id,
                            attendances: response.data.attendances
                        }
                        studentsAttednacesArray.push(record)
                    }
                )  
                .catch(
                    error => this.props.history.push({pathname: '/error', message: error.response.data.message})
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
            columns.push(<TableCell style={{fontSize: '14pt'}} key = {i}>Упр {i+1}</TableCell>);
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
                        <TableRow key={record.studentId}>
                            <TableCell style={{fontSize: '12pt'}} scope="row">{record.name}</TableCell>
                            <TableCell style={{fontSize: '12pt'}} >{record.facultyNumber}</TableCell>
                            {
                                Object.entries(record.attendances).map(
                                ([key, value]) => 
                                    <TableCell style={{fontSize: '12pt'}} align="left" key = {key}>
                                        <button className="change-attention-symbol-button" onClick={() => this.changeAttendanceValue(record.studentId, key)}>
                                            <i className={`fa fa-${iconsMap[{value}.value]}`} aria-hidden="true"></i>
                                        </button>
                                    </TableCell>  
                                )
                            }  
                        </TableRow>  
                    )
                }
                   
            </>
        )
    }

    changeAttendanceValue(id, key){
        var records = this.state.studentsAttendances
        records.forEach(
            (record) => {
                if(record.studentId === id){
                    var currentValue =  record.attendances[key]
                    var changedValue = currentValue === 'NO'? 'YES': 'NO'
                    record.attendances[key] = changedValue
                }
            }
        )
        
        this.setState({
            hasChanged: true
        })
    }

    saveChanges(){
        this.state.studentsAttendances.forEach(
            (attendance) => {
                var request = {
                    studentId: attendance.studentId,
                    attendanceId: attendance.attendanceId,
                    subjectId: this.props.subject,
                    semester: attendance.semester,
                    attendances: attendance.attendances
                }
                AttendanceService.updateAttendances(request)
                .catch(
                    error => this.props.history.push({pathname: '/error', message: error.response.data.message})
                )
            }
        )

        setTimeout(()=> alert("Промение са направени успешно!"),1000)

        this.setState({
            hasChanged: false,
            openDialog: false
        })
    }

    closeDialog(){
        this.setState({
            openDialog: false
        })
    }

    openDialog(){
        this.setState({
            openDialog: true
        })
    }

    render(){
        return(
            <>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="customized table">
                        <TableHead>
                            <TableRow >
                                <TableCell style={{fontSize: '14pt'}}>Студент</TableCell>
                                <TableCell style={{fontSize: '14pt'}}>Фак №</TableCell>
                                {this.renderColumns()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderRow()}
                        </TableBody>
                    </Table>
                </TableContainer>    
                {
                    this.state.hasChanged &&
                    <Button 
                        startIcon={<SaveIcon />}
                        style={{
                            marginTop: 5,
                            borderRadius: 20,
                            backgroundColor: "#2B7CD9",
                            color: "white",
                            fontSize: "14px"
                        }}
                        variant="contained" 
                        onClick={this.openDialog}>
                        Запази промените
                    </Button>

                }
                {
                    this.state.loading &&
                    <>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> 
                    </> 
                }
                <Dialog
                    open={this.state.openDialog}
                    onClose={this.closeDialog}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Потвърждавате ли направените промени?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Всички направени промени по присъствията на студентите, ще бъдат отразани в нашата база даннни.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.closeDialog} color="primary">
                        Отказвам
                    </Button>
                    <Button onClick={this.saveChanges} color="primary">
                        Потвърждавам
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }

}

export default StudentsList;

