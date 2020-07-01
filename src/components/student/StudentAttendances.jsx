import React, {Component} from 'react';
import AttendanceService from '../../service/AttendanceService.js'
import './StudentAttendances.css'

class StudentAttendances extends Component {

    constructor(props){
        super(props)

        this.state = {
            attendances: [],
            selectedSemester: this.props.student.semester
        }
    
        this.showAttendances = this.showAttendances.bind(this);
    }
    
    componentDidMount(){
        this.refreshAttendances(this.props.student.semester);
    }

    refreshAttendances(semester) {
        AttendanceService.getStudentAttendances(this.props.student.id, semester)
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

    showAttendances(attendance) {
        let updatedList = this.state.attendances.map(obj => {
           if(obj.id === attendance.id) {
             return Object.assign({}, obj, {
                hidden:!attendance.hidden
             });
           }
           return obj;
        });
        this.setState({
          attendances : updatedList
        });
    }

    renderAttendances(attendance){

        const iconsMap = 
            { 
                "YES": "check",
                "NO": "circle-o"
            };
        
        return(
            <div className="row justify-content-md-center" id="expanded-row">
                {
                    Object.entries(attendance.attendances).map(
                    ([key, value]) => 
                        <div className="col-1" key={key}>
                            <p className="innerKey">У-{key}</p>
                            <p className="innerValue">  
                                <i className={`fa fa-${iconsMap[{value}.value]}`} aria-hidden="true"></i>
                            </p>
                        </div>
                    )
                }
            </div>
        )
    }

    changeSemester (value) {
        this.refreshAttendances(value)
        this.setState(
            {
                selectedSemester: value
            }
        )
    }

    createDropDownList(value) {
        let items = [];         
        for (let i = 1; i <= value; i++) {             
            items.push(<button 
                className="dropdown-item" 
                type="button" 
                value='asd' 
                key = {i} 
                onClick={this.changeSemester.bind(this, i)}>Семестър {i}</button>);   
        }
        return items;
    }
    
    render(){
        return(
            <>
            <div className="dropdown">
                <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenu2" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                Семестър {this.state.selectedSemester}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {this.createDropDownList(this.props.student.semester)}
                </div>
            </div>
            {
                this.state.attendances.map(
                    attendance => 
                    <div className = "attendances" key = {attendance.id}>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                {attendance.subjectName}
                            </div>
                            <div className="col-2">
                                Семестър: {attendance.semester}
                            </div>
                            <div className="col-3">
                                Необходим брой присъствия: {attendance.countOfAttendances.length}
                            </div>
                            <div className="col-3">
                                <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={() => this.showAttendances(attendance)}
                                >Провери присъствия</button>
                            </div>
                            {!attendance.hidden && this.renderAttendances(attendance)}
                        </div>
                    </div>
                )               
            }
            
            </>
        )
    }

}

export default StudentAttendances;