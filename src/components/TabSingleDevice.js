import React, {Component} from 'react'

import {getAllChannels,getDeviceStatus,assignChannelToDevice} from './Utils/Utils.js'

export default class TabSingleDevice extends Component {

    constructor(props){
        super(props)
        this.state={
            channelList: []
        }
    }


    AssignChannel = (channel_id)=>{
        
        let channel_assingment_data = {
            
            subscribed_channel: channel_id,
        }


        console.log("ID : ",channel_assingment_data)

        assignChannelToDevice(channel_assingment_data,this.props.id)


    }

    componentDidMount(){

        getAllChannels().then(channels=>{

            console.log(channels.data)

            this.setState({channelList:channels.data})

        })
        console.log(this.props.id)

        setInterval(()=>{


            getDeviceStatus(this.props.id).then(data=>{
              //  console.log(data)
            })


        },10000)



    }

    render() {
        
        return (
            <div>
                <div className="card cardsDevicesList">
                <div className="card-body">
    
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.name}</h6>                               
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-sm" 
                        type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Channel
                        </button>
                        <span className="dot"></span>
    
                        <span>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {this.state.channelList.map(channel=>{

                                return  <a className="dropdown-item" href="#" onClick={this.AssignChannel.bind(this,channel._id)}>{channel.name}</a>

                            })} 

                            </div>
    
                        </span>
                    </div>
                </div>
            </div>
                
        </div>
        )
    }

}
