import React, { Component } from 'react'


export default class TabSingleVideo extends Component{


    render() {

        return (

            <div className="card-group">
            <div className="card">
              
            <video width="320" height="240" controls>
              <source src="//‪video.mp4" type="video/mp4" />
            </video>



              <div className="card-body">
                <center><h5 className="card-title">{this.props.name}</h5></center>
              </div>

            </div>
          </div>
        )

    }
}