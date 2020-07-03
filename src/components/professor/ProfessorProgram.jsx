import React, {Component} from 'react';
import SpecialtyService from '../../service/SpecialtyService.js'
import ProfessorService from '../../service/ProfessorService.js'
import './ProfessorProgram.css'
import './ProfessorProgram.css'
import StudentService from '../../service/StudentService.js'

class ProfessorProgram extends Component {

    constructor(props){
    
        super(props)

        this.state = {
            program: [],
            specialties: [],
            groups: [],
            selectedSpecialty: '',
            selectedSemester: 0,
            selectedSubject: '',
            selectedGroup: ''
        }

        this.changeSelectedSemester = this.changeSelectedSemester.bind(this)
        this.changeSelectedSpecialty = this.changeSelectedSpecialty.bind(this)
        this.changeSelectedSubject = this.changeSelectedSubject.bind(this);
        this.changeSelectedGroup = this.changeSelectedGroup.bind(this);
        this.getProgram = this.getProgram.bind(this)
    }
    
    componentDidMount(){
        this.getSpecialties();
    }

    getSpecialties() {
        SpecialtyService.getAllSpecialties()
        .then(response => 
            {
                this.setState({
                    specialties: response.data
                })
            })
        .catch(
            error => console.log(error.response.message)
        )
    }

     changeSelectedSpecialty(e){
        
        // set default value to others dropdown lists when specialty is changed
        var list = document.getElementsByTagName("SELECT")
        for(var i=1; i< list.length; i++)
        {    
            list[i].value = "default";
        }

        this.setState({
            selectedSpecialty: e.target.value,
            groups: [],
            program: [],
            selectedSemester: 0,
            selectedSubject: '',
            selectedGroup: ''
        })
    }

    changeSelectedSemester(e){
        var list = document.getElementsByTagName("SELECT")
        for(var i=2; i< list.length; i++)
        {    
            list[i].value = "default";
        }
        this.setState({
            selectedSemester: e.target.value,
            groups: [],
            program: [],
            selectedSubject: '',
            selectedGroup: ''
        })
        this.getProgram(this.state.selectedSpecialty, e.target.value);
    }

    changeSelectedSubject(e){
        this.setState({
            selectedSubject: e.target.value,
            groups: [],
            selectedGroup: ''
        })

        var list = document.getElementsByTagName("SELECT")
        list[3].value = "default"

        this.getGroups(this.state.selectedSpecialty, this.state.selectedSemester)
    }

    changeSelectedGroup(e){
        console.log("I am here at the selected group method man")
        this.setState({
            selectedGroup: e.target.value
        })
    }


    getGroups(specialtyId, semester){
        StudentService.getGroups(specialtyId, semester)
        .then(response => 
            {
                this.setState({
                    groups: response.data
                })
            }
        )
        .catch(
            error => console.log(error.response.message)   
        )
    }

    getProgram(specialtyId, semester){
        ProfessorService.getProgram(this.props.professor.id, specialtyId, semester)
        .then(response => 
            this.setState({
                program: response.data
            })
        )
        .catch(
            error =>{
                this.setState({
                    program: []
                })
                console.log(error.response.message)
            } 
        )
    }

    render(){
        return(
            <>
                <div className="search-bar-program">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <label className="filter">Специалност</label>
                            <select className="form-control" onChange={this.changeSelectedSpecialty} defaultValue={'default'}>
                                <option value="default" disabled>Избери:</option>
                                {
                                    this.state.specialties.map(
                                        specialty => 
                                            <option key = {specialty.id} value={specialty.id}>{specialty.name}</option>
                                        )
                                }
                            </select>
                        </div>
                        <div className="col-2">
                            <label className="filter">Семестър</label>
                            <select className="form-control" onChange={this.changeSelectedSemester} defaultValue={'default'}>
                                <option value="default" disabled>Избери:</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label className="filter">Предмет</label>
                            <select className="form-control" onChange={this.changeSelectedSubject} defaultValue={'default'}>
                                <option value="default" disabled >Избери:</option>
                                {
                                    this.state.program.map(
                                        program => 
                                            <option key = {program.id} value={program.id}>{program.subjectName}</option>
                                        )
                                }
                            </select>
                        </div>
                        <div className="col-2">
                            <label className="filter">Група</label>
                            <select className="form-control" onChange={this.changeSelectedGroup} defaultValue={'default'}>
                                <option value="default" disabled>Избери:</option>
                                {
                                    this.state.groups.map(
                                        group => 
                                            <option key = {group} value={group}>{group}</option>
                                        )
                                }
                            </select>
                        </div>
                        <button id="button-addon1" type="submit" className="btn btn-link text-primary" onClick={this.getProgram}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </>
        )
    }

}

export default ProfessorProgram;