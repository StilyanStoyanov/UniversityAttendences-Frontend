import axios from "axios"

class AuthenticationService {

    logInRequest(loginRequest){
        return axios.post("http://localhost:8081/login", loginRequest)
    }
    
}

export default new AuthenticationService()