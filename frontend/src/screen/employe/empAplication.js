import React from 'react'
import './style.css'
import { Link, NavLink } from "react-router-dom";

function EmpAplication() {
    return (
        <div className="container">
            <div className="row"> 
                <div className="col-md-12">
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
                                                <NavLink className="nav-link" to="/empDetail">
                                                    <p className="card-text">  Show Aplication</p>
                                                </NavLink>
                                                
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <NavLink className="nav-link" to="/empDetail">
                                                    <p className="card-text">  Show Aplication</p>
                                                </NavLink>
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
                                                <NavLink className="nav-link" to="/empDetail">
                                                    <p className="card-text">  Show Aplication</p>
                                                </NavLink>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '19rem' }}>
                                            <img alt="sub" className="card-img-top" src="https://www.bootdey.com/img/Content/avatar/avatar1.png" />
                                            <div className="card-body">
                                                <h5 className="card-title"> mostafa</h5>
                                                <NavLink className="nav-link" to="/empDetail">
                                                    <p className="card-text">  Show Aplication</p>
                                                </NavLink>
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

export default EmpAplication
