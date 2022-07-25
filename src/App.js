import './App.css';
import "react-pro-sidebar/dist/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { useSelector } from 'react-redux';
const Errorpage = React.lazy(() => import('./pages/error/Errorpage'));
const Layout = React.lazy(() => import('./components/layout/Layout'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Logout = React.lazy(() => import('./pages/logout/Logout'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const ForgetPassword = React.lazy(() => import('./pages/resetPassword/ForgetPassword'));

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
            <Route exact path='/' element={<Page1 />} />
            <Route exact path='/page2' element={<Page2 />} />
            <Route exact path='/page3' element={<Page3 />} />
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
