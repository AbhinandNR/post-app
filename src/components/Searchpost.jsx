import React from 'react'
import Navuser from './Navuser'


const Searchpost = () => {
  return (
    <div>
       <Navuser/>
        <div className="container">
            <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="Userid" className="form-label">UserId</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Serach</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Searchpost