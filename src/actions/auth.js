import { LOGIN_SUCCESS, LOGOUT } from "./types";
import AuthService from '../services/auth.service';
import authHeader from "../services/authHeader";

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            if (data.success === false) {
                return Promise.resolve(data);
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve(data);
        },
        (error) => {
            console.log(error);
        }
    );
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};