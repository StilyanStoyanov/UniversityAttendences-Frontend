import React, {Component} from 'react';
import AttendanceService from '../../service/AttendanceService.js'
import './StudentAttendances.css'

class StudentAttendances extends Component {

    constructor(props){
        super(props)

        this.state = {
            attendances: []
        }
    
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(attendance) {
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
    
    render(){
        return(
            <>
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
                                onClick={() => this.handleClick(attendance)}
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