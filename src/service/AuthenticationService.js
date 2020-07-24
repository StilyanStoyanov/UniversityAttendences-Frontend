import axios from "axios"

class AuthenticationService {

    logInRequest(loginRequest){
        return axios.post(`${process.env.REACT_APP_BACKEND_SERVICE}/login`, loginRequest)
    }
    
}

export default new AuthenticationService()