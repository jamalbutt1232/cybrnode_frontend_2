import React, { Component } from 'react'
import  TabAddDevices from './tabs_nav/TabAddDevices'
import TabSingleDevice from './TabSingleDevice'

import '../css/TabsNav.css'
import {addNewDevice,getAllDevices,displayMessageOnNewEntry} from './Utils/Utils.js'
// import styled from 'styled-components'
import Alert from "sweetalert2";


export default class TabContentDevices extends Component{
    state = {
        selectedOption: null,
        deviceList:[],
        name:"",
        key:"",
        location:""

    };


    componentDidMount(){

        getAllDevices().then(devices=>{

            console.log(devices)

            this.setState({deviceList:devices.data})
        })

        




    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    setName = (e) => {

        this.setState({name: e.target.value})

    }

 

    setLocation = (e) => {

        this.setState({location: e.target.value})

    }

    RegisterNewDevice = () => {

        let data ={};

        if(this.state.name ===""  || this.state.location===""){

            Alert.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })


        }

        else{

            data = {name:this.state.name, key:this.state.key, location:this.state.location}
            addNewDevice(data).then(data=>{
                console.log(data)
                displayMessageOnNewEntry(data);

            })


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


                    {this.state.deviceList.map(device=>{

                                    console.log(device.key)

                        return     <TabSingleDevice name={device.name} id={device.key}/>
                    

                    })} 

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
