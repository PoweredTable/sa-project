import React from 'react'
import { useNavigate, NavLink } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../assets/AdminLogo.svg'

import './Sidebar.css'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='sidebar'>
            <ul>
                <div id='logo'>
                    <img src={logo}></img>
                    <hr />
                </div>
                {SidebarData.map((val, key) => {
                    return (
                        <NavLink key={key} to={val.link} activeclassname="active">
                            <li>
                                <div id='icon'>{val.icon} </div>
                                <div id='title'>{val.title}</div>
                            </li>
                        </NavLink>
                    )
                })}

                <a href='/'>
                    <div className='exit'>
                        <hr />
                        <li>
                            <div id='icon'><LogoutIcon></LogoutIcon> </div>
                            <div id='title'>Sair</div>
                        </li>
                    </div>
                </a>
            </ul>
        </div>
    );
}

export default Sidebar