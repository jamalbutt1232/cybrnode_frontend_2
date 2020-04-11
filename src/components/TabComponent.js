import React, { Component } from 'react'

import { Tab, Tabs,TabList ,TabPanel } from "react-tabs";

import '../css/TabsNav.css'
import TabContentDevices from './TabContentDevices';
import TabContentVideos from './TabContentVideos';
import TabChannelDetail from './TabChannelDetail';
import TabPlaylistDetail from './TabPlaylistDetail'
import Schedule from './Schedule'
import SignupForm from './SignupForm'
import Login from './LoginForm'
import Nav from './navbar'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'

export default class TabComponent extends Component {
    state ={
        tabIndex : 0
    }
    render() {
        return (
            <div className="row">
                <Router>
                    <div className="col-lg-3">
                        <Nav/>
                    </div>
                    <div className="col-lg-9">
                        <Switch>
                            <Route path="/schedule" component={Schedule}/>
                            <Route path="/devicesDetail" component={TabContentDevices}/>
                            <Route path="/mediaDetail" component={TabContentVideos}/>
                            <Route path="/playListDetail" component={TabPlaylistDetail}/>
                            <Route path="/channelDetail" component={TabChannelDetail}/>
                            <Route path="/channelDetail" component={TabChannelDetail}/>
                            <Route path="/" component={SignupForm}/>
                            <Route path="/login" component={Login}/>


                        </Switch>
                    </div>
                </Router>

            </div>
        )
    }
}
