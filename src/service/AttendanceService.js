import axios from "axios"

class AttendanceService {
    getStudentAttendances(studentId, semester){
        console.log("Student id: " + studentId)
        console.log("Student semester: " + semester)
        return axios.get(`http://localhost:8081/attendance?studentId=${studentId}&semester=${semester}`)
    }
}

export default new AttendanceService()