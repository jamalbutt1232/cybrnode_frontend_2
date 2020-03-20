import React, { Component } from 'react'
import { Link,Switch , Route} from 'react-router-dom'

import TabChannel from '../components/tabs_nav/TabChannel'
import {getAllChannels,addNewChannel,updateChannel,deleteChannel} from  './Utils/Utils.js'
import '../css/TabsNav.css'


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

 
    render() {
        return (

            <div>

                <ul style={{marginLeft:"20%"}}>

                    {this.state.channelsList.map(channel=>{

                    return(        <Link to={{pathname:"/schedule",
                    
                                    state: {
                                        _id: channel._id
                                        }
                                        
                                        
                     }} >
                        

                                           <li id={channel._id} key={channel._id}>{channel.name}</li>


                                    </Link>) 

                    })}

                </ul>

            </div>
     

        )
    }
}
