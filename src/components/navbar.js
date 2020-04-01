import React from 'react'
import {Link ,NavLink } from 'react-router-dom'


export default function navbar() {
    return (
        <nav>


            <div className="wrapper">
            <div className="sidebar">
                <img src={require('../images/cybrnode-logo.png')} width="200px" />
                <hr/>
                    <div className = "col-lg-4">
                        <ul className="nav-links">
                            <li className="link-wrapper">
                                <NavLink to="/devicesDetail" activeClassName="active">
                                    Devices
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/mediaDetail" activeClassName="active">
                                    Videos
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/playListDetail" activeClassName="active">
                                    Playlist
                                </NavLink>
                            </li>
                            <li className="link-wrapper">
                                <NavLink to="/channelDetail" activeClassName="active">
                                    Channel
                                </NavLink>
                            </li>
                        </ul>    
                    </div> 
                </div>
            </div> 
        </nav>
    )
}
