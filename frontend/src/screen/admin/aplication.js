import React from 'react'
import './style.css'
import { Link, NavLink } from "react-router-dom";

function Aplication() {
    return (
        <div>
            <div className="container bootstrap snippets bootdey">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4"><img className="img-circle img-thumbnail isTooltip" style={{ width: 600 }} title src="https://bootdey.com/img/Content/avatar/avatar7.png" alt data-original-title="Usuario" /></div>
                        <div className="col-md-6"><strong>Information</strong><br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td><strong> Id Numper </strong></td>

                                            <td className="text-primary">             
                                             <input type="text"  className="form-control"  placeholder="Username"  defaultValue="9787202242" />
                                             </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Name </strong></td>
                                            <td className="text-primary">
                                            <input type="text"  className="form-control"  placeholder="Username"  defaultValue="mostafa" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Lastname </strong></td>
                                            <td className="text-primary">
                                            <input type="text"  className="form-control"  placeholder="Username"  defaultValue="soltan" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Role </strong></td>
                                            <td className="text-primary">
                                            <input type="text"  className="form-control"  placeholder="Username"  defaultValue="master" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> Email </strong></td>
                                            <td className="text-primary">
                                            <input type="text"  className="form-control"  placeholder="Username"  defaultValue="m@m.com" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong> created </strong></td>
                                            <td className="text-primary">20 jul 2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <center>
            <button className="btn-danger">Update</button>
            <button className="btn-danger">Delete</button>
            <button className="btn-danger">Accept</button>
            <button className="btn-danger">Reject</button>
            </center>
            

        </div>


    )
}

export default Aplication
