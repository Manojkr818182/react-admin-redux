import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { logout } from '../../actions/auth';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
        Swal.fire('Logged Out!', '', 'success');
        navigate('/')
    })
    return (
        <></>
    )
}

export default Logout;