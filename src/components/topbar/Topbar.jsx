import React from 'react'
import "./topbar.css"
import profile from "./profile.jpg"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className="logo">RkS</span>
                </div>
                <div className='topRight'>
                    <div className="topbarContainer">
                        <NotificationsNone/>
                        <span className="badge">2</span>
                    </div>
                    <div className="topbarContainer">
                        <Language/>
                    </div>
                    <div className="topbarContainer">
                        <Settings/>
                    </div>
                    <div className="topbarContainer">
                        <img src={profile} alt='' className='topAvater'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
