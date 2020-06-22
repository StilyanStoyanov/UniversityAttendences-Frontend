import axios from "axios"

class ProfessorService {
    getProfessorById(id){
        return axios.get(`http://localhost:8081/professor/${id}`)
    }

    getProffesorsBySpecialtyId(specialtyId, semester){
        return axios.get(`http://localhost:8081/professor`, null, { params: {
            specialtyId,
            semester
          }})
    }
}

export default new ProfessorService()