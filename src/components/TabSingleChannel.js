import React , {Component} from 'react'
import {deleteChannel,displayMessageOnNewEntry} from  './Utils/Utils.js'
import { Link} from 'react-router-dom'

export default class TabSingleChannel extends Component {

    constructor(props){
        super(props)
    }


    onDelete=()=>{

        deleteChannel(this.props.channel_id).then(data=>{
            displayMessageOnNewEntry(data)
        })

    }


    render(){
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card cardsDevicesList">
                            <div className="card-body">
    
                                    <h6 className="card-subtitle mb-2 text-muted">{this.props.name}</h6>                                         
                                <Link to=
                                            {{
                                                
                                                pathname:"/schedule",
                                                state: {
                                                    _id: this.props.channel_id
                                                    }
                                            }} 
                                            >

                        
                                            Assign Schedule
                                </Link>


                                <button onClick={this.onDelete.bind(this)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        )

    }
}
