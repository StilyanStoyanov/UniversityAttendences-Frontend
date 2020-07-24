import axios from "axios"

class StudentService {
    
    getStudentById(id){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/student/${id}`)
    }

    getGroups(specialtyId, semester){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/student/group?specialtyId=${specialtyId}&semester=${semester}`)
    }

    getStudentsBySpecialtyGroupAndSemester(specialtyId, group, semester){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/student/all/filter?specialtyId=${specialtyId}&group=${group}&semester=${semester}`)
    }
}

export default new StudentService()