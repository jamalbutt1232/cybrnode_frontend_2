import React, { Component } from 'react'
import { CirclePicker } from 'react-color';
import Select from 'react-select';
import TabPlaylist from '../components/tabs_nav/TabPlaylist'
import {getAllPlaylists,addPlaylist,getAllMedia} from  './Utils/Utils.js'
import '../css/TabsNav.css'


let mediaList = [
];

export default class TabContentChannelDetail extends Component {
    constructor(props){
        super(props)
        this.state= {
            // playListData:PlayList
            selectedOption: null,
            background: '#fff',
            playListData : [],
            mediaData:[],
            mediaSelected:[],
            playlistName:""
        }
    }


    componentDidMount() {

        getAllPlaylists().then(playlist => {

            console.log(playlist.data)

            this.setState({playListData:playlist.data})

        })


        getAllMedia().then(media => {

            console.log(media.data)

            this.setState({mediaData:media.data})

            let mediaFiles ={value:"",label:""};

            for(let i=0;i<media.data.length;i++){

                mediaFiles['value'] = media.data[i]._id
                mediaFiles['label'] = media.data[i].name

                mediaList.push(mediaFiles)

                mediaFiles ={value:"",label:""};

            }

            console.log("edia List ",mediaList)

        })
    }



    setName=(e) => {

        console.log(e.target.value)
        this.setState({playlistName:e.target.value})
    }

    findByKey =(key, value) =>{
        return (item, i) => item[key] === value
    }


    AddnewPlaylist=()=>{

       let data={}

        if(this.state.playlistName==="", this.state.selectedOption==null){

        }

        else{

            let media =[]

            for(let i=0;i<this.state.selectedOption.length;i++){
            
                media.push(this.state.selectedOption[i]["value"])

            }

            console.log(media)

            data  = {name:this.state.playlistName,color:this.state.background,media:media}

            addPlaylist(data)

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
                <TabPlaylist></TabPlaylist>
                <hr/>
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
                    </div>
                    </div>
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
                            <input type="text" className="form-control" placeholder="Enter playlist name" onChange={this.setName.bind(this)} />
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
                            <button type="button" className="btn btn-primary" onClick={this.AddnewPlaylist.bind(this)}>Upload</button>
                        </div>
                        </form>
                        </div>
                    
                    </div>
                    
                    </div>
                    </div>
                </div>



        )
    }
}
