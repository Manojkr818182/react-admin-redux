import './App.css';
import "react-pro-sidebar/dist/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Errorpage = React.lazy(() => import('./pages/error/Errorpage'));
const ForgetPassword = React.lazy(() => import('./pages/resetPassword/ForgetPassword'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Logout = React.lazy(() => import('./pages/logout/Logout'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const Layout = React.lazy(() => import('./components/layout/Layout'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Users = React.lazy(() => import('./pages/user/Users'));
const User = React.lazy(() => import('./pages/user/User'));
const SiteSetting = React.lazy(() =>import('./pages/settings/site_images/SiteSetting'));
const ApiKey  = React.lazy(() => import('./pages/settings/apiKey/ApiKey'));

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <Router>
      <Suspense fallback={<div className='d-flex justify-content-center '>
        <Spinner animation="border" variant="info" />
      </div>
      }>
        <Routes>
          <Route path="/" element={currentUser ? <Layout /> : <Login />}>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/users/user' element={<User />} />
            <Route exact path='/setting/siteSetting' element={<SiteSetting />} />
            <Route exact path='/setting/setApiKey' element={<ApiKey />} />
           
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route path='*' element={<Errorpage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forget' element={<ForgetPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
