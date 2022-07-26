import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaUsers, FaShoppingCart } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import img_logo from '../../images/xyz.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSide } from "../../actions/toggleSidebar";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isCollaps: currentState } = useSelector((state) => state.toggleSidebar);
    const [isActive, setIsActive] = useState(false);

    const mnj = () => {
        if (currentState === true) {
            dispatch(toggleSide(!currentState));
            setIsActive(true);
        }
    }
    const mnj2 = () => {
        if (isActive === true) {
            dispatch(toggleSide(!currentState));
            setIsActive(false);
        }
    }
    return (
        <>
            <div id="header" >
                <ProSidebar collapsed={currentState} className="bg-info" onMouseOver={mnj} onMouseLeave={mnj2}>
                    <SidebarHeader>
                        <div className="d-flex justify-content-center py-2">
                            <img src={img_logo} width="65px" alt="icon" />
                        </div>
                    </SidebarHeader>

                    <SidebarContent  >
                        <Menu iconShape="square" >
                            <MenuItem icon={<FaTachometerAlt />} >
                                <NavLink to='/' className="mylink">Dashboard</NavLink>
                            </MenuItem>
                            <SubMenu icon={<FaShoppingCart />} title="Components" >
                                <MenuItem>
                                    <NavLink to='/chart' className="mylink"> Chart </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to='/card' className="mylink"> Cards </NavLink>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu icon={<FaUsers />} title="Components" >
                                <MenuItem>
                                    <NavLink to='/component' className="mylink"> Component1 </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to='/component2' className="mylink">  Component2 </NavLink>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<FiSettings />}>
                                <NavLink to='setting' className="mylink"> Settings</NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>
                                <NavLink to='/logout' className="mylink"> Logout</NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;
