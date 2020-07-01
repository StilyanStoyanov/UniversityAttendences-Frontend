import React, {Component} from 'react';
import SpecialtyService from '../../service/SpecialtyService.js'
import './ProfessorProgram.css'


class ProfessorProgram extends Component {

    constructor(props){
        super(props)

        this.state = {
            program: [],
            specialties: []
        }
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
    
    render(){
        let specialtiesList = []
        this.state.specialties.map(specialty => specialtiesList.push(specialty.name))

        return(
            <>
                <div className="row justify-content-md-center">
                    <div className="col">
                        <label for="filter">Специалност</label>
                        <select className="form-control">
                            <option value="0" selected>All Snippets</option>
                            <option value="1">Featured</option>
                            <option value="2">Most popular</option>
                            <option value="3">Top rated</option>
                            <option value="4">Most commented</option>
                        </select>
                    </div>
                    <div className="col">
                        <label for="filter">Семестър</label>
                        <select className="form-control">
                            <option value="0" selected>All Snippets</option>
                            <option value="1">Featured</option>
                            <option value="2">Most popular</option>
                            <option value="3">Top rated</option>
                            <option value="4">Most commented</option>
                        </select>
                    </div>
                    <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                </div>
            </>
        )
    }

}

export default ProfessorProgram;