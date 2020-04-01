import React, { Component } from 'react'
import '../css/TabsNav.css'
import TabSingleVideo from './TabSingleVideo.js'
import  TabAddDevices from './tabs_nav/TabAddDevices'

import {getAllMedia,uploadFile, displayMessageOnNewEntry} from "./Utils/Utils.js"
import Alert from "sweetalert2";



export default class TabContentVideos extends Component {


  constructor(props){
    super(props)
    this.state = {
      mediaList: [],
      selectedFile:null
    }
  }


  componentDidMount() {

    getAllMedia().then(media => {

      console.log(media)

      this.setState({mediaList:media.data})

    })


  }


  onChangeHandler=event=>{


    console.log(event.target.files[0])
    this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      },()=>{ 
        console.log(this.state)
      })

}

  onClickHandler = (e) => {

    e.preventDefault()  

    if(this.state.selectedFile === null){

      Alert.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seems like you missed a few fields !'
      })

    }


    else{

  
      const data = new FormData() 
      data.append('file', this.state.selectedFile)
      uploadFile(data).then(data=>{

        console.log("DATA",data)

        displayMessageOnNewEntry(data)

    })
    
    }


}


  render() {
    return (
      <div>
        <div className="container">
          <TabAddDevices/>
          <hr/>
          <div className="row">

          {this.state.mediaList.map(media =>{

            
            return <TabSingleVideo name={media.name}/>


          })}

          </div>
          <button type="button" className="btn btn-primary addNewDeviceButton" data-toggle="modal" data-target="#add_new_device">
                + Add new video
          </button>


          <div className="modal fade" id="add_new_device" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title newDeviceModal" id="exampleModalLabel">New device</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form>
            <input type="file" name="file" onChange={this.onChangeHandler}/>
              <hr/>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Upload</button>
              </div>
            </form>
            </div>
          </div></div></div>
          </div>
      </div>
    )
  }
}
