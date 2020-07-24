import axios from "axios"

class SpecialtyService {

    getAllSpecialties(){
        return axios.get(`${process.env.REACT_APP_BACKEND_SERVICE}/specialty/all`)
    }
}

export default new SpecialtyService()