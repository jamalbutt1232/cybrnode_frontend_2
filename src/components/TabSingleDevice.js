import React from 'react'

export default function TabSingleDevice() {
    return (
        <div>
            <div className="card cardsDevicesList">
            <div className="card-body">

                <h6 className="card-subtitle mb-2 text-muted">Name of device</h6>                               
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle btn-sm" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Channel
                    </button>
                    <span className="dot"></span>

                    <span>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Channel 1</a>
                            <a className="dropdown-item" href="#">Channel 2</a>
                            <a className="dropdown-item" href="#">Channel 3</a>
                        </div>

                    </span>
                </div>
            </div>
        </div>
            
        </div>
    )
}
