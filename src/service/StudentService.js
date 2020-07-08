import axios from "axios"

class StudentService {
    
    getStudentById(id){
        return axios.get(`http://localhost:8081/student/${id}`)
    }

    getGroups(specialtyId, semester){
        return axios.get(`http://localhost:8081/student/group?specialtyId=${specialtyId}&semester=${semester}`)
    }

    getStudentsBySpecialtyGroupAndSemester(specialtyId, group, semester){
        return axios.get(`http://localhost:8081/student/all/filter?specialtyId=${specialtyId}&group=${group}&semester=${semester}`)
    }
}

export default new StudentService()