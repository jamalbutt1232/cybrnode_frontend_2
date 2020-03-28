import React, {Component} from 'react'

import {getAllChannels} from './Utils/Utils.js'

export default class TabSingleDevice extends Component {

    constructor(props){
        super(props)
        this.state={
            channelList: []
        }
    }

    componentDidMount(){

        getAllChannels().then(channels=>{

            console.log(channels.data)

            this.setState({channelList:channels.data})

        })
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

                                return  <a className="dropdown-item" href="#">{channel.name}</a>

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
