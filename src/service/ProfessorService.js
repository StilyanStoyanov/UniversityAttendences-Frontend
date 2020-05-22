import axios from "axios"

class ProfessorService {
    getProfessorById(id){
        return axios.get(`http://localhost:8081/professor/${id}`)
    }
}

export default new ProfessorService()