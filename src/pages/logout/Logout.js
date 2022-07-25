import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/auth';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
        navigate('/')
    })
    return (
        <></>
    )
}

export default Logout;