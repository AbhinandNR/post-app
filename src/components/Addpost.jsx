import React from 'react'
import Navuser from './Navuser'


const Addpost = () => {
    return (
        <div>

                <Navuser/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md- col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md- col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="That" className="form-label">UserId</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="Title" className="form-label">Title</label>
                                <input type="text" className="form-control" />
                            </div>
                            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="Body" className="form-label">Body</label>
                                <input type="text" className="form-control" />
                            </div> */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addpost