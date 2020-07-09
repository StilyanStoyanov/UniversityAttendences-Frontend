import axios from "axios"

class AttendanceService {
    getStudentAttendances(studentId, semester){
        return axios.get(`http://localhost:8081/attendance?studentId=${studentId}&semester=${semester}`)
    }

    getStudentAttendancesBySubject(studentId, semester, subject){
        return axios.get(`http://localhost:8081/attendance/filter?studentId=${studentId}&semester=${semester}&subjectId=${subject}`)
    }

    updateAttendances(request){
        return axios.put('http://localhost:8081/attendance', request)
    }
}

export default new AttendanceService()