
import React, { Component } from 'react'
import Select from 'react-select';
import TabDevicesDetail from './tabs_nav/TabDevicesDetail'

import '../css/TabsNav.css'
const channelList = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];



export default class TabContentDevices extends Component{
    constructor(props){
        super(props)
            this.state= {
                devicesdata:[1,2]
            }
    }
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
    return (

        <div className="tabcontent">



            <div className="container formForAddingDevices">
                <TabDevicesDetail></TabDevicesDetail>
                <hr/>
                <div className="row">
                    <div className=" col-lg-8">
                        <div className="tab-content">
                            <h1><center><i>Device Details</i></center></h1>
                            
                            {/* start forms here for new device */}
                            <form>
                                <div className="form-group">
                                    <label>Device name</label>
                                    <input type="text" className="form-control">devicesdata.name</input>
                                </div>

                                <label>Channel name</label>
                                <div className="form-group"> 
                                    <Select 
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={channelList}
                                    isMulti= {false}
                                    placeholder = {'Select Channel'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Location name</label>
                                    <input type="text" className="form-control" placeholder="Enter location" >devicesdata.location</input>
                                </div>
                                <div className="form-group">
                                    <label>Key</label>
                                    <input type="text" className="form-control" placeholder="key will come here" readOnly>devicesdata.key</input>
                                </div>
                                
                                <button type="submit" className="btn btn-primary submitButtonAddingDevices">Save</button>
                                </form>
                                
                            {/* ends here */}

                        </div>
                    </div>
                    <div className= "screenshotImage col-lg-4">
                        <div className="card">
                            <img className="card-img-top" 
                            src="
                            https://dad.neocities.org/resources/dog7.jpg
                            " />
                        </div> 
                    </div>
                    </div>
            </div>
        </div>

    );
    }
}


