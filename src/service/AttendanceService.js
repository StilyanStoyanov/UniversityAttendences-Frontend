import axios from "axios"

class AttendanceService {
    getStudentAttendances(studentId, semester){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/attendance?studentId=${studentId}&semester=${semester}`)
    }

    getStudentAttendancesBySubject(studentId, semester, subject){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/attendance/filter?studentId=${studentId}&semester=${semester}&subjectId=${subject}`)
    }

    updateAttendances(request){
        return axios.put(`${process.env.REACT_APP_BACKEND_SERVICE}/attendance`, request)
    }
}

export default new AttendanceService()