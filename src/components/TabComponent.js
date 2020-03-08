import React, { Component } from 'react'

import { Tab, Tabs,TabList ,TabPanel } from "react-tabs";
import  TabAddDevices from './tabs_nav/TabAddDevices'
import  TabAddVideos from './tabs_nav/TabAddVideos'
import TabPlaylist from './tabs_nav/TabPlaylist'
import '../css/TabsNav.css'
import TabContentDevices from './TabContentDevices';
import TabDevicesDetail from './tabs_nav/TabDevicesDetail'
import TabContentDevicesDetail from './TabContentDevicesDetail';
import TabContentVideos from './TabContentVideos';
import TabChannelDetail from './tabs_nav/TabPlaylist';
import TabPlaylistDetail from './TabPlaylistDetail';
import cybrnodelogo from '../images/cybrnode-logo.png'; 

export default class TabComponent extends Component {
    state ={
        tabIndex : 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex= { this.state.tabIndex } 
                onSelect={tabIndex=> this.setState({tabIndex})} >
                    <TabList className="tab-nav-container">
    
                        <Tab className={ `${this.state.tabIndex === 0 ? 'active' :null}` }>
                            <TabAddDevices />
                        </Tab>
                        <Tab className={ `${this.state.tabIndex === 1 ? 'active' :null}` }>
                            <TabDevicesDetail />
                        </Tab>
                        <Tab className={ `${this.state.tabIndex === 2 ? 'active' :null}` }>
                            <TabAddVideos />
                        </Tab>
                        <Tab className={ `${this.state.tabIndex === 3 ? 'active' :null}` }>
                            <TabPlaylist />
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <TabContentDevices></TabContentDevices>
                    </TabPanel>
                    <TabPanel>
                        <TabContentDevicesDetail></TabContentDevicesDetail>
                    </TabPanel>
                    <TabPanel>
                        <TabContentVideos></TabContentVideos>
                    </TabPanel>
                    <TabPanel>
                        <TabPlaylistDetail></TabPlaylistDetail>
                    </TabPanel>
                </Tabs>
                {/* <div className="wrapper">
                    <div className="sidebar">
                        <img src={cybrnodelogo} width="200px"/>
                            <Tabs className="tabs" selectedIndex= { this.state.tabIndex } 
                                onSelect={tabIndex=> this.setState({tabIndex})} >
                                <div className = "col-lg-4">
                                    <TabList className="tab-nav-container">

                                        <ul>
                                            
                                            <Tab className={ `${this.state.tabIndex === 0 ? 'active' :null}` }>
                                                <TabAddDevices />
                                            </Tab>
                                            
                                            <Tab className={ `${this.state.tabIndex === 1 ? 'active' :null}` }>
                                                <TabDevicesDetail />
                                            </Tab>
                                            <Tab className={ `${this.state.tabIndex === 2 ? 'active' :null}` }>
                                                <TabAddVideos />
                                            </Tab>

                                            <Tab className={ `${this.state.tabIndex === 3 ? 'active' :null}` }>
                                                <TabChannelDetail />
                                            </Tab>
                                        </ul>    
                                    </TabList>
                                </div>
                                
                                <div className="main-content">
                                    <TabPanel>
                                        <TabContentDevices></TabContentDevices>
                                    </TabPanel>
                                    <TabPanel>
                                        <TabContentDevicesDetail></TabContentDevicesDetail>
                                    </TabPanel>
                                    <TabPanel>
                                        <TabContentVideos></TabContentVideos>
                                    </TabPanel>
                                    <TabPanel>
                                        <TabContentChannelDetail></TabContentChannelDetail>
                                    </TabPanel>
                                </div>                            
                        </Tabs>    
                        </div>
                        </div> */}
 
            </div>
        )
    }
}
