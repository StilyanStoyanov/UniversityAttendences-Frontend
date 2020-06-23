import React, {Component} from 'react';
import ProfessorService from '../../service/ProfessorService.js'
import equal from 'fast-deep-equal'
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
                    <div classNameName="container">
                        <div classNameName="row">
                            {
                                this.state.professors.map(
                                    professor => 
                                    <>
                                        <div className="col-sm-3 d-flex">
                                            <div className="card profile-card-3">
                                                <div className="background-block">
                                                    <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" className="background"/>
                                                </div>
                                                <div className="profile-thumb-block">
                                                    <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" className="profile"/>
                                                </div>
                                                <div className="card-content">
                                                <h2>{professor.fullName}<small>{professor.cabinet}</small></h2>
                                                <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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