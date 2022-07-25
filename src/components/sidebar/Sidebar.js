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
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import img_logo from '../../images/xyz.png';

const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const mnj = () => {
        if (menuCollapse === true) {
            setMenuCollapse(false);
            setIsActive(true);
        }
    }
    const mnj2 = () => {
        if (isActive === true) {
            setMenuCollapse(true);
            setIsActive(false);
        }
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse} className="bg-info">
                    <SidebarHeader>
                        <div className="d-flex justify-content-center py-2">
                            <img src={img_logo} width={menuCollapse ? "40px" : "65px"} alt="icon" />
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>

                    <SidebarContent onMouseOver={mnj} onMouseLeave={mnj2} >
                        <Menu iconShape="square" >
                            <MenuItem icon={<FiHome />} >
                                <NavLink to='/' className="mylink">Page 1</NavLink>
                            </MenuItem>
                            <SubMenu icon={<FaRegHeart />} title="Components" >
                                <MenuItem>
                                    <NavLink to='/page2' className="mylink"> Page2 </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to='/page3' className="mylink"> Page3 </NavLink>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu icon={<FaList />} title="Components" >
                                <MenuItem>
                                    <NavLink to='/page4' className="mylink"> Page 4 </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink to='/page5' className="mylink"> Page 5 </NavLink>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<BiCog />}>
                                <NavLink to='6' className="mylink"> Page 6 </NavLink>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square" onMouseOver={mnj} onMouseOut={mnj2}>
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
