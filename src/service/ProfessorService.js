import axios from "axios"

class ProfessorService {
    getProfessorById(id){
        return axios.get(`http://localhost:8081/professor/${id}`)
    }

    getProffesorsBySpecialtyId(specialtyId, semester){
        return axios.get(`http://localhost:8081/professor?specialtyId=${specialtyId}&semester=${semester}`)
    }

    getAllProfessors(specialtyId, semester){
        return axios.get('http://localhost:8081/professor/all')
    }
}

export default new ProfessorService()