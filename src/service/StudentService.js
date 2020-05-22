import axios from "axios"

class StudentService {
    
    getStudentById(id){
        return axios.get(`http://localhost:8081/student/${id}`)
    }
}

export default new StudentService()