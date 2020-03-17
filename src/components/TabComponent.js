import React, { Component } from 'react'

import { Tab, Tabs,TabList ,TabPanel } from "react-tabs";

import TabPlaylist from './tabs_nav/TabPlaylist'
import '../css/TabsNav.css'
import TabContentDevices from './TabContentDevices';
import TabContentDevicesDetail from './TabContentDevicesDetail';
import TabContentVideos from './TabContentVideos';
import TabChannelDetail from './TabChannelDetail';
import {cybrnodelogo} from '../images/cybrnode-logo.png'
import TabPlaylistDetail from './TabPlaylistDetail'
import Schedule from './Schedule'

import Nav from './navbar'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'

export default class TabComponent extends Component {
    state ={
        tabIndex : 0
    }
    render() {
        return (
            <div>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path="/devicesDetail" component={TabContentDevices}/>
                        <Route path="/mediaDetail" component={TabContentVideos}/>
                        <Route path="/playListDetail" component={TabPlaylistDetail}/>
                        <Route path="/channelDetail" component={TabChannelDetail}/>
                        <Route path="/channelDetail" component={TabChannelDetail}/>
                        <Route path="/schedule" component={Schedule}/>

                    </Switch>
    
                </Router>

            </div>
        )
    }
}
