import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { isLoggedIn: true, user: user }
    : { isLoggedIn: false, user: null };

export default function mnj (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}