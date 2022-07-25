import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';


const Layout = () => {
    return (
        <div className='d-flex '>
            <div>
                <Sidebar />
            </div>
            <div className='mnj'>
                <Header />
                <Outlet />
            </div>

        </div>
    )
}

export default Layout