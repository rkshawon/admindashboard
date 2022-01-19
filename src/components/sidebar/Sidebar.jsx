import React from 'react'
import "./sidebar.css"
import {Timeline, TrendingUp, Home} from '@material-ui/icons';
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="dashboard">Dashboard</h3>
                <ui className="list">
                    <li className="listItem">
                        <Home className='icons'/>
                        <Link to = "/" className='links'>Home</Link>
                    </li>
                        <li className="listItem">
                        <Timeline className='icons'/>
                        Analytic
                    </li>
                    <li className="listItem">
                        <TrendingUp className='icons'/>
                        Sales
                    </li>
                </ui>
            </div>
            <div className="sidebarMenu">
                <h3 className="dashboard">Quick Menu</h3>
                <ui className="list">
                    <li className="listItem">
                        <Home className='icons'/>
                        <Link to = "/users" className='links'>Users</Link>
                    </li>
                        <li className="listItem">
                        <Timeline className='icons'/>
                        Product
                    </li>
                    <li className="listItem">
                        <TrendingUp className='icons'/>
                        Transaction
                    </li>
                    <li className="listItem">
                    <TrendingUp className='icons'/>
                    Report
                </li>
                </ui>
            </div>
            <div className="sidebarMenu">
            <h3 className="dashboard">Notification</h3>
            <ui className="list">
                <li className="listItem">
                    <Home className='icons'/>
                    Mail
                </li>
                    <li className="listItem">
                    <Timeline className='icons'/>
                    Feedback
                </li>
                <li className="listItem">
                    <TrendingUp className='icons'/>
                    Message
                </li>
            </ui>
        </div>
        <div className="sidebarMenu">
        <h3 className="dashboard">Staff</h3>
        <ui className="list">
            <li className="listItem">
                <Home className='icons'/>
                Manage
            </li>
            <li className="listItem">
                <Timeline className='icons'/>
                Analytic
            </li>
            <li className="listItem">
                <TrendingUp className='icons'/>
                Report
            </li>
        </ui>
        </div>
        </div>
    </div>
    )
}

export default Sidebar
