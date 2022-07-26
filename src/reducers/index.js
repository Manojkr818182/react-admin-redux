import { combineReducers } from "redux";
import  auth from './auth';
import toggleSidebar from './toggleSidebar';

const AllReducers = combineReducers({
    auth: auth,
    toggleSidebar:toggleSidebar,
});

export default AllReducers;
