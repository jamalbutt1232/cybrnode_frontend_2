import React, { Component } from 'react'
import { Link,Switch , Route} from 'react-router-dom'

import TabChannel from '../components/tabs_nav/TabChannel'
import {getAllChannels,addNewChannel,updateChannel,deleteChannel} from  './Utils/Utils.js'
import '../css/TabsNav.css'
import TabSingleChannel from './TabSingleChannel'

let mediaList = [];

export default class TabContentChannelDetail extends Component {
    constructor(props){
        super(props)
        this.state= {

            channelsList:[1,2,3,4,5]

      
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
                <TabChannel/>
                <hr/>
                  {this.state.channelsList.map(channel=>{

                    return(        <Link to={{pathname:"/schedule",
                    
                                    state: {
                                        _id: channel._id
                                        }
                                        
                                        
                     }} >
                        

                                           <TabSingleChannel name={channel.name}/>


                                    </Link>) 

                    })} 


                    

            </div>
     

        )
    }
}
