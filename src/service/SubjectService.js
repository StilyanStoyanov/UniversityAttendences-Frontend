import axios from "axios"

class SubjectService {
    
    getSubjectById(id){
        return axios.get(`http://localhost:8081/subject/${id}`)
    }
}

export default new SubjectService()