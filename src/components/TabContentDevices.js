import React, { Component } from 'react'
import  TabAddDevices from './tabs_nav/TabAddDevices'
import TabSingleDevice from './TabSingleDevice'

import '../css/TabsNav.css'
import {getAllChannels,addNewDevice} from './Utils/Utils.js'
// import styled from 'styled-components'



export default class TabContentDevices extends Component{
    state = {
        selectedOption: null,
        channelList: [],
        name:"",
        key:"",
        location:""

    };


    componentDidMount(){

        getAllChannels().then(channels=>{

            console.log(channels.data)

            this.setState({channelList:channels.data})


        })


    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    setName = (e) => {

        this.setState({name: e.target.value})

    }

    setKey = (e) => {

        this.setState({key: e.target.value})

    }

    setLocation = (e) => {

        this.setState({location: e.target.value})

    }

    RegisterNewDevice = () => {

        let data ={};

        if(this.state.name ==="" && this.state.key==="" && this.state.location===""){

        }

        else{

            data = {name:this.state.name, key:this.state.key, location:this.state.location}
            addNewDevice(data)


        }


    }

    

    render() {
        const { selectedOption } = this.state;
        return (

            <div className="container">
                <TabAddDevices/>
                <hr/>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card cardsDevicesList">
                            <div className="card-body">

                                <h6 className="card-subtitle mb-2 text-muted">Name of device</h6>                               
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle btn-sm" 
                                    type="button" id="dropdownMenuButton" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select Channel
                                    </button>
                                    <span className="dot"></span>

                                    <span>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Channel 1</a>
                                            <a className="dropdown-item" href="#">Channel 2</a>
                                            <a className="dropdown-item" href="#">Channel 3</a>
                                        </div>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary addNewDeviceButton" data-toggle="modal" data-target="#add_new_device">
                    + Add new
                    </button>


                    <div className="modal fade" id="add_new_device" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title newDeviceModal" id="exampleModalLabel">New device</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Key</label>
                                    <input type="text" className="form-control" placeholder="Enter key" onChange={this.setKey.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter device name" onChange={this.setName.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" className="form-control" placeholder="Location address" onChange={this.setLocation.bind(this)}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.RegisterNewDevice.bind(this)}>Save changes</button>
                                </div>
                            </form>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>


                
            </div>

          
                );
    }
}