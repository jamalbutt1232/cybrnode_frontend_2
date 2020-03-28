import React, { Component } from 'react'
import { CirclePicker } from 'react-color';
import Select from 'react-select';
import TabPlaylist from '../components/tabs_nav/TabPlaylist'
import {getAllMedia} from  './Utils/Utils.js'

import '../css/TabsNav.css'

let mediaList = [
];

export default class TabSinglePlaylist extends Component {
    constructor(props){
        super(props)
        this.state= {
            // playListData:PlayList
         
            mediaData:[],
            mediaSelected:[],
            playlistName:""
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    componentDidMount() {


        getAllMedia().then(media => {

            console.log(media)

            this.setState({mediaData:media.data})

            let mediaFiles ={value:"",label:""};

            for(let i=0;i<media.data.length;i++){

                mediaFiles['value'] = media.data[i]._id
                mediaFiles['label'] = media.data[i].name

                mediaList.push(mediaFiles)

                mediaFiles ={value:"",label:""};

            }

            console.log("Media List ",mediaList)

        })
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <div className="card cardsDevicesList">
                    <div className="card-body">
                        

                    <button type="button" className="btn btn-light btn-for-playlist" data-toggle="modal" data-target="#playlist_details">
                        {this.props.name}
                    </button>


                    <div className="modal fade" id="playlist_details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-body">
                        <form>

                            <div className="form-group">
                                <label>                        
                                    {this.props.name}
                                </label>
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
    
                    </div>
                </div>

                
            </div>
        )
    }
}
