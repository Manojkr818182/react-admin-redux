import { combineReducers } from "redux";
import  auth from './auth';

const AllReducers = combineReducers({
    auth: auth
});

export default AllReducers;
