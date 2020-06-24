import React, {Component} from 'react';
import ProfessorService from '../../service/ProfessorService.js'
import equal from 'fast-deep-equal'
import tuSofiqImage from '../../pic/tu-sofia-card.jpg'
import professorImage from '../../pic/professorImage.jpg'
import './ProfessorListComponent.css'

class ProfessorListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            professors: []
        }
        this.getMyProfessors = this.getMyProfessors.bind(this);
        this.getAllProfessors = this.getAllProfessors.bind(this);
    }

    componentDidMount(){
        this.refreshProfessors();
    }

    componentDidUpdate(prevProps) {
        if(!equal(this.props.student, prevProps.student))        {
          this.refreshProfessors();
        }
      } 

    refreshProfessors() {
        if(this.props.student != null){
            this.getMyProfessors(this.props.student);
        }
        else{
            this.getAllProfessors();
        }
    }

    getMyProfessors(student){
        console.log("I will show you my professors")
        ProfessorService.getProffesorsBySpecialtyId(student.specialtyId, student.semester)
        .then(response => {
        console.log(response.data)
        this.setState(
            {
                professors: response.data
            }
        )
        })
        .catch(
        error => console.log(error.response)
        )
    }

    getAllProfessors(){
        console.log("I will show you all professors")
        ProfessorService.getAllProfessors()
        .then(response => {
        console.log(response.data)
        this.setState(
            {
                professors: response.data
            }
        )
        })
        .catch(
        error => console.log(error.response)
        )
    }

    render(){
        return (
            <>
            {
                <section>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            {
                                this.state.professors.map(
                                    professor =>                                    
                                    <div className="col-md-3 col-xs-1">
                                        <div className="card profile-card-3">
                                            <div className="background-block">
                                                <img src={tuSofiqImage} alt="backgraound-card" className="background"/>
                                            </div>
                                            <div className="profile-thumb-block">
                                                <img src={professorImage} alt="profile" className="profile"/>
                                            </div>
                                            <div className="card-content">
                                                <h2>{professor.fullName}<small>{professor.cabinet}</small></h2>
                                                <div className="icon-block">
                                                    <i className="fa fa-phone"></i>
                                                    <i className="fa fa-envelope"></i>
                                                    <p id="professorPhone">{professor.phoneNumber}</p>
                                                    <p id="professorMail">{professor.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section> 
            }
            </>
        )
    }

}

export default ProfessorListComponent;