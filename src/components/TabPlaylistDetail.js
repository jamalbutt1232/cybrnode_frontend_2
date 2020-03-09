import React, { Component } from 'react'
import { CirclePicker } from 'react-color';
import Select from 'react-select';
import '../css/TabsNav.css'


const mediaList = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default class TabContentChannelDetail extends Component {
    constructor(props){
        super(props)
        this.state= {
            // playListData:PlayList
            selectedOption: null,
            background: '#fff',
            playListData : [1,2]
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <div className="card cardsDevicesList">
                        <div className="card-body">
                            
                        {/*  */}
                        <button type="button" className="btn btn-light btn-for-playlist" data-toggle="modal" data-target="#playlist_details">
                            playListData.name
                        </button>


                        <div className="modal fade" id="playlist_details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-body">
                            <form>

                                <div className="form-group">
                                    <label>Name : </label>
                                    <input type="text" className="form-control" value={'here value will come safi'} />
                                </div>
                                <hr/>
                                <label>Edit media</label>
                                <div className="form-group"> 
                                    <Select 
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={mediaList}
                                    isMulti= {true}
                                    placeholder = {'Choose videos'}
                                    />
                                </div>
                                <hr/>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                            </div>
                        </div></div></div>
                        {/*  */}
                        </div>
                    </div></div>
                </div>
            <button type="button" className="btn btn-primary addNewDeviceButton" data-toggle="modal" data-target="#add_new_playlist">
                + Create new PlayList
            </button>


            <div className="modal fade" id="add_new_playlist" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <CirclePicker className="colorPickerInPlayList"
                            color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                    />
                </div>
                <label>Select media</label>
                <div className="form-group"> 
                    <Select 
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={mediaList}
                    isMulti= {true}
                    placeholder = {'Choose videos'}
                    />
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
