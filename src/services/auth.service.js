import axios from "axios";
import API_URL from '../baseUrl/ApiUrl';

const login = async (username, password) => {
    return axios.post(API_URL + "admin/signIn", {
        email: username, password: password
    }).then((response) => {
        if (response.data.success === true) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem("user");
};
const AuthService = { login, logout }
export default AuthService;