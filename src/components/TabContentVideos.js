import React, { Component } from 'react'
import '../css/TabsNav.css'

export default class TabContentVideos extends Component {
  render() {
    return (
      <div className="h1h1h1">
        <div className="container">
          <h1><center><i>Media</i></center></h1>
          <div className="row">
          <div className="card-group">
            <div className="card">
            <video width="320" height="240" controls>
              <source src="//‪video.mp4" type="video/mp4" />
            </video>



              <div className="card-body">
                <center><h5 className="card-title">Name of the video</h5></center>
              </div>

            </div>
          </div>
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
                  <button type="button" className="btn btn-primary">Upload</button>
              </div>
            </form>
            </div>
          </div></div></div>
          </div>
      </div>
    )
  }
}
