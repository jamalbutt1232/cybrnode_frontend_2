import React, { Component } from 'react'

import TabChannel from '../components/tabs_nav/TabChannel'
import {getAllChannels,addNewChannel,updateChannel,deleteChannel,displayMessageOnNewEntry} from  './Utils/Utils.js'
import '../css/TabsNav.css'
import TabSingleChannel from './TabSingleChannel'
import Alert from "sweetalert2";


let mediaList = [];

export default class TabContentChannelDetail extends Component {
    constructor(props){
        super(props)
        this.state= {

            channelsList:[]

      
        }
    }


    componentDidMount() {

        getAllChannels().then(data=>{

            console.log("THIS IS THE DATA ",data.data)

            this.setState({channelsList:data.data})
        })
        
    }

    setName = (e) => {

        this.setState({name: e.target.value})
    
    }
    
   
    
    RegisterNewDevice = () => {
    
        let data ={};
    
        if(this.state.name ==="" && this.state.key==="" && this.state.location===""){
    
            Alert.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
    
    
        }
    
        else{
    
            data = {name:this.state.name}
            addNewChannel(data).then(data=>{
                displayMessageOnNewEntry(data)
    
            })
    
    
        }
    
    
    }
 
    render() {
        return (

            <div>
                <TabChannel/>
                <hr/>
                  {this.state.channelsList.map(channel=>{

                    return(       <div> 
                                        
                                    <TabSingleChannel name={channel.name} channel_id={channel._id}/>

                                                                   
                                    </div>
                                    
                                    
                                    ) 

                    })} 


                    
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
     

        )
    }
}
