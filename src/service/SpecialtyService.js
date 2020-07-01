import axios from "axios"

class SpecialtyService {

    getAllSpecialties(){
        return axios.get('http://localhost:8081/specialty/all')
    }
}

export default new SpecialtyService()