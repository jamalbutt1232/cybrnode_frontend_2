import React from 'react'
import { Tab, Tabs,TabList ,TabPanel } from "react-tabs";
import  TabAddVideos from './tabs_nav/TabAddVideos'
import TabPlaylist from './tabs_nav/TabPlaylist'
import '../css/TabsNav.css'
import TabContentDevices from './TabContentDevices';
import TabDevicesDetail from './tabs_nav/TabDevicesDetail'
import TabContentDevicesDetail from './TabContentDevicesDetail';
import TabContentVideos from './TabContentVideos';
import TabChannelDetail from './tabs_nav/TabPlaylist';
import TabPlaylistDetail from './TabPlaylistDetail'
import Nav from './navbar'
import {cybrnodelogo} from '../images/cybrnode-logo.png'

import {Link } from 'react-router-dom'
export default function navbar() {
    return (
        <nav>
            <div className="wrapper">
            <div className="sidebar">
                <img src={ cybrnodelogo } width="200px"/>
                    <div className = "col-lg-4">
                        <ul className="nav-links">
                            <Link to="/devicesDetail">
                                <li>
                                    Driver
                                </li>
                            </Link>
                            <Link to="/mediaDetail">
                                <li>
                                    Videos
                                </li>
                            </Link>
                            <Link to="/playListDetail">
                                <li>
                                    Playlist
                                </li>
                            </Link>
                            <Link to="/channelDetail">
                                <li>
                                    Channel
                                </li>
                            </Link>
                        </ul>    
                    </div> 
                </div>
            </div> 

        </nav>

    )
}
