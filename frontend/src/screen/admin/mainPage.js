import React from 'react'
import './style.css'
import { Link, NavLink } from "react-router-dom";

function AdminMainPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                        <div className="border-bottom p-4">
                            <div className="osahan-user text-center">
                                <div className="osahan-user-media"><img className="mb-3 rounded-pill shadow-sm mt-1" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="gurdeep singh osahan" />
                                    <div className="osahan-user-media-body">
                                        <h6 className="mb-2">Manegar</h6>
                                        {/* <p className="mb-1">+91 85680-79956</p> */}
                                        <p>admin@gmail.com</p>
                                        <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" href="#" data-toggle="modal" data-target="#edit-profile-modal"> EDIT</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul id="myTab" className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4">
                            <li className="nav-item"><a id="payments-tab" className="nav-link active" href="#a" data-toggle="tab"> Subjects</a></li>
                            <li className="nav-item"><a id="payments-tab" className="nav-link  " href="#a" data-toggle="tab"> Subjects</a></li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                        <div id="myTabContent" className="tab-content">
                            <div id="payments" className="tab-pane fade active show">
                                <h4 className="font-weight-bold mt-0 mb-4">requists</h4>
                                <div className="row pt-2 pb-2">
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <p className="card-text">  master</p>
                                                <div className="row">
                                                    <a href="/#" className="btn btn-success col-6">accipt</a>
                                                    <a href="/#" className="btn btn-warning col-6">reject</a>
                                                </div> 
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                    <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <p className="card-text">  master</p>
                                                <div className="row">
                                                    <a href="/#" className="btn btn-success col-6">accipt</a>
                                                    <a href="/#" className="btn btn-warning col-6">reject</a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-2 pb-2">
                                    <div className="col-md-6">
                                    <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <p className="card-text">  master</p>
                                                <div className="row">
                                                    <a href="/#" className="btn btn-success col-6">accipt</a>
                                                    <a href="/#" className="btn btn-warning col-6">reject</a>
                                                </div> 
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                    <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <p className="card-text">  master</p>
                                                <div className="row">
                                                    <a href="/#" className="btn btn-success col-6">accipt</a>
                                                    <a href="/#" className="btn btn-warning col-6">reject</a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminMainPage
