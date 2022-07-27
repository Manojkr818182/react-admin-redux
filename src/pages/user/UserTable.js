import React from 'react';
import { Table } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

const UserTable = (props) => {
    const { users, get_user } = props;
    return (
        <div className="table-responsive my_table">
            <Table striped bordered hover m-1 >
                <thead >
                    <tr >
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody >
                    {users &&
                        users.map((user, index) => {
                            return (
                                <tr key={index} className="d-flex-column ">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className='my_icon text-primary' onClick={() => get_user(user)}><FaEye /></td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
            {!users[0] &&
                <div className='d-flex justify-content-center text-danger'>
                    <h6>Not Available !</h6>
                </div>
            }
        </div>
    )
}

export default UserTable;