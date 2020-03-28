import React , {Component} from 'react'

export default class TabSingleChannel extends Component {

    constructor(props){
        super(props)
    }


    render(){
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card cardsDevicesList">
                            <div className="card-body">
    
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.name}</h6>                               
                                
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        )

    }
}
