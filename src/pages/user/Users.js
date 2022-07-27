import React, { useEffect, useState } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';

const Users = () => {
    const [activeUsers, setActiveUsers] = useState([
        { "name": "Chandan", "email": "chandan@gmail.com", "phone": 9865420120, "city": "#24, abc, vns, 321452 " },
        { "name": "Ankit", "email": "ankit@gmail.com", "phone": 9485325698, "city": "#12 mnj, amd, 369852" }
    ]);
    const [blockedUsers, setBlockedUsers] = useState([
        { "name": "Manoj", "email": "mnj10@gmail.com", "phone": 8181820106, "city": "34, MNJ jnpr 222137" }
    ]);
    const navigate = useNavigate();
    const get_user = (data) => {
        navigate('/users/user', { state: { user: data } })
    };

    useEffect(() => {
        // call API and set data
        // setActiveUsers([]);
        // setBlockedUsers([]);
    }, [])
    return (
        <div className='m-5'>
            <Card className="bg-light ">
                <Card.Header >
                    <h3>Users List</h3>
                </Card.Header>
                <Card.Body>
                    <Tabs
                        defaultActiveKey="activeUsers"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="activeUsers" title="Active">
                            <UserTable
                                users={activeUsers}
                                get_user={get_user}
                            />
                        </Tab>
                        <Tab eventKey="blockedUsers" title="Blocked">
                            <UserTable
                                users={blockedUsers}
                                get_user={get_user}
                            />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Users