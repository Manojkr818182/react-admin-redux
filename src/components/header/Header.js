import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'; import { NavLink } from 'react-router-dom';
;
const Header = () => {
    return (
        <div className='header'>
            <Navbar>
                <Navbar.Brand className='ps-5'>
                    <NavLink to='/' className="headerlink">
                        <h3>Brand Name</h3>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end px-3">
                    <Navbar.Text>
                        <Button variant="outline-danger">iGlobsyn</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header