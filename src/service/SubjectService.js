import axios from "axios"

class SubjectService {
    
    getSubjectById(id){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/subject/${id}`)
    }
}

export default new SubjectService()