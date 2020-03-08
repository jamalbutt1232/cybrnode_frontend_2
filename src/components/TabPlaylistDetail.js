import React, { Component } from 'react'
import { CirclePicker } from 'react-color';

import { SwatchesPicker } from 'react-color';


export default class TabContentChannelDetail extends Component {
    constructor(props){
        super(props)
        this.state= {
            // playListData:PlayList
            background: '#fff',
            playListData : [1,2]
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h5>playListData.name</h5>
                </div>
            <button type="button" className="btn btn-primary addNewDeviceButton" data-toggle="modal" data-target="#add_new_device">
                + Create new PlayList
            </button>


            <div className="modal fade" id="add_new_device" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title newDeviceModal" id="exampleModalLabel">New PlayList</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form>

                <div className="form-group">
                    <label>Name : </label>
                    <input type="text" className="form-control" placeholder="Enter playlist name" />
                </div>
                <hr/>
                <div className="form-group">
                    <label>Color : </label>

                    <CirclePicker className="colorPickerInPlayList"/>

                </div>
                <hr/>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Upload</button>
                </div>
                </form>
                </div>
            </div></div></div>
          </div>

        )
    }
}
