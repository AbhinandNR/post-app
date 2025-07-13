import React from 'react'
import { UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom'

import Navuser from './Navuser'

const Deletepost = () => {
  return (
    <div>
<Navuser/>
        <div className="container">
            <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="Userid" className="form-label">UserId</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Deletepost