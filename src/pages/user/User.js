import React from 'react'
import { Breadcrumb, Button, Card } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'
import { FaBell, FaPaperPlane, FaBan } from 'react-icons/fa';

const User = () => {
    const location = useLocation();
    const user = location.state.user;

    return (
        <div className='m-5'>
            <Card >
                <div class="main-body ">
                    <Card.Header >
                        <Breadcrumb>
                            <Breadcrumb.Item >
                                <NavLink to='/'>Dashboard</NavLink>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                            <NavLink to='/users'>Users</NavLink>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card.Header>
                    <Card.Body>

                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                                <div class="card  pb-3">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                                            <div class="mt-3">
                                                <h4>{user.name}</h4>
                                                <p class="text-secondary mb-1">{user.email}</p>
                                                <Button variant='outline'> <FaBell className='text-warning my_icon' /></Button>
                                                <Button variant='outline'><FaPaperPlane className='text-success my_icon' /></Button>
                                                <Button variant='outline'><FaBan className='text-danger my_icon' /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {user.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {user.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Phone</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {user.phone}
                                            </div>
                                        </div>
                                        <hr />
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Address</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {user.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="d-flex justify-content-center">
                                                <Button variant="outline-primary" className='px-4'>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default User