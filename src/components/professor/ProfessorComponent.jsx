import React, {Component} from 'react';
import ProfessorService from '../../service/ProfessorService.js'
import ProfessorMenu from './ProfessorMenu.jsx'

class ProfessorComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            professor: {}
        }
    }

    componentDidMount(){
        this.refreshProfessor();
    }

    refreshProfessor() {
        ProfessorService.getProfessorById(this.state.id)
        .then(response => 
                this.setState({
                    professor: response.data
                })
            )
        .catch(
            error => this.props.history.push({pathname: '/error', message: error.response.data.message})
            
        )
    } 
    
    render(){
        return(
            <>
                <ProfessorMenu professor={this.state.professor}/>
            </>
        )
    }
}

export default ProfessorComponent;