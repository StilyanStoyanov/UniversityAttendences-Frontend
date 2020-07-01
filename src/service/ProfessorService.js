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

    getProgram(id, specialtyId, semester){
        return axios.get(`http://localhost:8081/professor/program/${id}?specialtyId=${specialtyId}&semester=${semester}`)
    }
}

export default new ProfessorService()