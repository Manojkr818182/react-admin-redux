import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaList } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleSide } from '../../actions/toggleSidebar';

const Header = () => {
    const dispatch = useDispatch();
    const { isCollaps: currentState } = useSelector((state) => state.toggleSidebar);
    const toggleSidebar = () =>{
        dispatch(toggleSide(!currentState));
    }
    return (
        <div className='header'>
            <Navbar>
                <Navbar.Brand className='d-flex ps-3'>
                    <div className='side_toggle'>
                        <FaList onClick={toggleSidebar}/>
                    </div>
                    <NavLink to='/' className=" headerlink ms-4">
                        <h3>Brand Name</h3>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end px-3">
                    <Navbar.Text>
                        <Button variant="outline-danger">MNJ</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
                <NavDropdown.Divider className='text-danger' />
            </Navbar>
        </div>
    )
}

export default Header;
