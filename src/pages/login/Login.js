import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import img_logo from '../../images/xyz.png';
import './login.css';
import { login } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginNow = () => {
        setLoading(true);
        dispatch(login(userName, password)).then((data) => {
            if (data.success === true) {
                setLoading(false);
                Swal.fire('LoggedIn !', '', 'success');
            } else {
                setIsError(true);
                setLoading(false);
                Swal.fire('Failed to Login !', '', 'error');
            }
        })

    }
    return (
        <div className="wrapper">
            <div className="logo">
                <img src={img_logo} alt="" />
            </div>
            <div className="text-center mt-4 name">
                Login
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text"
                        placeholder="Username"
                        name="userName"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isError &&
                    <div className='d-flex justify-content-center'>
                        <h6 className='text-danger'>Invalid Credentials !</h6>
                    </div>
                }
                <Button variant="outline-primary" onClick={loginNow}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm text-warning"></span>
                    )}
                    Login
                </Button>
            </form>
            <div className="text-center fs-6">
                <NavLink to='/forget' className="mylink">Forget password?</NavLink> or &nbsp;
                <NavLink to='/signup' className="mylink">Sign up</NavLink>
            </div>
        </div>
    )
}

export default Login;