import axios from "axios"

class ProfessorService {
    getProfessorById(id){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/professor/${id}`)
    }

    getProffesorsBySpecialtyId(specialtyId, semester){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/professor?specialtyId=${specialtyId}&semester=${semester}`)
    }

    getAllProfessors(){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/professor/all`)
    }

    getProgram(id, specialtyId, semester){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/professor/${id}/program?specialtyId=${specialtyId}&semester=${semester}`)
    }
}

export default new ProfessorService()